var age = 19
var training = 'no'
if(age>=18)
{
    if(training=='yes')
    {
        console.log('Eligible to get DL');
    }
    else{
        console.log('Complete the training');
    }
}
else
{
    console.log('Minimum age is 18, not eligible for driving school');
}