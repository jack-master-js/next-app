import { useReducer } from 'react';

function init() {
    return {
        name: 'global user',
        age: 30,
    };
}
function reducer(state, action) {
    switch (action.type) {
        case 'change_name':
            state.name = action.payload;
            break;

        case 'change_age':
            state.age = action.payload;
            break;

        case 'reset':
            state = init();
            break;

        default:
            throw Error();
            break;
    }
    return state;
}

export const useGlobal = () => {
    const [state, dispatch] = useReducer(reducer, undefined, init);
    return { state, dispatch };
};
