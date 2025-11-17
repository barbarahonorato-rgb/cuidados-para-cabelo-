const btndica=
  document.getElementByld("btnDica");
const dica =
  document.getElementByld("dica");

const dicas = [
  "evite lavar o cabelo com agua muito quente!"
"corte as pontas a cada 2 meses para evitar pontas duplas"
" faça hidratação semenal com produtos naturais.",
  " use protetot térmico antes de secar ou alisar.",
  " durma com fronha de cetim para evitar o frizz.",
  " massageie o couro cabeludo para estimular o crescimento.",
  " não durma com o cabelo molhado!"];

btnDica.addEventLister("click",()=>{
  const dicaAleatoria =
    dicas[math.random()*
    dicas.length)];
dica.textcontent = dicaAleatoria;});
