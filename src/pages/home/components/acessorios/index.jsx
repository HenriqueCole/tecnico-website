import "./styles.css";

import Carousel from "../carousel";

export default function Acessorios() {
  return (
    <div className="acessorios">
      <div className="container-carousels">
        <div className="container-trending">
          <h1>TOP TRENDING</h1>
        </div>
        <div className="container-title">
          <h1>Mais comprados</h1>
        </div>
        <Carousel />
        <div className="container-title">
          <h1>Musculação</h1>
        </div>
        <Carousel />
        <div className="container-title">
          <h1>HandGrip</h1>
        </div>
        <Carousel page={"acessorios"} />
      </div>
    </div>
  );
}
