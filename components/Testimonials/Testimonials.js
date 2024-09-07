import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Testimonials.css';
import img from '../../assets/Ashley.jpeg';
import img1 from '../../assets/Brad.jpeg';
import img2 from '../../assets/Van.jpeg';

const Testimonials = () => {
    const testimonials = [
        {
            text: "Analyzinn Solutions, as it comes in the name, is a brilliant company to work with when it comes to Analytics Services. Having insights from your entire company really helps you when making decisions.",
            author: "Brad Johnson",
            position: "CEO | Zelevate",
            logo: img,
        },
        {
            text: "Digital Marketing is a hassle for those stepping in the industry. It always helps when there is a group of professionals ready to help.",
            author: "Ashley Diamond",
            position: "Managing Director | Hikerr",
            logo: img1,
        },
        {
            text: "In terms of Integration within the company, alongside Automation within tasks, Analyzinn has been incredible to work with. Complex Tasks are now only a click of a button away.",
            author: "Van Bressen",
            position: "CEO | Superloft Games",
            logo: img2,
        },
    ];

    return (
        <div className="testimonials">
            <h1 className="testimonials-heading">Testimonials</h1>
            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                interval={5000}
                className="testimonial-carousel"
            >
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-slide">
                        <p className="testimonial-text">"{testimonial.text}"</p>
                        <div className="author-info">
                            <div className="author-logo-container">
                                <img src={testimonial.logo} alt={`${testimonial.author} Logo`} className="author-logo" />
                            </div>
                            <div className="author-details">
                                <h4 className="author-name">{testimonial.author}</h4>
                                <p className="author-position">{testimonial.position}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Testimonials;
