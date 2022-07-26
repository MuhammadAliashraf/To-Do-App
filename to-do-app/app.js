var input = document.getElementById('input');
var textstore = document.getElementById('textstore')
var remove =document.getElementById('Remove')
function add1(){
    var para = document.createElement('p')
    para.innerText=input.value;
    textstore.appendChild(para)
    input.value="";
    remove.addEventListener('click' , function (){
        textstore.removeChild(para);

    })
    para.addEventListener('click' , function (){
        textstore.removeChild(para);

    })
}
