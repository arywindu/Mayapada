import "./Carousel.css";

import React from "react";
import carouselImage from "../../assets/images/carousel1.png";

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src={carouselImage} class="d-block w-100"></img>
            <div class="carousel-caption d-none d-md-block">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
