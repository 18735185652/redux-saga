

function runSaga(a,b){
    console.log('a,b: ', a,b); // 1 2
}

let boundRunSaga=runSaga.bind(null,1) // 1会传给a

boundRunSaga(2) // 2传给b