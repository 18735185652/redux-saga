import * as types from '../action-types'
import {take,put} from '../../redux-saga/effects'

function *rootSage(){
//    for(let i=0;i<3;i++){
       // 我要等待有人向仓库派发一个ASYNC_ADD这样的命令，等到了就执行，等不到就卡在这里
       // take只等一次
       yield take(types.ASYNC_ADD);
       // 向仓库派发一个动作 让仓库调用store.dispatch({type:types.ADD})
    //    yield put({type:types.ADD});
//    }
}

export default rootSage;

/**
 * take: 只监听一次动作，他们都是普通函数，执行后返回一个普通的指令对象，这个对象相当于一个普通对象的指令，指挥saga中间件做一些事情
 */