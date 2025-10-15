import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>🎲 Matemáticas Divertidas 🎯</h1>
        <p>Aprende, juega y mejora tus habilidades matemáticas de forma divertida.</p>
      </header>

      <section className="home-sections">
        <div className="card">
          <img src="https://cdn-icons-png.flaticon.com/512/2729/2729007.png" alt="Suma" />
          <h2>Juegos de Suma</h2>
          <p>Practica tus sumas con mini juegos llenos de color y desafíos.</p>
          <button>Jugar ➕</button>
        </div>

        <div className="card">
          <img src="https://cdn-icons-png.flaticon.com/512/2729/2729022.png" alt="Resta" />
          <h2>Resta Rápida</h2>
          <p>Pon a prueba tu rapidez mental resolviendo restas divertidas.</p>
          <button>Jugar ➖</button>
        </div>

        <div className="card">
          <img src="https://cdn-icons-png.flaticon.com/512/2729/2729034.png" alt="Multiplicación" />
          <h2>Desafío de Multiplicación</h2>
          <p>Supera niveles y conviértete en el maestro de la tabla del 9.</p>
          <button>Jugar ✖️</button>
        </div>
      </section>

      <footer className="home-footer">
        <p>© 2025 Matemáticas Divertidas | Hecho con 💙 para aprender jugando</p>
      </footer>
    </div>
  );
}

export default Home;
