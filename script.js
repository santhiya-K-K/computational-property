const red=document.querySelector(".red");
const orange=document.querySelector(".orange");
const blue=document.querySelector(".blue");
const black=document.querySelector(".black");

const center=document.querySelector(".center");

const getBG=(ele)=>{
    return window.getComputedStyle(ele).backgroundColor;
}

const colorChange=(ele,color)=>{
    return ele.addEventListener("mouseenter",()=>{
        center.style.background=color;
    })
}

colorChange(red,getBG(red))
colorChange(blue,getBG(blue))
colorChange(orange,getBG(orange))
colorChange(black,getBG(black))
