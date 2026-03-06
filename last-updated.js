fetch('/last-updated.txt')
.then(r=>r.text())
.then(t=>{
const el=document.getElementById("last-updated");
if(el){el.innerText="Last Updated: "+t;}
});
