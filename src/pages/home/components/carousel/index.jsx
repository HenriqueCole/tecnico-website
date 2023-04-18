import "./styles.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ProductImg from "../../../../assets/product.png";
import p1Img from "../../../../assets/proteina_1.png";
import p2Img from "../../../../assets/proteina_2.png";
import p3Img from "../../../../assets/proteina_3.png";
import p4Img from "../../../../assets/proteina_4.png";
import p5Img from "../../../../assets/proteina_5.png";
import bpImg from "../../../../assets/barra_proteina.png";
import s1Img from "../../../../assets/suplemento_1.png";
import s2Img from "../../../../assets/suplemento_2.png";
import v1Img from "../../../../assets/vitamina_1.png";
import v2Img from "../../../../assets/vitamina_2.png";
import v3Img from "../../../../assets/vitamina_3.png";
import HandGripImg from "../../../../assets/handgrip.png";
import verdeImg from "../../../../assets/camiseta_verde.png";
import cinzaImg from "../../../../assets/camiseta_cinza.png";
import pretoImg from "../../../../assets/camiseta_preta.png";

export default function Carousel(props) {
  const handleDragStart = (e) => e.preventDefault();

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const itemsSuplementos = [
    <img
      className="imgProduct"
      src={ProductImg}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      className="imgProduct"
      src={p1Img}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      className="imgProduct"
      src={p2Img}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      className="imgProduct"
      src={p3Img}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      className="imgProduct"
      src={p4Img}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      className="imgProduct"
      src={p5Img}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      className="imgProduct"
      src={bpImg}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      className="imgProduct"
      src={s1Img}
      onDragStart={handleDragStart}
      role="presentation"
    />,
  ];

  const itemsAcessorios = [
    <img
      className="imgProduct"
      src={HandGripImg}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      className="imgProduct"
      src={verdeImg}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      className="imgProduct"
      src={cinzaImg}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      className="imgProduct"
      src={pretoImg}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      className="imgProduct"
      src={HandGripImg}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      className="imgProduct"
      src={verdeImg}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      className="imgProduct"
      src={cinzaImg}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      className="imgProduct"
      src={pretoImg}
      onDragStart={handleDragStart}
      role="presentation"
    />,
  ];

  const Carousel = () => (
    <AliceCarousel
      mouseTracking
      items={
        props.page == "suplementos"
          ? itemsSuplementos
          : props.page == "acessorios"
          ? itemsAcessorios
          : itemsSuplementos
      }
      responsive={responsive}
      autoPlayInterval={2000}
      autoPlayDirection="ltr"
      autoPlay={true}
      fadeOutAnimation={true}
      controlsStrategy="alternate"
    />
  );

  return <Carousel />;
}
