const emojis = ["🐾", "🐱", "🧡"];

function criarEmoji() {
  const emoji = document.createElement("div");
  emoji.classList.add("emoji-flutuante");
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

  // posição horizontal aleatória
  emoji.style.left = Math.random() * 100 + "vw";

  // duração aleatória da animação
  const duracao = Math.random() * 3 + 4; // entre 4s e 7s
  emoji.style.animationDuration = duracao + "s";

  // tamanho levemente variado
  emoji.style.fontSize = (22 + Math.random() * 14) + "px";

  document.body.appendChild(emoji);

  // remove depois da animação
  setTimeout(() => {
    emoji.remove();
  }, duracao * 1000);
}

// cria emojis a cada intervalo
setInterval(criarEmoji, 900);