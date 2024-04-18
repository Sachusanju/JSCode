
document.getElementById('btn1').onclick = demo1
function demo1()
{
    document.getElementById('btn1').innerHTML = 'CLICKED'
}

document.getElementById('btn2').onclick = demo2
function demo2() 
{
    document.getElementByName('dateDisplay').innerHTML = Date()    
}
document.getElementById('para1').innerHTML = 'Hai! Good evening'
document.getElementsByClassName('para2').innerHTML = 'This session is going'

