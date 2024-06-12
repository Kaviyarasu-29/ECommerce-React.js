import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap';
import '../Carousel/Carousel.css'
import Image1 from '../../Assets/Image/Carousel/1.webp';
import Image2 from '../../Assets/Image/Carousel/2.webp';
import Image3 from '../../Assets/Image/Carousel/3.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconArrowRight, IconCarambola } from '@tabler/icons-react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const ControlledCarousel = () => {
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  return (


    <>
      <div className="Carousel">
        <div className="carousel-text">
          <div className='circle-star-heading'>
            <svg className='circle-star-new' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1200 1200"><path fill="#ff0000" d="M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0m3.955 209.912l94.556 295.239l309.889 6.958l-251.588 181.055l89.136 296.924l-249.976-183.325l-254.81 176.587l97.119-294.434l-246.68-187.793l310.034 1.392z"></path></svg>
            <h4>
              Top Products Of The Month
            </h4>
          </div>
          <h1 className="carousel-headphone heebo-600">
            Micropack MHP Headphone Black
          </h1>
          <h6 className="Headphone-discription">
            The Micropack HeadPhone Offers a stereo PC headset with volume control, a flexible mic arm, adjustable headband.
          </h6>
          <button type="button" className='btn btn-primary'>Shop Now <IconArrowRight stroke={2} /></button>
        </div>
      </div>


    </>


    // <div className="Carousel-Section">
    //   <div className="Carousel-width">

    //     <Carousel fade>
    //       <Carousel.Item>
    //         <img
    //           className="d-block"
    //           src={Image3}
    //           alt="First slide"
    //         />
    //         <Carousel.Caption>
    //           {/* <h3>First slide label</h3>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    //         </Carousel.Caption>
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <img
    //           className="d-block"
    //           src={Image2}
    //           alt="Second slide"
    //         />

    //         <Carousel.Caption>
    //           {/* <h3>Second slide label</h3>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    //         </Carousel.Caption>
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <img
    //           className="d-block"
    //           src={Image1}
    //           alt="Third slide"
    //         />

    //         <Carousel.Caption>
    //           {/* <h3>Third slide label</h3>
    //       <p>
    //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //       </p> */}
    //         </Carousel.Caption>
    //       </Carousel.Item>
    //     </Carousel>

    //   </div>

    // </div>


  );
}


export default ControlledCarousel
