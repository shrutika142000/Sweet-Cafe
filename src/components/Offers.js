import React from "react";

const Offers = () => {
  const offers = [
    {
      title: "Coffee & Cake Combo",
      description: "Get a coffee and a slice of cake for just $5.99!",
      img: "/images/coffee and cake combo.png",
    },
    {
      title: "Burger & Fries Combo",
      description: "Enjoy a juicy burger with fries for only $7.99!",
      img: "/images/burger and fries combo.png",
    },
  ];

  return (
    <section id="offers" className="py-5 bg-light">
      <div className="container">
        <h2 className=" text-center section-title ">Special Combo Offers</h2>
        <div className="row">
          {offers.map((offer, index) => (
            <div key={index} className="col-md-6">
              <div className="card h-100">
                <img
                  src={offer.img}
                  className="card-img-top"
                  alt={offer.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{offer.title}</h5>
                  <p className="card-text">{offer.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
