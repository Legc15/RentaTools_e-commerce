import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { ContextProvider } from "./api/global.context"

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </ContextProvider>
  )
}

export default App
