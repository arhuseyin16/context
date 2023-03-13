import './App.css';
import {ThemeProvider} from "./context/themeContext";
import Button from "./components/Button";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
          <Header/>
          <hr/>
          <Button/>
      </ThemeProvider>
    </div>
  );
}

export default App;
