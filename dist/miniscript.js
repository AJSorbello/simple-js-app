let pokemonRepository=function(){let e=[];function t(t){"object"==typeof t&&e.push(t)}function n(e){let t=document.querySelector(".list-group"),n=document.createElement("li");n.classList.add("list-group-item");let i=document.createElement("button");i.innerText=e.name,i.classList.add("button-class","btn"),i.setAttribute("data-toggle","modal"),i.setAttribute("data-target","#Modal"),n.appendChild(i),t.appendChild(n),n.addEventListener("click",(function(){console.log("button"),o(e)}))}function o(e){pokemonRepository.loadDetails(e).then((function(){i(e)}))}function i(e){let t=document.querySelector(".modal-body"),n=document.querySelector(".modal-title");n.innerHTML="",t.innerHTML="";let o=document.createElement("modal-header");o.innerText=e.name;let i=document.createElement("img");i.classList.add("modal-img"),i.setAttribute("src",e.imageUrl);let l=document.createElement("p");l.innerText="height: "+e.height;let c=document.createElement("p");c.innerText="type: "+function(e){return 2===e.types.length?e.types[0].type.name+", "+e.types[1].type.name:e.types[0].type.name}(e),n.appendChild(o),t.appendChild(i),t.appendChild(l),t.appendChild(c)}function l(){document.querySelector("#modal-container").classList.remove("is-visible")}return function(e){const t=document.getElementById("searchBarContainer"),o=document.createElement("input");o.type="text",o.placeholder="Search Pokemon...";const i=document.createElement("button");i.textContent="Search",t.appendChild(o),t.appendChild(i),o.addEventListener("input",(function(){const t=o.value.toLowerCase();console.log("searchTerm",t,o.getValue);const i=e.filter((function(e){return e.name.toLowerCase().includes(t)}));console.log(i),function(){let e=document.querySelector(".list-group");e.innerHTML=""}(),i.forEach((function(e){n(e)}))}))}(e),window.addEventListener("keydown",(e=>{let t=document.querySelector("#modal-container");"Escape"===e.key&&t.classList.contains("is-visible")&&l()})),{getAll:function(){return e},add:t,addListItem:n,loadList:function(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then((function(e){return e.json()})).then((function(e){e.results.sort((function(e,t){return e.name.localeCompare(t.name)})),e.results.forEach((function(e){t({name:e.name,detailsUrl:e.url})}))})).catch((function(e){console.error(e)}))},loadDetails:function(e){let t=e.detailsUrl;return fetch(t).then((function(e){return e.json()})).then((function(t){e.imageUrl=t.sprites.front_default,e.height=t.height,e.types=t.types})).catch((function(e){console.error(e)}))},showDetails:o,showModal:i,hideModal:l}}();pokemonRepository.loadList().then((function(){pokemonRepository.getAll().forEach((function(e){pokemonRepository.addListItem(e)}))}));