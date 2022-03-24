import { initializeApp, getApp, getApps } from 'firebase/app';
import {
    getAnalytics,
    logEvent as analyticsLogEvent,
    isSupported as analyticsIsSupported,
} from 'firebase/analytics';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import { generatePushID } from './generate-pushid';

const firebaseConfig = {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: '',
};

// expose firebase analytics object
export const logEvent = (event, params) => {
    // check if firebase analytics is supported in the current environment
    analyticsIsSupported().then((supported) => {
        if (!supported) return;

        // retrieve firebase app and analytics object
        const app =
            getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
        const analytics = getAnalytics(app);

        // log event to google analytics
        analyticsLogEvent(analytics, event, params);
    });
};

// expose upload helper function
export const uploadFile = async (file) => {
    // retrieve firebase app and storage object
    const app =
        getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    const storage = getStorage(app, 'gs://xxxxx');

    // prepare file metadata for upload
    const contentType = file.type;
    const dotIndex = file.name.lastIndexOf('.');
    const extension = file.name.substring(dotIndex, file.name.length);
    const path = generatePushID() + extension;
    const targetRef = ref(storage, path);

    // upload file to CDN
    const result = await uploadBytes(targetRef, file, { contentType });

    // return CDN url
    return await getDownloadURL(result.ref);
};
