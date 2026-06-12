function sendAlert(){

document.getElementById("status").innerHTML="CRITICAL";

let item=document.createElement("li");

item.innerHTML=
new Date().toLocaleTimeString()
+" - Emergency Alert Sent";

document.getElementById("history").prepend(item);

alert("Emergency Alert Sent");
}
