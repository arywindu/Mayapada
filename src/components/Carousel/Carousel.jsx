import "./Carousel.css";

import React from "react";
import carouselImage from "../../assets/images/carousel1.png";

const Carousel = (props) => {
  const { data } = props;
  return (
    <div>
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          {data &&
            data.map((item, index) => (
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to={`${index}`}
                class={index === 0 ? "active" : ""}
                aria-current="true"
                aria-label="Slide 1"
              ></button>
            ))}
        </div>
        <div class="carousel-inner">
          {data &&
            data.map((item, index) => (
              <div
                class={`carousel-item ${index === 0 ? "active" : ""}`}
                data-bs-interval="10000"
              >
                <img src={item.banner_image} class="d-block w-100"></img>
                <div class="carousel-caption">
                  <div className="text-carousel">
                    <h5>{item.headline}</h5>
                    <h1>{item.banner_text}</h1>
                  </div>
                  {item.button_1_show === 1 && (
                    <a href={item.link_button_1}>
                      <button type="button" class="btn btn-carousel btn" onClick={item.link_button_1}>
                        {item.button_1}
                      </button>
                    </a>
                  )}
                  &nbsp; &nbsp;
                  {item.button_2_show === 1 && (
                    <a href={item.link_button_2}>
                      <button type="button" class="btn btn-carousel btn">
                        {item.button_2}
                      </button>
                    </a>
                  )}
                </div>
              </div>
            ))}
          {/* <div class="carousel-item active" data-bs-interval="10000">
            <img src={carouselImage} class="d-block w-100"></img>
            <div class="carousel-caption">
              <div className="text-carousel">
                <h5>NEWS</h5>
                <h1>
                  Informasi Pendaftaran<br></br>Mahasiswa Baru 2023
                </h1>
              </div>
              <button type="button" class="btn btn-carousel btn">
                Daftar Sekarang
              </button>
              &nbsp; &nbsp;
              <button type="button" class="btn btn-carousel btn">
                Info Selengkapnya
              </button>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={carouselImage} class="d-block w-100"></img>
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={carouselImage} class="d-block w-100"></img>
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
