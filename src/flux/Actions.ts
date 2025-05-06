import { AppDispatcher } from './Dispatcher';
import { State } from './Store';
import { ProductType } from '../types/Types';

export const CartActionTypes = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
} as const;


export const loadStorageActionType = {
    LOAD_STORAGE: 'LOAD_STORAGE',
    CLEAR_STORAGE: 'CLEAR_STORAGE'
}as const; 
// Que al cargar la información sea por medio
// De acciones, para estandarizarlo


export const CartActions = {
    add: (value: ProductType) => {
        AppDispatcher.dispatch({
            type: CartActionTypes.ADD_TO_CART,
            payload: value,
        });
    },
    remove: (value: ProductType) => {
        AppDispatcher.dispatch({
            type: CartActionTypes.REMOVE_FROM_CART,
            payload: value.id,
        });
    },
};

export const LoadActions = {
    load: (state:State) => {
        AppDispatcher.dispatch({
            type: loadStorageActionType.LOAD_STORAGE,
            payload: state
        })
    },
    remove: () => {
        AppDispatcher.dispatch({
            type: loadStorageActionType.CLEAR_STORAGE
        })
    }
}; // Se toma el estado para guardarlo
