import Hero from "./components/Hero/Hero";
import TravelBlog from "./components/TravelBlog/TravelBlog";
import TravelData from "./TravelData.js";
import "./App.css";

function App() {
  const travelDestination = TravelData.map((item) => {
    return (
      <TravelBlog
        id={item.id}
        placeHeading={item.placeHeading}
        placeImg1={item.placeImg1}
        placeImg2={item.placeImg2}
        placeImg3={item.placeImg3}
        placeDescription={item.placeDescription}
      />
    );
  });
  return (
    <div className="App">
      <Hero />
      <TravelBlog />
      <section className="placeContainer">{travelDestination}</section>
    </div>
  );
}

export default App;
