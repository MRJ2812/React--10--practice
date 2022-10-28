import React from 'react';
import { Carousel, ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FaGoogle, FaGitAlt, FaFacebookSquare, FaTwitter, FaTwitch, FaWhatsapp } from 'react-icons/fa';
import brand from "../../../Assets/Images/brand1.jpeg";
import brand2 from '../../../Assets/Images/Brands2.jpg'

const RightNav = () => {
    return (
        <div>

            <ButtonGroup vertical>
                <Button className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Log In Google</Button>
                <Button variant="outline-dark"><FaGitAlt></FaGitAlt> Log In with  GitHub</Button>
            </ButtonGroup>

            <div>
                <h5>Find Us On</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-1 '><FaFacebookSquare></FaFacebookSquare>  Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-1'><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-1'><FaTwitch></FaTwitch>Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-1'><FaWhatsapp></FaWhatsapp>Whatsapp</ListGroup.Item>
                </ListGroup>
            </div>

            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={brand}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={brand2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default RightNav;