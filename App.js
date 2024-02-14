let carousalImg=document.querySelector("#carousalIMG");
let cr1=document.querySelector(".cr1");
let cr2=document.querySelector(".cr2");
let cr3=document.querySelector(".cr3");
let cr4=document.querySelector(".cr4");

let circle=[cr1,cr2,cr3,cr4];
let carousalImgStorage=["./img/testimonials-bg.jpg","./img/02-large.jpg","./img/03-large.jpg","./img/04-large.jpg"];
index=1;

setInterval(()=>{
    carousalImg.src=carousalImgStorage[index];
    circle[index].style.background="white";
    circle[(index-1+circle.length)%circle.length].style.background="none";
    index=(index+1)%circle.length;
},5000)


let AllBtn=document.querySelector("#allBtn");
let lawnBtn=document.querySelector("#lawnBtn");
let gardenBtn=document.querySelector("#gardenBtn");
let plantingBtn=document.querySelector("#plantingBtn");


let lawnCare=document.querySelector("#lawnCare");
let gardenCare=document.querySelector("#gardenCare");
let plantingCare=document.querySelector("#plantingCare");

console.log(AllBtn,lawnBtn,gardenBtn,plantingBtn);
console.log(lawnCare,gardenCare,plantingCare)

lawnBtn.addEventListener("click",()=>{
    lawnBtn.style.background="#69ad31";
    gardenBtn.style.background="none";
    plantingBtn.style.background="none";
    AllBtn.style.background="none";
    
    lawnCare.style.display="block";
    gardenCare.style.display="none";
    plantingCare.style.display="none";
})

gardenBtn.addEventListener("click",()=>{
    lawnBtn.style.background="none";
    gardenBtn.style.background="#69ad31";
    plantingBtn.style.background="none";
    AllBtn.style.background="none";

    gardenCare.style.display="block";
    lawnCare.style.display="none";
    plantingCare.style.display="none";
})

plantingBtn.addEventListener("click",()=>{

    lawnBtn.style.background="none";
    gardenBtn.style.background="none";
    plantingBtn.style.background="#69ad31";
    AllBtn.style.background="none";

    plantingCare.style.display="block";
    lawnCare.style.display="none";
    gardenCare.style.display="none";
   
})

AllBtn.addEventListener("click",()=>{
    lawnBtn.style.background="none";
    gardenBtn.style.background="none";
    plantingBtn.style.background="none";
    AllBtn.style.background="#69ad31";

    plantingCare.style.display="block";
    lawnCare.style.display="block";
    gardenCare.style.display="block";

})