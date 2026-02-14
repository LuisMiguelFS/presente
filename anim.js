// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Regálame tu risa", time: 9 },
  { text: "Enséñame a soñar", time: 13 },
  { text: "Con solo una caricia Me pierdo en este mar", time: 17 },

  { text: "Regálame tu estrella", time: 24 },
  { text: "La que ilumina esta noche", time: 30 },
  { text: "Llena de paz y de armonía", time: 33 },
  { text: "Y te entregaré mi vida", time: 36 },

  { text: "Haces que mi cielo vuelva a tener ese azul", time: 41 },
  { text: "Pintas de colores mis mañanas, solo tú", time: 43 },
  { text: "Navego entre las olas de tu voz y", time: 48 },
  { text: "Tú, y tú, y tú, y solamente tú", time: 52 },
  { text: "Haces que mi alma se despierte con tu luz", time: 58 },
  { text: "Tú, y tú, y tú", time: 62 },

  { text: "Enseña tus heridas Y así las curarás", time: 68 },
  { text: "Que sepa el mundo entero Que tu voz guarda un secreto", time: 75 },

  { text: "No menciones tu nombre que en el firmamento Se mueren de celos", time: 83 },
  { text: "Tus ojos son destellos", time: 89 },
  { text: "Tu garganta es un misterio", time: 92 },

  { text: "Haces que mi cielo vuelva a tener ese azul", time: 96 },
  { text: "Pintas de colores mis mañanas, solo tú", time: 99 },
  { text: "Navego entre las olas de tu voz y", time: 103 },
  { text: "Tú, y tú, y tú, y solamente tú", time: 107 },
  { text: "Haces que mi alma se despierte con tu luz", time: 113 },
  { text: "Tú, y tú, y tú, y", time: 117 },

  { text: "Tú, y tú, y tú, y solamente tú", time: 120 },
  { text: "Haces que mi alma se despierte con tu luz", time: 126 },
  { text: "Tú, y tú, y tuuuuuuu", time: 131 },

];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 2000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);