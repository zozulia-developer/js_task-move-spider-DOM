document.addEventListener("click",function(t){var e=document.querySelector(".wall"),i=document.querySelector(".spider"),n=i.offsetWidth,c=i.offsetHeight,l=e.getBoundingClientRect();if(!(t.clientX<l.left)&&!(t.clientX>l.right)&&!(t.clientY<l.top)&&!(t.clientY>l.bottom)){var o=t.clientX-l.left-n/2,a=t.clientY-l.top-c/2;o=Math.max(0,Math.min(o,l.width-n)),a=Math.max(0,Math.min(a,l.height-c)),i.style.position="absolute",i.style.left="".concat(o,"px"),i.style.top="".concat(a,"px")}});
//# sourceMappingURL=index.793c4e5d.js.map