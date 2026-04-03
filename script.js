function show(id){
document.querySelectorAll('.box').forEach(e=>e.classList.add('hide'));
document.getElementById(id).classList.remove('hide');
}

// LIVE POPUP
setInterval(()=>{
let names=["Rohit","Aman","Vikas","Rahul"];
let popup=document.getElementById("popup");
popup.style.display="block";
popup.innerText=names[Math.floor(Math.random()*names.length)]+" just bought service";
setTimeout(()=>popup.style.display="none",2000);
},3000);
