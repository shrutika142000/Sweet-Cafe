import React from "react";
import customer1 from "../assets/1 customer.png";
import customer2 from "../assets/customer 2.png";
import cafeimage from "../assets/cafe image.png";
import cafeimage2 from "../assets/cafe image2.png";
import cafeimage3 from "../assets/cafe image3.png";
import customer3 from "../assets/Emma.png";
import customer4 from "../assets/Michael.png";
import customer5 from "../assets/Sofia.png";
const Testimonial = () => {
  return (
    <div className="testimonial" id="testimonial">
      <section
        className="testimonials-carousel-section py-5"
        style={{ backgroundColor: "#d2c8c8" }}
      >
        <div className="container">
          <h2 className=" section-title text-center mb-5">
            What Our Customers Say
          </h2>
          <div className="row">
            {/* Left Carousel for Cafe Images */}
            <div className="col-md-4">
              <div
                id="leftCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {/* Left Carousel Item 1 */}
                  <div className="carousel-item active">
                    <img
                      src={cafeimage}
                      alt="Cafe1"
                      className="img-fluid rounded shadow-lg"
                    />
                  </div>
                  {/* Left Carousel Item 2 */}
                  <div className="carousel-item">
                    <img
                      src={cafeimage2}
                      alt="Cafe2"
                      className="img-fluid rounded shadow-lg"
                    />
                  </div>
                  {/* Left Carousel Item 3 */}
                  <div className="carousel-item">
                    <img
                      src={cafeimage3}
                      alt="Cafe3"
                      className="img-fluid rounded shadow-lg"
                    />
                  </div>
                </div>
                {/* Left Carousel Controls */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#leftCarousel"
                  data-bs-slide="prev"
                  style={{ color: "black" }}
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#leftCarousel"
                  data-bs-slide="next"
                  style={{ color: "black" }}
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            {/* Right Carousel for Testimonials */}
            <div className="col-md-8 position-relative">
              <div
                id="testimonialsCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {/* Testimonial 1 */}
                  <div className="carousel-item active">
                    <div className="d-flex align-items-start shadow-sm p-3 rounded">
                      <img
                        src={customer1}
                        alt="Customer 1"
                        className="rounded-circle me-3"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                      <div>
                        <h5>John Doe</h5>
                        <p>
                          "Sweet Cafe is my go-to spot for coffee! The ambiance
                          is amazing, and their pastries are to die for."
                        </p>
                        <div className="text-warning">★★★★★</div>
                      </div>
                    </div>
                  </div>
                  {/* Testimonial 2 */}
                  <div className="carousel-item">
                    <div className="d-flex align-items-start shadow-sm p-3 rounded">
                      <img
                        src={customer2}
                        alt="Customer 2"
                        className="rounded-circle me-3"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                      <div>
                        <h5>Jane Smith</h5>
                        <p>
                          "The cappuccino here is incredible. The staff is
                          friendly, and the decor is cozy!"
                        </p>
                        <div className="text-warning">★★★★★</div>
                      </div>
                    </div>
                  </div>
                  {/* Testimonial 3 */}
                  <div className="carousel-item">
                    <div className="d-flex align-items-start shadow-sm p-3 rounded">
                      <img
                        src={customer3}
                        alt="Customer 3"
                        className="rounded-circle me-3"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                      <div>
                        <h5>Emma Wilson</h5>
                        <p>
                          "Absolutely love this place! Great coffee, amazing
                          desserts, and such a welcoming vibe!"
                        </p>
                        <div className="text-warning">★★★★☆</div>
                      </div>
                    </div>
                  </div>
                  {/* Testimonial 4 */}
                  <div className="carousel-item">
                    <div className="d-flex align-items-start shadow-sm p-3 rounded">
                      <img
                        src={customer4}
                        alt="Customer 4"
                        className="rounded-circle me-3"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                      <div>
                        <h5>Michael Brown</h5>
                        <p>
                          "I love spending my weekends here. The vibe is so
                          relaxing, and the drinks are top-notch!"
                        </p>
                        <div className="text-warning">★★★★☆</div>
                      </div>
                    </div>
                  </div>
                  {/* Testimonial 5 */}
                  <div className="carousel-item">
                    <div className="d-flex align-items-start shadow-sm p-3 rounded">
                      <img
                        src={customer5}
                        alt="Customer 5"
                        className="rounded-circle me-3"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                      <div>
                        <h5>Sophia Lee</h5>
                        <p>
                          "Their cakes and lattes are my absolute favorite! It's
                          always a treat to visit Sweet Cafe."
                        </p>
                        <div className="text-warning">★★★★★</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Right Carousel Controls */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#testimonialsCarousel"
                  data-bs-slide="prev"
                  style={{
                    color: "black",
                    position: "absolute",
                    left: "-60px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#testimonialsCarousel"
                  data-bs-slide="next"
                  style={{
                    color: "black",
                    position: "absolute",
                    right: "-60px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
