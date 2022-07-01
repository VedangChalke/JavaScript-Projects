const btn = document.getElementById("btn");

btn.addEventListener('click',()=>{
    createNotification();
});

function createNotification() {
    const notif = document.createElement
    ('div');
 notif.classList.add("toast");

 notif.innerHTML = "hi there";

 container.appendChild(notif);

 setTimeout(()=>{
     notif.remove();
 },3000);


}