function show(id){
document.querySelectorAll('.box').forEach(e=>e.style.display='none');
document.getElementById(id).style.display='block';
}

let names=["Rahul","Aman","Sandeep","Rohit","Vikas"];
let items=["10k followers","50k views","5k likes"];

setInterval(()=>{
let n=names[Math.floor(Math.random()*names.length)];
let i=items[Math.floor(Math.random()*items.length)];
alert(n+" just bought "+i);
},8000);
