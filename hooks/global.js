import { createContext, useContext, useReducer } from 'react';
import { produce } from 'immer';

//initial
const initialState = {
    user: {
        name: 'global user',
    },
};

//reducer
function reducer({ user }, action) {
    // middleware goes here, i.e calling analytics service, etc.
    return {
        user: userReducer(user, action),
    };
}

function userReducer(user, action) {
    return produce(user, (draft) => {
        switch (action.type) {
            case 'change_name': {
                draft.name = action.payload;
                break;
            }

            case 'reset_name': {
                draft.name = 'global user';
                break;
            }

            default:
                throw Error('no such reducer!');
        }
    });
}

//Context
const StateContext = createContext();

//Provider
export const StateProvider = ({ children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Global State
export const useGlobalState = () => useContext(StateContext);
