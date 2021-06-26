import { html } from 'htm/preact';
import { createContext } from 'preact';
import { useLocalStore } from 'mobx-react-lite';

export const StoreContext = createContext(undefined);

export const StoreProvider = ({ children }) => {
    const store = useLocalStore(() => ({
        counter: 0,
        setCounter: (number) => {
            store.counter = store.counter + number
        },
        getCounter: () => {
            return store.counter
        }
    }))

    return html`
        <${StoreContext.Provider} value=${store}>${children}</${StoreContext.Provider}>
    `
}