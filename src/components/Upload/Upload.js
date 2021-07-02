import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import uploadImg from '../../images/upload icon.JPG';
// import './Upload.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import demoT from '../../images/Austria.png';
import demoT2 from '../../images/Belgium(red).png';
import dmeoG from '../../images/belgium(white).png';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const Upload = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} xl={6}>
                    <div className="justify-content-center align-items-center mh-100" >
                        <Card className="mx-auto " style={{ borderRadius: '15px', marginTop: '20px', padding: '50px', height: '550px' }}>
                            <Card.Img className="mx-auto" style={{ width: '250px', height: '250px' }} src={uploadImg} />
                            <Card.Body>
                                <Card.Title>Upload <br /> Your Image Here</Card.Title>
                                <Card.Text>
                                    (From Head to Waist)
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col xs={12} xl={6}>
                    <div style={{padding:'30px'}} className="justify-content-center align-items-center mh-100">
                        <h3>You are at:</h3>
                        <img src="" alt="brand logo" />
                        <Carousel
                            className= 'mt-5'
                            swipeable={false}
                            draggable={false}
                            showDots={true}
                            responsive={responsive}
                            // ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            // autoPlay={deviceType !== "mobile" ? true : false}
                            autoPlaySpeed={1000}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            // deviceType={deviceType}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                        >
                            <div><img style= {{height:'150px', width:'150px', margin:'10px'}} src={demoT} alt="" /></div>
                            <div><img style= {{height:'150px', width:'150px', margin:'10px'}} src={demoT2} alt="" /></div>
                            <div><img style= {{height:'150px', width:'150px', margin:'10px'}} src={dmeoG} alt="" /></div>
                            <div><img style= {{height:'150px', width:'150px', margin:'10px'}} src={demoT} alt="" /></div>
                        </Carousel>
                        <button type="button" class="btn btn-outline-warning w-100 mt-5">Continue Purchase</button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Upload;