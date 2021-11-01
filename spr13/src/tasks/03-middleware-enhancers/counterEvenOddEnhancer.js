export default function counterEvenOddEnhancer(originalCreateStore) {
    return function newCreateStore(rootReducer, preloadedState, enhancer) {
        const store = originalCreateStore(rootReducer, preloadedState, enhancer);

        function newGetState() {
            return {
                ...store.getState(),
                counterEvenOdd: store.getState().counter % 2 ? 'odd' : 'even',
            };
        }

        return { ...store, getState: newGetState };
    }
}

// TODO This store enhancer should return a new store API object that overrides  the actual store's
// TODO `getState()` method.  The replacement `geState()` should add an extra field called `counterEvenOdd`
// TODO that has either the string "even" or "odd" based on the current value of `state.counter`.
// TODO Don't modify the real store or real state objects - return new objects instead.
