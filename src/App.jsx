import Header from "./components/Header";
import LinksContainer from "./components/LinksContainer";
import SnackBarProvider from "./providers/SnackBarProvider";
import UserProvider from "./providers/UserProvider";

import "./style.css";

function App() {
  return (
    <UserProvider>
      <SnackBarProvider>
        <div className="App">
          <Header />
          <LinksContainer />
        </div>
      </SnackBarProvider>
    </UserProvider>
  );
}

export default App;
