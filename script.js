//   FOR EACH :
/* arr.forEach((val,index,array)=>{
    //perform a function
    "PRINT" the function
});

 MAP : 
let newArray = arr.map((val,index,arr)=>{
    //perform a function 
    return a value
});

 FILTER :
let newArray = arr.filter((al.index,arr)=>(
    //perform a function 
    //return the modified func
    ));

REDUCE : 
const finall = arr.reduce((previous,next)=>{
    return next>previous ? next :previous;           // if else statement using "?"
});
//


//-----------------------------------------------------------------------------XXXXXXXXXXXXX------------------------------------------------------------------------------/



alert(vowel(a)); */ 

/* let arr = [1,2,3,4,5,6,7,8,9];

arr.forEach((val)=>{
console.log(val*val);
});
*/


/* let c = 5;
const f = (c)=>{
let m = (c*9/5)+32;
console.log(m);
};
*/

/* let arr = [66,68,96,74,52,81,94,88];

const grade = arr.reduce((res,current)=>{                                                          
return res>current ? res : current;
});

const topper = arr.filter((val)=>{
return val>80;
})

console.log(`the highest grade is ${grade} while the marks above 80s are ${topper}`);

*/

//*--------------------------GET ELEMENT BY ID -----------GET ELEMENT BY CLASS NAME---------------------GET ELEMENTS BY TAG NAME------------------------*

/* let y = document.getElementById("btn1");
console.dir(y);
let x = document.getElementsByClassName("headings");
console.dir(x);
console.log(x);

let z = document.getElementsByTagName("p");
console.dir(z); */

//  BETTER WAY TO DO IT IS -----------------
//-----------------------------------------------------------QUERY  SELECTOR-------------------------------------------------------------------------/

/* let g = document.querySelector("btn1");            // first elemnent of the mentioned tag
console.dir(g);

let f = document.querySelectorAll("h3");         // all the elements of the mentioned tag
console.dir(f);
*/

function count(){  

let x = parseInt(document.getElementById("flo").innerText);      // converting text into integer
let y = document.getElementById("btn1").textContent;             
if(y=='Follow'){
    document.getElementById("btn1").textContent = "UnFollow";
    document.getElementById("flo").innerText=x+1;                //incrementing the value if they follow
}
else{
    document.getElementById("btn1").innerText = "Follow";
    document.getElementById("flo").innerText=x-1;                 // decrementing the value if they unfollow
}    
}
function message(){

let str = prompt("Enter the message you want to send: ");
alert(str);

}
