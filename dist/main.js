(()=>{"use strict";(()=>{const e=document.querySelectorAll("[data-tabs-handler]"),t=document.querySelectorAll("[data-tabs-field]");document.querySelectorAll(".design__title");for(let s of e)s.addEventListener("click",(()=>{e.forEach((e=>{e.classList.remove("design-list__item_active"),s.classList.add("design-list__item_active"),t.forEach((e=>{e.dataset.tabsField===s.dataset.tabsHandler?e.classList.remove("hidden"):e.classList.add("hidden")}))}))}))})(),(()=>{const e=document.querySelectorAll(".feature-sub"),t=document.querySelectorAll(".feature__link");t.forEach(((s,c)=>{s.addEventListener("click",(()=>{t.forEach(((t,c)=>{t===s?(t.classList.toggle("feature__link_active"),e[c].classList.toggle("hidden")):(t.classList.remove("feature__link_active"),e[c].classList.add("hidden"))}))}))}))})(),(()=>{const e=document.querySelector(".humburger-menu"),t=document.querySelector(".menu");console.log(e),e.addEventListener("click",(()=>{t.classList.toggle("menu-active"),e.classList.toggle("humburger-menu-active")}))})(),(()=>{const e=document.querySelectorAll(".more"),t=document.querySelector(".modal");e.forEach((e=>{e.addEventListener("click",(()=>{t.classList.remove("hidden")}))})),t.addEventListener("click",(e=>{const s=e.target;(s.classList.contains("overlay")||s.classList.contains("modal__close"))&&t.classList.add("hidden")}))})(),(e=>{const t=document.querySelector(e);t.addEventListener("submit",(e=>{e.preventDefault();let s={};for(let{name:e,value:c}of t.elements)e&&(s[e]=c);fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(s)}).then((e=>{if(200===e.status||201===e.status)return e.json();throw new Error(e.status)})).then((e=>{alert("success"),t.reset()})).catch((e=>{alert("wrong")}))}))})(".form-test-drive"),(()=>{const e=document.querySelectorAll(".menu-list__link"),t=document.querySelector(".main__scroll"),s=document.querySelector(".menu"),c=document.querySelector(".humburger-menu");[...e,t].forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const t=e.target.getAttribute("href").substr(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"}),s.classList.remove("menu-active"),c.classList.remove("humburger-menu-active")}))}))})()})();