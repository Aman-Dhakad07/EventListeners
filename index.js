



// document.addEventListener('click',function(){
//     console.log('I have clicke on the document');
// });


// document.addEventListener('click',eventFunction);\



// const content= document.querySelector('#wrapper');

// content.addEventListener('click',function(event){
//     console.log(event);
// });


// let links= document.querySelectorAll('a');

// let thirdlink = links[2];

// thirdlink.addEventListener('click',function(event){
//     event.preventDefault();
//     console.log('maza aaya ,accha laga');
// });


let myDiv = document.createElement('div');

for(let i=1;i<=100;i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'This is para'+i;

    newElement.addEventListener('click',function(event){
        console.log('I have clicked on para');
    });
    myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);