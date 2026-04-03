function showTab(id){
document.querySelectorAll('.tab').forEach(e=>e.classList.remove('active'))
document.getElementById(id).classList.add('active')
}

let selected=""

function openOrder(name){
selected=name
document.getElementById("orderBox").style.display="block"
document.getElementById("serviceName").innerText=name
}

function goPay(){
let link=document.getElementById("userLink").value
if(link.length<5){alert("Enter valid link");return}

document.getElementById("orderBox").style.display="none"
document.getElementById("payBox").style.display="block"
document.getElementById("finalService").innerText=selected

document.getElementById("upiBtn").href="upi://pay?pa=sbehhejebns@ibl&pn=SANDEEP%20SINGH"
}

function processing(){
document.getElementById("payBox").style.display="none"
document.getElementById("processBox").style.display="block"

setTimeout(()=>{
document.getElementById("processBox").style.display="none"
document.getElementById("doneBox").style.display="block"
},4000)
}

/* POPUP */
let names=["Rahul","Amit","Arjun","Vikas","Karan","Sandeep"]
let items=["10K Followers","5K Likes","1K Subs","50K Views"]

setInterval(()=>{
let p=document.getElementById("popup")
p.innerText=names[Math.floor(Math.random()*names.length)]+" bought "+items[Math.floor(Math.random()*items.length)]
p.style.display="block"

setTimeout(()=>{p.style.display="none"},3000)
},6000)
