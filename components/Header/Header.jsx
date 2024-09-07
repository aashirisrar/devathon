import React from 'react';
import Image from 'next/image';
import doctor from '@/public/assets/ai.png';
import patients from '@/public/assets/people.png';
import "./Header.css"
const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 p-8 lg:p-16" id="home">
      <div className="pms__header-content">
        <h1 style={{color:"#2d3aab"}}>Manage Your Healthcare System Efficiently</h1>
        <p>
          Streamline patient data, appointments, and billing in one platform. Ensure seamless communication 
          between doctors and patients, all while maintaining top-notch security and privacy standards.
        </p>
        <div className="pms__header-content__input">
          <input type="email" placeholder="Enter Your Email to Get Started" />
          <button className="hoverr" type="button">Get Started</button>
        </div>
        <div className="pms__header-content__people">
          <Image src={patients} alt="Patients Image" className='imgg' />
          <p>2,500 healthcare professionals signed up in the last 24 hours</p>
        </div>
      </div>

      <div className="flex-1 flex justify-center lg:justify-end mt-8 lg:mt-0">
        <Image src={doctor} alt="Doctor Image" className="w-[80%] h-auto" />
      </div>
    </div>
  );
};

export default Header;
