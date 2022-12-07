const readIt=document.querySelector(".readIt");
const massage=document.querySelectorAll(".massage");
const circles=document.querySelectorAll(".circle");
const pointers=document.querySelectorAll(".pointer");



readIt.addEventListener("click",()=>{
    for (let i = 0; i < massage.length; i++) {
        massage[i].style.backgroundColor="#ffff";
    }
    for (let i = 0; i < circles.length; i++) {
        circles[i].style.display="none"
        circles[i].id=i;        
    }
})