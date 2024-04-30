let arr = ['javascript', 'selenium', 'api', 'cypress']
let singleChar,i;
let final = arr.map(ele => {
   return ele.charAt(2)
})
console.log(final.join(","))