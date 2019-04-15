import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "normalize.css/normalize.css";
import "./styles/main.scss"
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
//Redux
import { createStore,
applyMiddleware,
compose} from 'redux';
import {rootReducer} from "./redux/reducers/rootReducer";
//Saga
import createSagaMiddleware from "redux-saga"
import {watchSaga} from "./redux/sagas/rootSaga"

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const sagaMiddleware =createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(sagaMiddleware)
));

//run watchers
sagaMiddleware.run(watchSaga)

//Log state
store.subscribe(()=>{
  console.log(store.getState())
})

const Aplication = (
	<Provider store={store}>
		<App/>
	</Provider>
)



ReactDOM.render(Aplication, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
