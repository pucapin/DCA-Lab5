import { AppDispatcher } from './Dispatcher';
import { State } from './Store';

export const CounterActionTypes = {
    INCREMENT_COUNT: 'INCREMENT_COUNT',
    DECREMENT_COUNT: 'DECREMENT_COUNT'
};

export const UserActionTypes = {
    SAVE_USER: 'SAVE_USER', //Variables para no quemar un string
};

export const loadStorageActionType = {
    LOAD_STORAGE: 'LOAD_STORAGE'
}; // Que al cargar la información sea por medio
// De acciones, para estandarizarlo

export const CounterActions = {
    increment: (value: number) => {
        AppDispatcher.dispatch({
            type: CounterActionTypes.INCREMENT_COUNT,
            payload: value,
        });
    },
    decrement: (value: number) => {
        AppDispatcher.dispatch({
            type: CounterActionTypes.DECREMENT_COUNT,
            payload: value,
        });
    },
};

export const UserActions = {
    saveUser: (user: { name: string; age: number }) => {
        AppDispatcher.dispatch({
            type: UserActionTypes.SAVE_USER,
            payload: user,
        });
    },
};

export const LoadActions = {
    load: (state:State) => {
        AppDispatcher.dispatch({
            type: loadStorageActionType.LOAD_STORAGE,
            payload: state
        })
    }
}; // Se toma el estado para guardarlo
