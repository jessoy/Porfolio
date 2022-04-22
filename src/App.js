import "./App.css";
import Projects from "./Components/Projects";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
              {/* <span className="wave" role="img" aria-labelledby="wave">
          👋🏻
        </span> */}
      <Header />

      <Projects />
    </div>
  );
}

export default App;
