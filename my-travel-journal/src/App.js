import "./App.css";
import Card from "./components/card";
import Navbar from "./components/navbar";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div>
      <Navbar />
      <section className="card-list">{cards}</section>
    </div>
  );
}

export default App;
