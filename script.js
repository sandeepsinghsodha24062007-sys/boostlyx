let names = ["Rahul","Aman","Suresh","Vikas","Rohit","Ankit"];
let services = ["10k followers","50k views","5k likes","20k followers"];

setInterval(()=>{
let name = names[Math.floor(Math.random()*names.length)];
let service = services[Math.floor(Math.random()*services.length)];

let popup = document.getElementById("popup");
popup.innerHTML = name+" just bought "+service;
popup.style.display="block";

setTimeout(()=>{
popup.style.display="none";
},3000);

},7000);
