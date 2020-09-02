import debounce from 'lodash.debounce';

const saveStateTimeout = 1000;

function getLocalStorageKey(reducerKey, dataKey) {
  return `${reducerKey}.${dataKey}`;
}

export function localStorageDecorator(reducerKey, keysToPersist, reducer) {
  let lastSavedState;
  let saveState = debounce((newState) => {
    if (!lastSavedState) {
      return;
    }
    for (let key of keysToPersist) {
      if (lastSavedState[key] !== newState[key]) {
        localStorage.setItem(
          getLocalStorageKey(reducerKey, key),
          JSON.stringify(newState[key])
        );
      }
    }
    lastSavedState = newState;
  }, saveStateTimeout);

  window.addEventListener('beforeunload', () => {
    saveState.flush();
  });

  return (state, action) => {
    if (!state) {
      let initialState = {...reducer(state, action)};
      for (let key of keysToPersist) {
        let valueJson = localStorage.getItem(getLocalStorageKey(reducerKey, key));
        if (valueJson !== null) {
          try {
            initialState[key] = JSON.parse(valueJson);
          } catch (e) {
            console.error(e);
          }
        }
      }
      lastSavedState = initialState;
      return initialState;
    }
    let newState = reducer(state, action);
    saveState(newState);
    return newState;
  };
}
