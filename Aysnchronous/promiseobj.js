async function execute() 
{
   console.log('login to application'); 
   let p1 = new Promise((resolve,reject) => {

    //write asynchronous code

    setTimeout(() => {
        resolve('Navigating to home Page')
        reject('Error')
    }, 2000);

   })
   await p1.then((msg) => {console.log(msg);}).catch((msg) => {console.log(msg);})

   let p2 = new Promise((resolve,reject) => {

    //write asynchronous code

    setTimeout(() => {
        resolve('Fetch the url')
        reject('Error')
    }, 2000);

   })
   await p2.then((msg) => {console.log(msg);}).catch((msg) => {console.log(msg);})
   console.log("logout from application");
}

execute()

//with or without function we can use await() to handle asynchronous fuctions