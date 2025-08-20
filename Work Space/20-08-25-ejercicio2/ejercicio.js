document.addEventListener('DOMContentLoaded', () => {
  const titulo = document.getElementById('titulo');
  const primerLi = document.querySelector('#lista-geeks li');

  if (titulo && primerLi) {
    const nombre = primerLi.textContent.trim();
    if (nombre) {
      titulo.textContent = `La Geek Girl seleccionada es: ${nombre}`;
    }
  }
});
