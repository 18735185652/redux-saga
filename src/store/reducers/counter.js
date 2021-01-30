import * as types from '../action-types'

const initState = {number:0};

function counter(state=initState,action){
    // 在reducer里只处理ADD，并不处理 ASYNC_ADD
    switch(action.type){
        case types.ADD :
            return {number: state.number+1}
        default :
        return state;
    }

}

export default counter