(()=>{"use strict";const e=e=>{const t=document.querySelector(".cart-wrapper");t.innerHTML="",0===e.length?t.insertAdjacentHTML("beforeend",'\n        <div id="cart-empty">\n\t\t\t\t\tВаша корзина пока пуста\n\t\t\t\t</div>\n      '):e.forEach((e=>{t.insertAdjacentHTML("beforeend",`\n          <div class="card" data-key="${e.id}">\n            ${e.sale?'<div class="card-sale">🔥Hot Sale🔥</div>':""}\n            <div class="card-img-wrapper">\n              <span class="card-img-top"\n                style="background-image: url('${e.img}')"></span>\n            </div>\n            <div class="card-body justify-content-between">\n              <div class="card-price">${e.price}</div>\n              <h5 class="card-title">${e.title}</h5>\n              <button class="btn btn-primary">удалить</button>\n            </div>\n          </div>\n      `)}))},t=(e,t,n,a)=>(t||(t=0),n||(n=1/0),e.filter((e=>e.price>=t&&e.price<=n&&(!a||!0===e.sale)))),n=e=>fetch("https://ozone-1d87a-default-rtdb.firebaseio.com/goods.json?"+(e?`search=${e}`:"")).then((e=>e.json())),a=e=>{const t=document.querySelector(".goods");localStorage.setItem("goods",JSON.stringify(e)),t.innerHTML="",e.forEach((e=>{t.insertAdjacentHTML("beforeend",`\n        <div class="col-12 col-md-6 col-lg-4 col-xl-3">\n          <div class="card" data-key="${e.id}">\n            ${e.sale?'<div class="card-sale">🔥Hot Sale🔥</div>':""}\n            <div class="card-img-wrapper">\n              <span class="card-img-top"\n                style="background-image: url('${e.img}')"></span>\n            </div>\n            <div class="card-body justify-content-between">\n              <div class="card-price">${e.price}</div>\n              <h5 class="card-title">${e.title}</h5>\n              <button class="btn btn-primary">В корзину</button>\n            </div>\n          </div>\n        </div>\n      `)}))};(()=>{const t=document.getElementById("cart"),n=document.querySelector(".cart"),a=n.querySelector(".cart-close"),c=n.querySelector(".cart-total > span"),r=document.querySelector(".goods"),s=document.querySelector(".counter");t.addEventListener("click",(()=>{const t=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[];n.style.display="flex",e(t),c.textContent=t.reduce(((e,t)=>e+t.price),0)})),a.addEventListener("click",(()=>{n.style.display=""})),r.addEventListener("click",(e=>{if(e.target.classList.contains("btn-primary")){const t=e.target.closest(".card").dataset.key,n=JSON.parse(localStorage.getItem("goods")),a=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[],c=n.find((e=>e.id===t));a.push(c),localStorage.setItem("cart",JSON.stringify(a)),s.textContent=a.length}})),n.addEventListener("click",(t=>{if(t.target.classList.contains("btn-primary")){const n=t.target.closest(".card").dataset.key,a=JSON.parse(localStorage.getItem("cart")),c=a.findIndex((e=>e.id===n));a.splice(c,1),localStorage.setItem("cart",JSON.stringify(a)),e(a),s.textContent=a.length}}))})(),n().then((e=>{a(e)})),(()=>{const e=document.querySelector(".search-wrapper_input"),t=((e,t=300)=>{let n;return(...a)=>{clearTimeout(n),n=setTimeout((()=>e.apply(void 0,a)),t)}})((e=>{n().then((t=>{var n,c;a((n=t,c=e.target.value,n.filter((e=>e.title.toLowerCase().includes(c.toLowerCase())))))}))}));e.addEventListener("input",t)})(),(()=>{const e=document.querySelector(".catalog-button > button"),t=document.querySelector(".catalog"),c=document.querySelectorAll(".catalog li");let r=!1;e.addEventListener("click",(()=>{r=!r,t.style.display=r?"block":""})),c.forEach((e=>{e.addEventListener("click",(()=>{const t=e.textContent;n().then((e=>{var n;a((n=t,e.filter((e=>e.category===n))))}))}))}))})(),(()=>{const e=document.getElementById("min"),c=document.getElementById("max"),r=document.getElementById("discount-checkbox"),s=document.querySelector(".filter-check_checkmark");let o,l,d=!1;e.addEventListener("input",(e=>{o=e.target.value,l=c.value,n().then((e=>{a(t(e,o,l,d))}))})),c.addEventListener("input",(c=>{l=c.target.value,o=e.value,n().then((e=>{a(t(e,o,l,d))}))})),r.addEventListener("change",(()=>{s.classList.toggle("checked"),d=!d,n().then((e=>{a(t(e,o,l,d))}))}))})()})();