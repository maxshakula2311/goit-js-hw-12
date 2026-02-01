import{a as f,S as B,i}from"./assets/vendor-xpOxgMII.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const g of a.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&n(g)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();f.defaults.baseURL="https://pixabay.com/api/";const v="54430454-4fc9121801bd2b14b5a193f8d";async function m(o,r=1,t=15){return await f.get("",{params:{key:v,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:t}})}const y=document.querySelector(".gallery"),L=document.querySelector(".loader-box"),c=document.querySelector(".load-btn"),C=new B(".gallery a",{captionsData:"alt",captionDelay:250}),S=o=>{const r=o.map(t=>`<li class="gallery-item">
            <a href=${t.largeImageURL} class="gallery-link">
              <img
                class="gallery-img"
                src=${t.webformatURL}
                alt="${t.tags}"
                loading="lazy"
              />
            </a>  
            <div class="img-desc-box">
              <p class="img-desc">
                <span class="desc-title">Likes</span>
                <span class="desc-text">${t.likes}</span>
              </p>
              <p class="img-desc">
                <span class="desc-title">Views</span>
                <span class="desc-text">${t.views}</span>
              </p>
              <p class="img-desc">
                <span class="desc-title">Comments</span>
                <span class="desc-text">${t.comments}</span>
              </p>
              <p class="img-desc">
                <span class="desc-title">Downloads</span>
                <span class="desc-text">${t.downloads}</span>
              </p>
            </div>
          </li>`).join("");y.insertAdjacentHTML("beforeend",r),C.refresh()},x=()=>{y.innerHTML=""},k=()=>{L.classList.add("is-visible")},q=()=>{L.classList.remove("is-visible")},e={createGallery:S,clearGallery:x,showLoader:k,hideLoader:q,showLoadBtn:P,hideLoadBtn:R};function P(){c&&c.classList.add("is-visible")}function R(){c&&c.classList.remove("is-visible")}const b=document.querySelector(".form"),h=document.querySelector(".load-btn");let l=1;const d=15;let u="",p=0;b.addEventListener("submit",H);h&&h.addEventListener("click",O);function w(){const o=document.querySelector(".gallery-item");if(!o)return;const r=o.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}async function H(o){o.preventDefault();const r=o.target["search-text"].value.trim();if(r===""){i.error({position:"topRight",message:"Please enter your request in the search field!",messageColor:"black",backgroundColor:"yellow"});return}u=r,l=1,e.clearGallery(),e.hideLoadBtn&&e.hideLoadBtn(),e.showLoader();try{const t=await m(u,l,d),n=t.data.hits,s=t.data.totalHits||0;if(p=Math.ceil(s/d)||0,n.length===0){i.error({message:"Sorry, there are no images matching<br>your search query. Please try again!",messageColor:"#ffffff",backgroundColor:"#EF4040",position:"topRight"}),e.hideLoadBtn&&e.hideLoadBtn();return}e.createGallery(n),l>=p?(e.hideLoadBtn&&e.hideLoadBtn(),i.warning({message:"",position:"topRight"})):(e.showLoadBtn&&e.showLoadBtn(),w())}catch{i.error({position:"topRight",message:"Something went wrong...",messageColor:"black",backgroundColor:"yellow",closeOnClick:!0})}finally{e.hideLoader(),b.reset()}}async function O(){if(u){l+=1,e.showLoader();try{const o=await m(u,l,d),r=o.data.hits,t=o.data.totalHits||0;p=Math.ceil(t/d)||0,e.createGallery(r),l>=p?(e.hideLoadBtn&&e.hideLoadBtn(),i.warning({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):e.showLoadBtn&&e.showLoadBtn(),w()}catch{i.error({position:"topRight",message:"Something went wrong...",messageColor:"black",backgroundColor:"yellow",closeOnClick:!0})}finally{e.hideLoader()}}}
//# sourceMappingURL=index.js.map
