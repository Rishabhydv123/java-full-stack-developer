import * as types from '../Reducer/Action';

export const Reducer = (oldState, action) => {
    console.log('action:', action.type);
     console.log('action:', action.payload);

     switch (action.type) {
        case types.ADD_TODO_ITEMS:
            return [
                ...oldState,
                {
                    id: oldState.length + 1,
                    text: action.payload,
                    idEdits: false,
                    isCompleted: false,
                },
            ];

        default:
            return oldState;    
     }
};