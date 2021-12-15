

const arr_color=["red","blue","green","yellow","orange"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
    
btn.addEventListener('click', () =>{
    let randomColor =getRandomColor();
    console.trace(randomColor);
    document.body.style.backgroundColor = arr_color[randomColor]
    color.textContent=arr_color[randomColor];

});
function getRandomColor(){
    return Math.floor(Math.random()*arr_color.length)
}