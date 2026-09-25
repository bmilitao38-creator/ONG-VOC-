(() => {
window.initCopiarPix=function(){
 const botao=document.getElementById("copiar-pix"),chave=document.getElementById("chave-pix"),status=document.getElementById("pix-status");
 if(!botao||!chave||!status||botao.dataset.inicializado==="true")return;botao.dataset.inicializado="true";
 botao.addEventListener("click",async()=>{const valor=chave.dataset.chave||chave.textContent.trim();try{await navigator.clipboard.writeText(valor);status.textContent="Chave copiada!";}catch(_){const a=document.createElement("textarea");a.value=valor;a.style.position="fixed";a.style.opacity="0";document.body.appendChild(a);a.select();try{document.execCommand("copy");status.textContent="Chave copiada!";}catch{status.textContent="Não foi possível copiar a chave.";}finally{a.remove();}}status.classList.add("visivel");clearTimeout(status._timer);status._timer=setTimeout(()=>{status.classList.remove("visivel");status.textContent="";},3500);});
};
document.addEventListener("DOMContentLoaded",window.initCopiarPix);
})();
