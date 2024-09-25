import "./App.css";
import { ThemeState } from "./context/themeState";
import Theme from "./component/theme";

function App() {
  return (
    <>
      <ThemeState>
      <Theme />
      </ThemeState>
    </>
  );
}

export default App;
