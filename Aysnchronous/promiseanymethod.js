let p1 = Promise.reject('Login to application') 

let p2 = new Promise((resolve,reject) =>
{
    setTimeout(() => {
        
        resolve('Navigate to home page')
        reject('error')
    }, 5000);
})

let p3 = new Promise((resolve, reject) => 
{
    setTimeout(() => {
        resolve('Fetch the url')
        reject('Not able to fetch the url')
    }, 3000);
})

let p4 = Promise.reject('Logout from application')

Promise.any([p1,p2,p3,p4]).then((values) =>
{
    console.log(values);
})
.catch((error) =>
{
    console.log(error);
})