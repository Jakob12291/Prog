const tal1El = document.getElementById('tal1');
const operationEl = document.getElementById('operation');
const tal2El = document.getElementById('tal2');
const beraknaBtn = document.getElementById('berakna');
const resultatEl = document.getElementById('resultat');

const berakna = () => {
  const tal1 = parseFloat(tal1El.value);
  const tal2 = parseFloat(tal2El.value);
  const operation = operationEl.value;

  let resultat;

  switch (operation) {
    case '+':
      resultat = tal1 + tal2;
      break;
    case '-':
      resultat = tal1 - tal2;
      break;
    case '*':
      resultat = tal1 * tal2;
      break;
    case '/':
      resultat = tal1 / tal2;
      break;
  }

  resultatEl.innerHTML = `Resultat: ${resultat}`;
};

beraknaBtn.addEventListener('click', berakna);

