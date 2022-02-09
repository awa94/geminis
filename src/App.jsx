import Header from "./components/Header";
import LinksContainer from "./components/LinksContainer";
import SnackBarProvider from "./providers/SnackBarProvider";

function App() {
  return (
    <SnackBarProvider>
      <div className="App">
        <Header />
        <LinksContainer />
      </div>
    </SnackBarProvider>
  );
}

export default App;
