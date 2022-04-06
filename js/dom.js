const increase=document.getElementById('increase');
const reset=document.getElementById('reset');
const decrease=document.getElementById('decrease');
increase.addEventListener('click',inc);
reset.addEventListener('click',res);
decrease.addEventListener('click',dec);

let counter=0;
displayCounter=document.getElementById('counter');

function inc(e){
    counter+=1;
    displayCounter.textContent=counter;
    if(counter>0)
    displayCounter.style.color='green';
    if(counter==0)
    displayCounter.style.color='rgb(0,0,0,0.8)';

}

function res(e){
    counter=0;
    displayCounter.textContent=counter;
    displayCounter.style.color='rgb(0,0,0,0.8)';
}

function dec(e){
    counter-=1;
    displayCounter.textContent=counter;
    if(counter<0)
    displayCounter.style.color='red';
    if(counter==0)
    displayCounter.style.color='rgb(0,0,0,0.8)';
}
