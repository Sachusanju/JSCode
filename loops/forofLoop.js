var arr=[34,34.6,'hello','hi','A']
for (const index of arr) {
    console.log(index)
    if(index=='34.6')
    {
        console.log(index+' is present');
    }
    
}

var arr2 = ['a','b','c','cc']
for (const iterator of arr2) {
    process.stdout.write(iterator)
}