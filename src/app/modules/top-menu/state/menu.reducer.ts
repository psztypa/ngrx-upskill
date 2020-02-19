import { MenuActions, MenuActionTypes } from './menu.actions';

export interface MenuState {
    showOnlyOnSale: boolean
}

const initialState: MenuState = {
    showOnlyOnSale: true
};

export function reducer(state = initialState, action: MenuActions): MenuState {
    switch (action.type) {
        case MenuActionTypes.ToggleShowOnlyOnSale:
            return {
                ...state,
                showOnlyOnSale: action.payload
            };

        default:
            return state;
    }
}