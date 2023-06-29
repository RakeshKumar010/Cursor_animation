const cursor = document.getElementById("cursor")
document.addEventListener("mouseover",(e)=>{
    let x= e.pageX;
    let y = e.pageY;
    cursor.style.top=y + "px";
    cursor.style.left=x+"px";
})