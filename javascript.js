const btnDica = document.getElementById("btnDica");
const dica = document.getElementById("dica");

const dicas = [
  "Evite lavar o cabelo com água muito quente!",
  "Corte as pontas a cada 2 meses para evitar pontas duplas.",
  "Faça hidratação semanal com produtos naturais.",
  "Use protetor térmico antes de secar ou alisar.",
  "Durma com fronha de cetim para evitar o frizz.",
  "Massageie o couro cabeludo para estimular o crescimento.",
  "Não durma com o cabelo molhado!"
];

btnDica.addEventListener("click", () => {
  const dicaAleatoria =
    dicas[Math.floor(Math.random() * dicas.length)];
  
  dica.textContent = dicaAleatoria;
});
