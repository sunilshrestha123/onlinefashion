import React from 'react';
// import '../../assets/image';
import { Carousel } from 'react-bootstrap';
import image1 from '../../assets/image/1.jpg';
import image2 from '../../assets/image/2.jpg';
import image3 from '../../assets/image/3.jpg';
import image4 from '../../assets/image/4.jpg';

const defaultProps = {
  slide: true,
  interval: 3,
  pauseOnhover: true,
  wrap: true,
  indicators: true,
  control: true
};

class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      slide: true,
      indicators: true,
      interval: 1,
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    alert(`selected=${selectedIndex}, direction=${e.direction}`);
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
      // activeIndex={index}
      // direction={direction}
      // onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <img width={1500} height={500} alt='900x500' src={image1} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1500} height={500} alt='900x500' src={image2} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1500} height={500} alt='900x500' src={image3} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1500} height={500} alt='900x500' src={image4} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default ControlledCarousel;
