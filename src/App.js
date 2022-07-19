import "./App.css";
import Banner from "./components/banner/Banner";
import Benefits from "./components/benefits/Benefits";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Benefits />
      {/* <button className="sexyButton">View all products</button> */}
    </div>
  );
}

export default App;
