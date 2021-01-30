import {createStore,applyMiddleware} from 'redux'
import rootReducer from './reducers'
import createSagaMiddleware from '../redux-saga'
import rootSaga from './sagas'
// 引用sage中间件
let sageMiddleware =  createSagaMiddleware();

// 应用saga中间件
// 一旦使用了这个中间件后，以后store.dispatch都会指向sagaMiddleware提供dispatch的方法
let store = applyMiddleware(sageMiddleware)(createStore)(rootReducer)

// 启动一个sage执行,run必须要在applyMiddleware执行后挂载
sageMiddleware.run(rootSaga)

 
export default store;

/**
 * 理解run 需要复习co
 */