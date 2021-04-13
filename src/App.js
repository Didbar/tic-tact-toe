import "./App.css";
import Game from "./components/Game";

function App() {
  return (
    <div className="App">
      <header className="App-header">Tic Tac Toe Game</header>
      <section className="tic-tact-toe-game">
        <Game />
      </section>
    </div>
  );
}

export default App;
