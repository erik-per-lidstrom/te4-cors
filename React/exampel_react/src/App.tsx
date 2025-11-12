import "./index.css";
import "./components/card/card.component";
import CardComponent from "./components/card/card.component";
function App() {
  return (
    <div className="contaner">
      <CardComponent
        title="somthing"
        description=" a description"
        imgUrl="https://images.pexels.com/photos/34474293/pexels-photo-34474293.jpeg"
      />
      <CardComponent
        title="somthing"
        description=" a description"
        imgUrl="https://images.pexels.com/photos/19160423/pexels-photo-19160423.jpeg"
      />
    </div>
  );
}

export default App;
