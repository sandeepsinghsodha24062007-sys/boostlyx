let selectedService = ""

function openService(name){
selectedService = name
document.getElementById("orderBox").style.display="block"
document.getElementById("serviceName").innerText=name
}

function goPayment(){
let id = document.getElementById("userID").value

if(id.length < 5){
alert("Enter valid ID")
return
}

document.getElementById("orderBox").style.display="none"
document.getElementById("paymentBox").style.display="block"
document.getElementById("finalService").innerText=selectedService

document.getElementById("upiBtn").href="upi://pay?pa=sbehhejebns@ibl&pn=SANDEEP%20SINGH"
}

function startProcess(){
document.getElementById("paymentBox").style.display="none"
document.getElementById("processBox").style.display="block"

setTimeout(()=>{
document.getElementById("processBox").style.display="none"
document.getElementById("doneBox").style.display="block"
},4000)
}

/* LIVE POPUP */

let names = ["Rahul","Amit","Rohit","Arjun","Vikas","Sandeep","Karan"]

let services = ["10K Followers","5K Likes","1K Subs","50K Views"]

setInterval(()=>{
let name = names[Math.floor(Math.random()*names.length)]
let service = services[Math.floor(Math.random()*services.length)]

let popup = document.getElementById("livePopup")
popup.innerText = name + " bought " + service

popup.style.display="block"

setTimeout(()=>{
popup.style.display="none"
},3000)

},7000)
