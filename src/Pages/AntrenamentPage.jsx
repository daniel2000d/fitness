import React, { useState } from "react";
import "../styles/cards.css";
import Navbar from "../Components/Navbar";

function Card({ id, title, description, price, onAddToCart }) {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src="https://via.placeholder.com/350x200"
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer text-center">
        <button
          className="btn btn-primary"
          onClick={() => onAddToCart({ id, title, description, price })}
        >{`Cumpara - ${price}`}</button>
      </div>
    </div>
  );
}

function CartItem({ item, onRemoveFromCart }) {
  const { id, title, description, price } = item;

  return (
    <div className="cart-item">
      <h5>{title}</h5>
      <p>{description}</p>
      <p>{price}</p>
      <button onClick={() => onRemoveFromCart(id)}>Remove</button>
    </div>
  );
}

function CardGroup() {
  const cards = [
    {
      id: 1,
      title: "Slabire rapida",
      description: "Programul perfect pentru a slabi intr-un timp record",
      price: "200 RON",
    },
    {
      id: 2,
      title: "Tone up",
      description: "Programul",
      price: "150 RON",
    },
    {
      id: 3,
      title: "Cardio intens",
      description:
        "Programul care iti creste rezistenta si iti imbunatateste conditia fizica",
      price: "100 RON",
    },
    {
      id: 4,
      title: "Abdomene de otel",
      description:
        "Programul care te ajuta sa obtii un abdomen plat si musculos",
      price: "175 RON",
    },
    {
      id: 5,
      title: "Meditatie si relaxare",
      description:
        "Programul pentru a-ti recupera energia si a te elibera de stres",
      price: "120 RON",
    },
    {
      id: 6,
      title: "Yoga pentru incepatori",
      description:
        "Programul pentru a descoperi beneficiile yoga si a-ti imbunatati flexibilitatea",
      price: "90 RON",
    },
    {
      id: 7,
      title: "Kick-boxing",
      description:
        "Programul care iti creste puterea, flexibilitatea si viteza",
      price: "220 RON",
    },
    {
      id: 8,
      title: "Crosfit",
      description:
        "Programul care iti creste masa musculara si iti imbunatateste conditia fizica generala",
      price: "250 RON",
    },
    {
      id: 9,
      title: "Antrenament functional",
      description: "Programul care iti imbunatateste mobilitatea si forta musculara",
      price: "180 RON",
    },
  ];
  const [showModal, setShowModal] = useState(false); // starea de afisare a modalului

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const handleAddToCart = () => {
    console.log("Product added to cart!");
    openModal();
  };
  
  const handleModalClose = () => {
    closeModal();
  };
  
   
  return (
    
    <div className="container">
      
        <Navbar/>
      
      
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {cards.map(({ id, title, description, price }) => (
          <div className="col" key={id}>
            <Card
              title={title}
              description={description}
              price={price}
              onAddToCart={handleAddToCart}
            />
          </div>
        ))}
      </div>
      
    </div>
  
  );
  
  
}

export default CardGroup;