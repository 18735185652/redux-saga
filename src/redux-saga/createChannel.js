

function createChannel(){
    let currentTakers = []; // 当前的监听者
    /**
     * // 开始监听某个动作
     * @param {*} actionType 动作类型 ASYNC——ADD
     * @param {*} taker 
     */
    function take(actionType,taker){
        taker.actionType = actionType;

        // 调用cancel 方法可以把自己从数组中干掉
        taker.cancel = () =>{ 
            currentTakers = currentTakers.filter(item=>item !== taker)
        }
        currentTakers.push(taker)
    }
    // 触发takers数组中的函数执行，但是要匹配动作类型
    function put(action){ //动作对象 {type:ASYNC_ADD}
        currentTakers.forEach(taker=>{
            if(taker.actionType === action.type){
                taker.cancel() // 只监听一次 
                taker(action);
            }
        })
    }
    return {take,put}
}


export default createChannel;