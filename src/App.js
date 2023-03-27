import './App.css';
import {ThemeProvider} from "./context/themeContext";
import Container from "./components/container";
import {UserProvider} from "./context/userContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
          <UserProvider>
              <Container/>
          </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
