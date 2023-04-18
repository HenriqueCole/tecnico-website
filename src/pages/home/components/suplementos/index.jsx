import "./styles.css";

import Carousel from "../carousel";

export default function Suplementos() {
  return (
    <div className="suplementos">
      <div className="container-carousels">
        <div className="container-trending">
          <h1>TOP TRENDING</h1>
        </div>
        <div className="container-title">
          <h1>Pré-treino</h1>
        </div>
        <Carousel />
        <div className="container-title">
          <h1>Creatina</h1>
        </div>
        <Carousel />
        <div className="container-title">
          <h1>Vitamina</h1>
        </div>
        <Carousel page={"suplementos"} />
      </div>
    </div>
  );
}
