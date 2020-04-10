import React from "react";
import InfiniteCarousel from "react-leaf-carousel";

class TrendingNow extends React.Component {
  constructor() {
    super();
    this.state = {
      trendingProducts: [
        { name: "jeans", image: "images/jeans.jpg" },
        { name: "jeans", image: "images/jeans.jpg" },
        { name: "jeans", image: "images/jeans.jpg" },
        { name: "jeans", image: "images/jeans.jpg" },
        { name: "jeans", image: "images/jeans.jpg" },
      ],
    };
  }
  render() {
    return (
      <div className="container">
        <div className="title-wrapper d-flex align-items-center justify-content-center">
          <div className="title-line"></div>
          <div className="title">
            <h2 className="title-text">Trending Now</h2>
          </div>
          <div className="title-line"></div>
        </div>
        <div className="carousel">
          <InfiniteCarousel
            breakpoints={[
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                },
              },
            ]}
            dots={true}
            showSides={true}
            sidesOpacity={0.3}
            sideSize={0.1}
            slidesToScroll={4}
            slidesToShow={4}
            scrollOnDevice={true}
          >
            {this.state.trendingProducts.map((e, i) => {
              return (
                <div>
                  <img src={e.image} alt="" />
                  <p className="carousel-item-name">{e.name}</p>
                </div>
              );
            })}
          </InfiniteCarousel>
        </div>
      </div>
    );
  }
}

export default TrendingNow;
