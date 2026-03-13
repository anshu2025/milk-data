let currentCustomer="गणेश"

let data=JSON.parse(localStorage.getItem("milkData")) || []

const table=document.getElementById("tableData")

function switchCustomer(name){

currentCustomer=name

document.querySelectorAll(".tabs button").forEach(btn=>{
btn.classList.remove("active")
if(btn.innerText===name){
btn.classList.add("active")
}
})

showData()

}

function showData(){

table.innerHTML=""

let total=0

data.forEach((item,index)=>{

if(item.customer===currentCustomer){

total+=Number(item.qty)

table.innerHTML+=`
<tr>
<td>${item.date}</td>
<td>${item.time}</td>
<td>${item.qty}</td>
<td><button class="deleteBtn" onclick="deleteRow(${index})">X</button></td>
</tr>
`

}

})

document.getElementById("totalMilk").innerText=total

document.getElementById("totalMoney").innerText=total*50

}

function deleteRow(i){

data.splice(i,1)

localStorage.setItem("milkData",JSON.stringify(data))

showData()

}

document.getElementById("milkForm").addEventListener("submit",function(e){

e.preventDefault()

let date=document.getElementById("date").value

if(date===""){
alert("तारीख चुनें")
return
}

let record={

customer:currentCustomer,
date:date,
time:document.getElementById("time").value,
qty:document.getElementById("quantity").value

}

data.push(record)

localStorage.setItem("milkData",JSON.stringify(data))

showData()

})

showData()


/* INSTALL BUTTON */

let deferredPrompt

const installBtn=document.getElementById("installBtn")

window.addEventListener("beforeinstallprompt",(e)=>{

e.preventDefault()

deferredPrompt=e

installBtn.style.display="block"

})

installBtn.addEventListener("click",()=>{

deferredPrompt.prompt()

})