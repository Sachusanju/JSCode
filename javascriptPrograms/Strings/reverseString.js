//dynamic input
import Prompt from "prompt-sync";
const prom = Prompt()

let str = prom('Enter the value : ')
//console.log(str);

//let str = 'Test Yantra Software Solutions'

function revstr(arrtext) 
{
    let revtext = ''
    for (const i in arrtext) {
      revtext=arrtext[i] + revtext
    }
    console.log(revtext);
}

revstr(str)