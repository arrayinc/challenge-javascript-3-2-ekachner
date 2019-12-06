// *** YOUR ANSWER BELOW ***

"use strict";


let number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
let object = ["on my drum", "on my shoe", "on my knee", "upon my door", "stealing my jive", "out in the sticks", "up in heaven", "on my plate", "along my spine", "once again"];

function thisOldMan(n, o){
    for(let i = 0; i <= 9; i++){
        console.log(`this old man he played ${n[i]}, he played knick-knack ${o[i]}...
    with a knick-knack, paddy-whack, give the dog a bone.
        This old man came rolling home...`);
    }
}
thisOldMan(number, object);

