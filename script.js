function pay(){

window.location.href="upi://pay?pa=sbehhejebns@ibl&pn=SANDEEP%20SINGH";

setTimeout(()=>{
document.getElementById("loading").style.display="block";

setTimeout(()=>{
document.getElementById("loading").style.display="none";
document.getElementById("done").style.display="block";
},4000);

},2000);

}
