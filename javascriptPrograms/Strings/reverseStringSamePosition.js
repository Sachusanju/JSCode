var str = 'Hello World! Good morning!'
const arr = str.split(' ')
console.log(arr);
const revarr = []
for (const data of arr) {
    console.log(data);
    console.log(data.length);
    var revstr=''
    for(i=0;i<data.length;i++)
    {
        console.log(i);
        revstr=data[i]+revstr
        console.log(revstr);
    }
    revarr.push(revstr)
}

console.log(revarr.join(' '));