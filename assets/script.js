const MyButton = document.querySelector(`.btn`)

MyButton.addEventListener(`click`, generate)


function generate(e){
    const div = document.createElement('div')

div.style.width = "30px";
div.style.height = "30px";
div.style.background = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
div.style.position = "absolute";
div.style.left = Math.random() * 1450+"px";
div.style.top = Math.random() * 620+"px";


document.getElementById('main').appendChild(div)


}
