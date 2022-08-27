import "./App.css";

// import Header from './components/Header/Header.js';
// import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <section>
        <h1> Bem vindo ao Universo</h1>

        <span>Explore a extensão tridimensional sem limites</span>
        {/* // botão para página de Page */}
        <button>
          <a href="/components/Page">
            <span>Explore</span>
          </a>
        </button>

        <p className="">
          "Em algum lugar, algo incrível está esperando para ser descoberto."
        </p>
        <p>Carl Sagan</p>
      </section>
    </div>
  );
}

export default App;
