const contactBtn = document.querySelectorAll('.contactBtn');
const sumbmitBtn = document.getElementById('sumbmitBtn');
let innerForm = document.getElementById('subForm');
const navbar = document.getElementById('navbar');
const burger = document.getElementById('burger');
const cross = document.getElementById('cross');
const ball = document.getElementById('ball');
const label = document.querySelector('.label');
const formArea = document.querySelector('.form-area');
const formCross= document.getElementById('from-cross');
const name1 = document.getElementById('name');
const modalArea = document.querySelector('.modal-area');
const nameValue = document.getElementById('name-value');
const email = document.getElementById('email');
//event listerner for contact button
contactBtn.forEach((contact)=>{
    contact.addEventListener('click',formSub)
});




burger.addEventListener('click',menu);

cross.addEventListener('click',up);
// function for ontact button
innerForm.style.top='-300px';

function formSub(e){
    
   formArea.style.top="10%"; 
}

sumbmitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    name1.innerHTML=`<b>${nameValue.value}</b>`;
  modalArea.style.top="10%";
   nameValue.value="";
   email.value="";
 formArea.style.top="-390px";
 setTimeout(()=>{modalArea.style.top="-80px"},1600)
});



// function to come down 25vh
function menu(){
    const navList = document.getElementById('nav-list');
    navList.style.display='flex';
    navList.style.top='0';
}


// function for navlist to go up -25vh

function up(){
    const navList = document.getElementById('nav-list');
    navList.style.top="-25vh"
  
}

// click anywhre on navlist it will go up -27vh
const navList = document.getElementById('nav-list');
navList.addEventListener('click',()=>{
  navList.style.top="-27vh"
})

// typing anmitaion

 class TypeWriter{
     constructor(txtElement,words, wait=2000){
         this.txtElement=txtElement;
         this.words=words;
         this.txt =' ';
         this.wordIndex=0;
         this.wait=parseInt(wait,10);
         this.type();
         this.isDeleting = false;
     }
     type=()=>{
         // current index of word

         const current = this.wordIndex % this.words.length;
         // get full text of current word

         const fullTxt = this.words[current];
         
         // check is deleting

         if(this.isDeleting){
           // remove chracter
           this.txt = fullTxt.substring(0,this.txt.length-1);

         }else{
            //add chracter
            this.txt = fullTxt.substring(0,this.txt.length+1); 

         }

         // insert txt in dom
         this.txtElement.innerHTML =`<span class="txt"> I'M <br>${this.txt}</span>`

        //  type speed

        let typeSpeed =300;
        if(this.isDeleting){
            typeSpeed/=2;
        }

        //if word is complet
        if(!this.isDeleting && this.txt==fullTxt){
            typeSpeed=this.wait;
            this.isDeleting=true;
        }
        else if(this.isDeleting && this.txt===''){
            this.isDeleting=false
            this.wordIndex++;
            typeSpeed =350;
        }

         setTimeout(()=> this.type(),typeSpeed);
     }
 }

 document.addEventListener('DOMContentLoaded',init);
 function init(){
     const txtElement = document.getElementById('txt-type');
     const words = JSON.parse(txtElement.getAttribute('data-words'));
     const wait = txtElement.getAttribute('data-wait');
     new TypeWriter(txtElement,words,wait);
 }

 //change them
 
 const black=document.querySelector('.black-bg');
 const blackColor=document.querySelectorAll('.black');
 const body = document.querySelector('.body');

 
label.addEventListener('click',()=>{
    blackColor.forEach((balckbg)=>{
           balckbg.classList.toggle('hide');
     });
body.classList.toggle('body-color') ;
label.classList.toggle('color-white')

});

//from 
formCross.addEventListener('click',()=>{
  formArea.style.top="-390px";
});