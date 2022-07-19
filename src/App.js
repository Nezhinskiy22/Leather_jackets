import "./App.css";
import Arrivals from "./components/arrivals/Arrivals";
import Banner from "./components/banner/Banner";
import Benefits from "./components/benefits/Benefits";
import Categories from "./components/categories/Categories";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Benefits />
      <Arrivals />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
