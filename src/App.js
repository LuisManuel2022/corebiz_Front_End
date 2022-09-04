import Home from "./components/Home";
import { CartProvider } from "./context/CartContext";
import "./App.scss";
import Navega from "./components/Nav";
import Estatica from "./components/banner/estatica";
import News from "./components/newslett/newsletter";
import Footer from "./components/footer/footer";

function App() {
  return (
    <CartProvider>
      <Navega />
      <Estatica />
      <Home />
      <News />
      <Footer />
    </CartProvider>
  );
}

export default App;
