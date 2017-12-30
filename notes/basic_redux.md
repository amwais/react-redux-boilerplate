# Redux

## Basic Redux components

- Store:

	```javascript
	const store = createStore(reducer);
	```

- Store subscription:

	```javascript
	const unsubscribe = store.subscribe(() => {
	  console.log(store.getState());
	  // Any action
	});
	```

	#### To unsubscribe:

	```javascript
	unsubscribe();
	```

- Action dispatchers:

	```javascript
	store.dispatch(incrementCount({ incrementBy: 5 }));
	store.dispatch(incrementCount());
	store.dispatch(resetCount());
	store.dispatch(decrementCount());
	store.dispatch(decrementCount({decrementBy: 10}));
	store.dispatch(setCount({count: -100}));
	```

- Reducers:
	 1. Reducers are pure functions - dealing only with it's own scope
	 2. Never change state or action - Immutability

	```javascript
	const countReducer = (state = { count: 0 }, action) => {
		switch (action.type) {
			case 'INCREMENT':
			return {
				count: state.count + action.incrementBy
			};
			case 'DECREMENT':
			return {
				count: state.count - action.decrementBy
			};
			case 'SET':
			return {
				count: action.count
			};
			case 'RESET':
			return {
				count: 0
			};
			default:
				return state;
			}
		};
	```

- Action Generators:
	1. Functions that return action objects

	```javascript
	const incrementCount = ({ incrementBy = 1 } = {}) => ({
	  type: 'INCREMENT',
	  incrementBy
	});

	const decrementCount = ({ decrementBy = 1 } = {}) => ({
	  type: 'DECREMENT',
	  decrementBy
	});

	const setCount = ({ count } = {}) => ({
	  type: 'SET',
	  count
	});

	const resetCount = () => ({
	  type: 'RESET',
	});
	```