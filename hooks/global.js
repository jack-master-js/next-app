import { createContext, useContext, useReducer } from 'react';
import { produce } from 'immer';

//initial
const initialState = {
    isLoading: false,
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

function userReducer(user, { type, payload }) {
    return produce(user, (draft) => {
        switch (type) {
            case 'set_loading': {
                draft.isLoading = payload;
                break;
            }

            case 'change_name': {
                draft.name = payload;
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
    // const [isLoading, setLoading] = useState(false);
    // return (
    //     <StateContext.Provider
    //         value={{
    //             isLoading,
    //             setLoading,
    //         }}
    //     >
    //         {children}
    //     </StateContext.Provider>
    // );
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Global State
export const useGlobalState = () => useContext(StateContext);
