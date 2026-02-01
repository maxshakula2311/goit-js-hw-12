import{a as i,S as f,i as c}from"./assets/vendor-xpOxgMII.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();i.defaults.baseURL="https://pixabay.com/api/";const g="54430454-4fc9121801bd2b14b5a193f8d";function m(o){return i.get("",{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const d=document.querySelector(".gallery"),p=document.querySelector(".loader-box"),y=new f(".gallery a",{captionsData:"alt",captionDelay:250}),h=o=>{const r=o.map(s=>`<li class="gallery-item">
            <a href=${s.largeImageURL} class="gallery-link">
              <img
                class="gallery-img"
                src=${s.webformatURL}
                alt="${s.tags}"
                loading="lazy"
              />
            </a>  
            <div class="img-desc-box">
              <p class="img-desc">
                <span class="desc-title">Likes</span>
                <span class="desc-text">${s.likes}</span>
              </p>
              <p class="img-desc">
                <span class="desc-title">Views</span>
                <span class="desc-text">${s.views}</span>
              </p>
              <p class="img-desc">
                <span class="desc-title">Comments</span>
                <span class="desc-text">${s.comments}</span>
              </p>
              <p class="img-desc">
                <span class="desc-title">Downloads</span>
                <span class="desc-text">${s.downloads}</span>
              </p>
            </div>
          </li>`).join("");d.insertAdjacentHTML("beforeend",r),y.refresh()},b=()=>{d.innerHTML=""},L=()=>{p.classList.add("is-visible")},w=()=>{p.classList.remove("is-visible")},a={createGallery:h,clearGallery:b,showLoader:L,hideLoader:w},u=document.querySelector(".form");u.addEventListener("submit",x);function x(o){o.preventDefault();const r=o.target["search-text"].value.trim();if(r===""){c.error({position:"topRight",message:"Please enter your request in the search field!",messageColor:"black",backgroundColor:"yellow"});return}a.clearGallery(),a.showLoader(),m(r).then(s=>{const l=s.data.hits;if(l.length===0){c.error({message:"Sorry, there are no images matching<br>your search query. Please try again!",messageColor:"#ffffff",backgroundColor:"#EF4040",position:"topRight"}),a.hideLoader();return}a.createGallery(l),a.hideLoader()}).catch(s=>{c.error({position:"topRight",message:"Something went wrong...",messageColor:"black",backgroundColor:"yellow",closeOnClick:!0}),a.hideLoader()}),u.reset()}
//# sourceMappingURL=index.js.map
