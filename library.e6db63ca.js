!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var d=Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var r=n("eswKy"),d=n("3hX9w");let i=document.querySelector(".my-library-section"),c=JSON.parse(localStorage.getItem("my library"));c&&c.forEach(e=>{(0,r.renderPhotoCard)(e,i),i.addEventListener("click",d.onOpenModal)}),document.querySelector(".dropdown_button").addEventListener("click",function(){document.querySelector(".dropdown_list").classList.toggle("dropdown_list--visible"),this.classList.add("dropdown_button--active")}),document.addEventListener("DOMContentLoaded",function(){for(var e=document.querySelectorAll(".dropdown_item"),t=0;t<e.length;t++)e[t].addEventListener("click",function(){var e=this.closest(".dropdown");e.querySelector(".dropdown_button").textContent=this.textContent,e.querySelector(".dropdown_list").style.display="none"})}),document.addEventListener("click",function(e){e.target!==document.querySelector(".dropdown_button")&&document.querySelector(".dropdown_list").classList.remove("dropdown_list--visible")}),document.addEventListener("keydown",function(e){"Escape"===e.key&&document.querySelector(".dropdown_list").classList.remove("dropdown_list--visible")}),document.querySelectorAll(".dropdown_item").forEach(function(e){e.addEventListener("click",function(e){e.stopPropagation(),document.querySelector(".dropdown_button").innerText=this.innerText,document.querySelector(".dropdown_button").focus()})});let l=document.querySelectorAll(".box");document.querySelector(".dropdown").addEventListener("click",function(e){if("LI"!==e.target.tagName)return!1;let t=e.target.dataset.f;l.forEach(e=>{e.classList.remove("hide"),e.classList.contains(t)||"genre"===t||e.classList.add("hide")})}),n("j0U4W")}();
//# sourceMappingURL=library.e6db63ca.js.map
