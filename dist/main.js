(()=>{"use strict";(()=>{const e=document.getElementById("cart"),t=document.querySelector(".cart"),c=t.querySelector(".cart-close");e.addEventListener("click",(()=>{t.style.display="flex"})),c.addEventListener("click",(()=>{t.style.display=""}))})(),document.getElementById("cart").addEventListener("click",(()=>{fetch("https://ozone-1d87a-default-rtdb.firebaseio.com/goods.json").then((e=>e.json())).then((e=>{console.log(e)}))}))})();