let str = 'wELCOME to coding beauty'
let arrstr = str.split(" ")
for (let i = 0; i < arrstr.length; i++) {
    arrstr[i]=arrstr[i].charAt(0).toUpperCase()+(arrstr[i].slice(1)).toLowerCase()
   
}
console.log(arrstr.join(" "));