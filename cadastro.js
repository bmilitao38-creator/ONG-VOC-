(() => {
const CHAVE_STORAGE = "ongVoceEMais_formVoluntario";
function lerHistorico(){try{const texto=localStorage.getItem(CHAVE_STORAGE);return texto?JSON.parse(texto):null;}catch(e){return null;}}
function gravarHistorico(form){
 const dados={nome:form.nome.value,nascimento:form.nascimento.value,email:form.email.value,telefone:form.telefone.value,cidade:form.cidade.value,areas:[...form.querySelectorAll('input[name="area"]:checked')].map(c=>c.value),disponibilidade:form.disponibilidade.value,experiencia:form.experiencia.value,mensagem:form.mensagem.value};
 localStorage.setItem(CHAVE_STORAGE,JSON.stringify(dados));
}
function restaurarHistorico(form){
 const dados=lerHistorico(); if(!dados)return;
 ["nome","nascimento","email","telefone","cidade","disponibilidade","experiencia","mensagem"].forEach(c=>{if(dados[c]!=null&&form.elements[c])form.elements[c].value=dados[c];});
 const areas=Array.isArray(dados.areas)?dados.areas:[];
 form.querySelectorAll('input[name="area"]').forEach(c=>c.checked=areas.includes(c.value));
}
window.initCadastro=function(){
 const form=document.getElementById("form-voluntario"),retorno=document.getElementById("retorno-cadastro"),nascimento=document.getElementById("nascimento");
 if(!form||!retorno||form.dataset.inicializado==="true")return;
 form.dataset.inicializado="true"; restaurarHistorico(form);
 const idade=data=>{const h=new Date(),n=new Date(data+"T12:00:00");let a=h.getFullYear()-n.getFullYear();const m=h.getMonth()-n.getMonth();if(m<0||(m===0&&h.getDate()<n.getDate()))a--;return a;};
 form.addEventListener("input",()=>gravarHistorico(form));
 form.addEventListener("change",()=>gravarHistorico(form));
 form.addEventListener("submit",e=>{e.preventDefault();if(!form.checkValidity()){form.reportValidity();return;}
  if(nascimento?.value&&idade(nascimento.value)<18){retorno.hidden=false;retorno.className="retorno retorno-erro";retorno.innerHTML='<h2 tabindex="-1">Não foi possível concluir o cadastro</h2><p>É necessário ter 18 anos ou mais para se cadastrar como voluntário.</p>';retorno.querySelector("h2").focus();return;}
  gravarHistorico(form);retorno.hidden=false;retorno.className="retorno";retorno.innerHTML='<h2 tabindex="-1">Cadastro de demonstração concluído</h2><p>O formulário funcionou, mas este é um site de estudo: nenhum dado foi enviado. Os dados permanecem salvos apenas neste navegador.</p>';form.hidden=true;retorno.querySelector("h2").focus();
 });
};
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",window.initCadastro);else window.initCadastro();
})();