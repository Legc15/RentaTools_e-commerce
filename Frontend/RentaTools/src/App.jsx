import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/Footer";
import { ContextProvider } from "./api/global.context";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </ContextProvider>
  );
}

export default App;
