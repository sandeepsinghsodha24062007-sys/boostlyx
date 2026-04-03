function show(id){
document.querySelectorAll(".section").forEach(s=>s.style.display="none");
document.getElementById(id).style.display="block";
}

let names=["Rahul","Aman","Sandeep","Rohit","Vikas"];
let services=["5k followers","10k views","1k subs","50k likes"];

setInterval(()=>{
let n = names[Math.floor(Math.random()*names.length)];
let s = services[Math.floor(Math.random()*services.length)];

let pop = document.getElementById("popup");
pop.innerText = n+" bought "+s;
pop.style.display="block";

setTimeout(()=>pop.style.display="none",3000);

},6000);
