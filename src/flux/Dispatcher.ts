import { ProductType } from "../types/Types";
import { State } from "./Store";
import { CartActionTypes, loadStorageActionType } from "./Actions";

export type Action =
    | { type: typeof CartActionTypes.ADD_TO_CART; payload: ProductType }
    | { type: typeof CartActionTypes.REMOVE_FROM_CART; payload: number } //payload: el id del producto a eliminar
    | { type: typeof loadStorageActionType.LOAD_STORAGE; payload: State };

export class Dispatcher {
    // Los metodos de cada store que accionan las handleActions
    private _listeners: Array<(action: Action) => void>;

    constructor() {
        this._listeners = [];
    }

    // This method is used to register a callback function that will be called
    // whenever an action is dispatched. It allows components to listen for
    // changes in the application state and update themselves accordingly.
    register(callback: (action: Action) => void): void {
        this._listeners.push(callback);
    }

    // This method is used to dispatch an action to all registered listeners.
    // It takes an action object as an argument and calls each registered
    // callback function with the action as an argument. This allows components
    // to respond to actions and update their state accordingly.
    dispatch(action: Action): void {
        for (const listener of this._listeners) {
            listener(action);
        }
    }
}

export const AppDispatcher = new Dispatcher();