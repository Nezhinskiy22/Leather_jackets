import "./App.css";
import Arrivals from "./components/arrivals/Arrivals";
import Banner from "./components/banner/Banner";
import Benefits from "./components/benefits/Benefits";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Benefits />
      <Arrivals />
    </div>
  );
}

export default App;
