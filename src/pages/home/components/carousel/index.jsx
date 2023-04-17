import "./styles.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ProductImg from "../../../../assets/product.png";

export default function Carousel() {
  const handleDragStart = (e) => e.preventDefault();

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = [
    <img
      className="imgProduct"
      src={ProductImg}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      className="imgProduct"
      src={ProductImg}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      className="imgProduct"
      src={ProductImg}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      className="imgProduct"
      src={ProductImg}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      className="imgProduct"
      src={ProductImg}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      className="imgProduct"
      src={ProductImg}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      className="imgProduct"
      src={ProductImg}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      className="imgProduct"
      src={ProductImg}
      onDragStart={handleDragStart}
      role="presentation"
    />,
  ];

  const Carousel = () => (
    <AliceCarousel
      mouseTracking
      items={items}
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
