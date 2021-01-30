// generator 复习

function *gen(){
    let a = yield 1;
    console.log('a: ', a);
    let b = yield 2;
    console.log('b: ', b);
    let c = yield 3;
    console.log('c: ', c);
}


function co(gen){
    let it = gen();
    return new Promise((resolve)=>{
        function next(value){
            let result = it.next(value)
            if(result.done) resolve(value)
            if(!result.done){
                 next(result.value)
            }
         }
         next()
    })
}

co(gen).then((data)=>{
    console.log('data: ', data);
})