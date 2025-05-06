import { AppDispatcher, Action } from './Dispatcher';
import { CartActionTypes, loadStorageActionType } from './Actions';
import { ProductType } from '../types/Types';

export type User = {
    name: string;
    age: number;
}

export type State = {
    cart: ProductType[];
};

type Listener = (state: State) => void;


class Store {
    private _myState: State = {
        cart: []
    }
    // Los componentes
    private _listeners: Listener[] = [];

    constructor() {
        AppDispatcher.register(this._handleActions.bind(this)); // Bind the context of this method to the Store instance
    }

    getState() {
        return this._myState;
    }

    _handleActions(action: Action): void {
        switch (action.type) {
            case CartActionTypes.ADD_TO_CART:
                    this._myState = {
                        ...this._myState,
                        cart: [...this._myState.cart, action.payload],
                    }
                
                this._emitChange();
                console.log(this._myState)
                break;

            case CartActionTypes.REMOVE_FROM_CART:
                if (typeof action.payload === 'object') {
                    this._myState = {
                        ...this._myState,
                        cart: this._myState.cart.filter(item => item.id !== action.payload),
                    }
                }
                this._emitChange();
                break;

            
            case loadStorageActionType.LOAD_STORAGE:
                if(typeof action.payload === 'object') {
                    this._myState = {
                        ...this._myState, 
                        //Estado anterior
                        ...action.payload 
                        //Local Storage
                    } //Se combina el estado anterior y el actual
                    //Esta es una mejor aproximación a actualizar la info.
                }
                break;
        }
        this.persist();
    }

    private _emitChange(): void {
        const state = this.getState(); // toma el estado actual
        for (const listener of this._listeners) {
            listener(state); // por cada listener 'envia' el estado
        }
    }

    // Permite a los componentes suscribirse al store
    subscribe(listener: Listener): void {
        this._listeners.push(listener);
        listener(this.getState()); // Emitir estado actual al suscribirse
    }

    // Permite quitar la suscripción
    unsubscribe(listener: Listener): void {
        this._listeners = this._listeners.filter(l => l !== listener);
    }

    persist() {
        localStorage.setItem('flux:persist', JSON.stringify(this._myState));
    }

}

export const store = new Store();