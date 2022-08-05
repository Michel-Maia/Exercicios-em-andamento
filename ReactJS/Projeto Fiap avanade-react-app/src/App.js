import Header from './components/Header';
import './App.css';

function App() {
  const dados = {
    nome: "Michel Maia",
    empresa: "Avanade",
    site: "https://www.avanade.com",
    className: "App-link",
  };

  return (
// JSX - JavaScript Extensible
    <div className="App">
      <Header title="Bem vindo!" options= {dados}
      />
    </div>
  );
}

export default App;
