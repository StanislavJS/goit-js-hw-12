import{a as w,S as q,i as c}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const g=15;async function S(t,r){const i="https://pixabay.com/api/",a={q:t,key:"50332373-9569dbbbff196a639bf3485f1",image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:g};try{return(await w.get(i,{params:a})).data}catch(e){throw new Error(`${e.message}`)}}let E=new q(".gallery a");const p=document.querySelector(".gallery"),f=document.querySelector(".loader"),l=document.querySelector(".load-more");function x(t){const r=t.map(({webformatURL:i,largeImageURL:a,tags:e,likes:s,views:o,comments:v,downloads:L})=>`
      <li class="gallery-item">
        <a href="${a}" class="gallery-link">
          <img src="${i}" alt="${e}" />
        </a>
        <div class="image-descr">
          <div class="image-descr-box">
            <p class="image-subtitle">likes</p>
            <span class="image-subtitle-quantity">${s}</span>
          </div>
          <div class="image-descr-box">
            <p class="image-subtitle">views</p>
            <span class="image-subtitle-quantity">${o}</span>
          </div>
          <div class="image-descr-box">
            <p class="image-subtitle">comments</p>
            <span class="image-subtitle-quantity">${v}</span>
          </div>
          <div class="image-descr-box">
            <p class="image-subtitle">downloads</p>
            <span class="image-subtitle-quantity">${L}</span>
          </div>
        </div>
      </li>
        `).join("");p.insertAdjacentHTML("beforeend",r),E.refresh()}function P(){p.innerHTML=""}function O(){f.classList.remove("hidden")}function $(){f.classList.add("hidden")}function M(){l.classList.remove("hidden")}function y(){l.classList.add("hidden")}const n=document.querySelector(".form"),B=n.querySelector('input[name="search-text"]');let d,h=0,m="",u=1;n.addEventListener("submit",A);l&&l.addEventListener("click",async()=>{u++,y(),await b(),T(0,h)});async function A(t){if(t.preventDefault(),m=B.value.trim().toLowerCase(),u=1,!m){c.warning({message:"The input field is empty, try again.",position:"center"}),n.reset();return}P(),await b()}async function b(){O();try{const t=await S(m,u);if(t.hits.length===0){c.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"center"}),n.reset();return}const r=t.hits;x(r),d=document.querySelector(".gallery-item"),d&&(h=d.getBoundingClientRect().height*2),M();const i=Math.ceil(t.totalHits/g);u>=i&&(y(),c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{c.warning({message:"An error occurred. Please try again later.",position:"center"})}finally{$(),n.reset()}}function T(t,r){window.scrollBy({top:r,left:t,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
