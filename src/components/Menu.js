import React from "react";

const Menu = () => {
  const menuItems = [
    {
      title: "Coffee",
      description: "Freshly brewed coffee with various flavors.",
      img: "/images/coffee.png",
    },
    {
      title: "Cakes",
      description: "Delicious cakes baked fresh every day.",
      img: "/images/cake.png",
    },
    {
      title: "Pizza",
      description: "Hand-tossed pizzas with fresh ingredients.",
      img: "/images/pizza.png",
    },
    {
      title: "Burgers",
      description: "Juicy burgers with crispy fries.",
      img: "/images/burger.png",
    },
    {
      title: "Cafe Foods",
      description: "Quick bites, sandwiches, and much more.",
      img: "/images/cafe food.png",
    },
  ];

  return (
    <section id="menu" className="py-5 menu-section">
      <div className="container">
        <h2 className="section-title text-center ">Our Delicious Menu</h2>
        <div className="row g-4">
          {menuItems.map((item, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100">
                <img src={item.img} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <a href="#order" className="btn btn-outline-primary">
                    Order Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
