const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");let o=null;function r(){n.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(function(){o=setInterval(r,1e3),t.disabled=!0})),e.addEventListener("click",(function(){clearInterval(o),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.a6a2cd99.js.map
