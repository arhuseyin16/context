import './App.css';
import {ThemeProvider} from "./context/themeContext";
import Container from "./components/container";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
          <Container/>
      </ThemeProvider>
    </div>
  );
}

export default App;
