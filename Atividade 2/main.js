const jogadorAtual = document.querySelector(".jogadorAtual");

let selec;
let player = "X";

let positions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function init() {
    selec = [];

  jogadorAtual.innerHTML = `JOGADOR ATUAL: ${player}`;

  document.querySelectorAll(".jogo button").forEach((item) => {
    item.innerHTML = "";
    item.addEventListener("click", newMove);
  });
}

init();

function newMove(e) {
  const index = e.target.getAttribute("id");
  e.target.innerHTML = player;
  e.target.removeEventListener("click", newMove);
  selec[index] = player;

  setTimeout(() => {
    check();
  }, [100]);

  player = player === "X" ? "O" : "X";
  jogadorAtual.innerHTML = `JOGADOR ATUAL: ${player}`;
}

function check() {
  let ultimoMov = player === "X" ? "O" : "X";

  const items = selec
    .map((item, i) => [item, i])
    .filter((item) => item[0] === ultimoMov)
    .map((item) => item[1]);

  for (pos of positions) {
    if (pos.every((item) => items.includes(item))) {
      alert("O JOGADOR '" + ultimoMov + "' GANHOU!");
      init();
      return;
    }
  }

  if (selec.filter((item) => item).length === 9) {
    alert("EMPATE!");
    init();
    return;
  }
}