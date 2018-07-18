import * as actions from './actions';

const initialState = {
    newItem: '',
    items: []
};

export function rootReducer(currentState = initialState, action) {
    switch (action.type) {
        case actions.UPDATE_NEW_ITEM: {
            return { ...currentState, newItem:action.payload };
        }
        case actions.CREATE_ITEM: {
            return { 
                ...currentState, 
                items: [...currentState.items, currentState.newItem], 
                newItem: '' 
            };
        }
    }
    return currentState;
}