function pay(){
window.location.href="upi://pay?pa=sbehhejebns@ibl&pn=SANDEEP%20SINGH";

setTimeout(()=>{
document.getElementById("loading").style.display="block";

let time=5;
let timer=setInterval(()=>{
time--;
document.getElementById("timer").innerText=time;

if(time==0){
clearInterval(timer);
document.getElementById("loading").style.display="none";
document.getElementById("success").style.display="block";
}
},1000);

},2000);
}
