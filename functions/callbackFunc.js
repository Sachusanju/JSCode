//call function

function add(a,b)
{
    console.log(`The sum is ${a+b}`);
}

function sub(a,b)
{
    console.log(`The difference is ${a-b}`);
}

//higher order function
function perform(data1, data2, callback1, callback2) {
    console.log('This operation need to perform before callback1');
    callback1(data1, data2) //invokes add(a,b)
    setTimeout(() => {
        callback2(data1,data2)  //invokes sub(a,b)
    },2000)
}

perform(10,8,add,sub)