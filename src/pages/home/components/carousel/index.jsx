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
import cinzaImg from "../../../../assets/camiseta_cinza.webp";
import pretoImg from "../../../../assets/camiseta_preta.webp";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function Carousel(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleDragStart = (e) => e.preventDefault();
  const [productInfo, setProductInfo] = useState({
    name: "",
    description: "",
    price: 0,
    image: "",
  });

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  function addToLocalStorage() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(productInfo);
    localStorage.setItem("cart", JSON.stringify(cart));
    handleClose();
    alert("Produto adicionado com sucesso!");
    window.location.reload();
  }

  const itemsSuplementos = [
    <div
      onClick={() => {
        setProductInfo({
          name: "Proteína 1",
          description: "Proteína 1",
          price: 100.0,
          image: p1Img,
        });
        handleOpen();
      }}
    >
      <img
        className="imgProduct"
        src={p1Img}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
    <div
      onClick={() => {
        setProductInfo({
          name: "Proteína 2",
          description: "Proteína 2",
          price: 100.0,
          image: p2Img,
        });
        handleOpen();
      }}
    >
      <img
        className="imgProduct"
        src={p2Img}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
    <div
      onClick={() => {
        setProductInfo({
          name: "Proteína 3",
          description: "Proteína 3",
          price: 100.0,
          image: p3Img,
        });
        handleOpen();
      }}
    >
      <img
        className="imgProduct"
        src={p3Img}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
    <div
      onClick={() => {
        setProductInfo({
          name: "Proteína 4",
          description: "Proteína 4",
          price: 100.0,
          image: p4Img,
        });
        handleOpen();
      }}
    >
      <img
        className="imgProduct"
        src={p4Img}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
    <div
      onClick={() => {
        setProductInfo({
          name: "Proteína 5",
          description: "Proteína 5",
          price: 100.0,
          image: p5Img,
        });
        handleOpen();
      }}
    >
      <img
        className="imgProduct"
        src={p5Img}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
  ];

  const itemsAcessorios = [
    <div
      onClick={() => {
        setProductInfo({
          name: "Hand Grip",
          description: "Hand Grip",
          price: 15.0,
          image: HandGripImg,
        });
        handleOpen();
      }}
    >
      <img
        className="imgProduct"
        src={HandGripImg}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
    <div
      onClick={() => {
        setProductInfo({
          name: "Camiseta Verde",
          description: "Camiseta Verde",
          price: 50.0,
          image: verdeImg,
        });
        handleOpen();
      }}
    >
      <img
        className="imgProduct"
        src={verdeImg}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
    <div
      onClick={() => {
        setProductInfo({
          name: "Camiseta Cinza",
          description: "Camiseta Cinza",
          price: 50.0,
          image: cinzaImg,
        });
        handleOpen();
      }}
    >
      <img
        className="imgProduct"
        src={cinzaImg}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
    <div
      onClick={() => {
        setProductInfo({
          name: "Camiseta Preta",
          description: "Camiseta Preta",
          price: 50.0,
          image: pretoImg,
        });
        handleOpen();
      }}
    >
      <img
        className="imgProduct"
        src={pretoImg}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
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

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="container_img">
            <img
              className="productImg"
              src={productInfo.image}
              onDragStart={handleDragStart}
              role="presentation"
            />
          </div>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {productInfo.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {productInfo.description}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            R$ {productInfo.price}
          </Typography>
          <div className="container_buttons">
            <Button
              variant="contained"
              onClick={handleClose}
              sx={{
                backgroundColor: "#A9423F",
                "&:hover": {
                  backgroundColor: "#A9423F",
                },
              }}
            >
              Fechar
            </Button>
            <Button
              variant="contained"
              onClick={addToLocalStorage}
              sx={{
                backgroundColor: "#A9423F",

                "&:hover": {
                  backgroundColor: "#A9423F",
                },
              }}
            >
              Adicionar ao carrinho
            </Button>
          </div>
        </Box>
      </Modal>
      <Carousel />;
    </>
  );
}
