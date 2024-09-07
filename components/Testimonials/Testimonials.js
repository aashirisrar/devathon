import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import img from '../../public/assets/ai.png';
import img1 from '../../public/assets/ai.png';
import img2 from '../../public/assets/ai.png';

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
        <div className="text-center py-16 bg-blue-600">
            <h1 className="text-3xl font-bold mb-8 text-white">Testimonials</h1>
            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                interval={5000}
                className="testimonial-carousel"
            >
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="max-w-lg mx-auto p-4 border border-gray-300 rounded-lg bg-white shadow-md">
                        <p className="italic mb-4 text-gray-800">"{testimonial.text}"</p>
                        <div className="flex items-center gap-4 justify-center">
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300 flex-shrink-0">
                                <Image src={testimonial.logo} alt={`${testimonial.author} Logo`} className="object-cover w-full h-full" />
                            </div>
                            <div className="text-left">
                                <h4 className="text-lg font-semibold text-black">{testimonial.author}</h4>
                                <p className="text-sm text-gray-600">{testimonial.position}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Testimonials;
