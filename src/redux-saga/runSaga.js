import * as effectTypes from './effectTypes'


/**
 * 执行或者启动saga的方法
 * 我们可能会获取仓库的状态getState 有可能向仓库派发动作 dispatch
 * 还有可能监听动作 
 * @param {} saga 
 */
function runSaga(env, saga) {
    const { dispatch, getState,channel } = env;
    let it = saga(); // 执行生成器 返回迭代器
    function next(value) {
        let {value:effect,done} = it.next() // value={type:effectTypes.TAKE,actionType}
        if(!done){
            switch(effect.type){
                case effectTypes.TAKE : // 我想等待有人向仓库派发ASYNC_ADD类型的动作
                    // 如果有人向仓库派发动作 就会执行channel.put(action)
                    // 它会等待动作发生，如果等不到 就卡在这里了
                    channel.take(effect.actionType,next)
                    break; 
                case effectTypes.PUT : // PUT这个effect不会阻塞当前的saga执行，派发完成之后会立刻向下执行
                    dispatch(effect.action)
                    next()
                    break;
                default :
                    break;
            }
        }
    }
    next()

}

export default runSaga