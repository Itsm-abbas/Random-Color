let hexno = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
// #F21D43;
let hexcolor = document.getElementById('hexcolor');
let btn = document.getElementById('btn');
btn.addEventListener('click',()=>{
    let hex = "#"
    for (let i = 0; i < 6; i++) {
       hex += hexno[getrandom()]
    }
    hexcolor.innerText = hex;
    document.body.style.backgroundColor = hex;
});
function getrandom() {
    return Math.floor(Math.random() * hexno.length);
    
}