"use client";

import Heading from "@/components/Heading";
import TestimonialCardColumn from "@/components/TestimonialCardColumn";
import avatar1 from "@/public/assets/avatar-1.png";
import avatar2 from "@/public/assets/avatar-2.png";
import avatar3 from "@/public/assets/avatar-3.png";
import avatar4 from "@/public/assets/avatar-4.png";
import avatar5 from "@/public/assets/avatar-5.png";
import avatar6 from "@/public/assets/avatar-6.png";
import avatar7 from "@/public/assets/avatar-7.png";
import avatar8 from "@/public/assets/avatar-8.png";
import avatar9 from "@/public/assets/avatar-9.png";

const testimonials = [
  {
    text: "Implementing this Patient Management System has greatly improved our clinic's efficiency. Appointments are seamlessly managed!",
    imageSrc: avatar1,
    name: "Dr. Emily Watson",
    username: "@drwatson",
  },
  {
    text: "This tool has reduced our administrative workload significantly. We can now focus more on providing quality patient care.",
    imageSrc: avatar2,
    name: "Nurse James Miller",
    username: "@nursejmiller",
  },
  {
    text: "Managing patient records and accessing patient histories has never been this easy. It's a game-changer for our hospital.",
    imageSrc: avatar3,
    name: "Dr. Olivia Turner",
    username: "@drturnerolivia",
  },
  {
    text: "I love how intuitive the system is. Even the non-tech staff picked it up quickly!",
    imageSrc: avatar4,
    name: "Laura Hernandez",
    username: "@laurahernandez",
  },
  {
    text: "The reporting features have made it so much easier to track patient outcomes and improve overall care quality.",
    imageSrc: avatar5,
    name: "Dr. Michael Brown",
    username: "@drmichaelbrown",
  },
  {
    text: "Patient data is well-organized and secure. We've streamlined many of our hospital operations thanks to this system.",
    imageSrc: avatar6,
    name: "Nurse Sarah Lee",
    username: "@nursarahlee",
  },
  {
    text: "Tracking patient visits, lab results, and prescriptions in one place has saved us so much time.",
    imageSrc: avatar7,
    name: "Dr. John Williams",
    username: "@drwilliams",
  },
  {
    text: "We were able to integrate this system seamlessly with our existing hospital software. It’s extremely flexible.",
    imageSrc: avatar8,
    name: "IT Specialist Karen Thompson",
    username: "@karen_it",
  },
  {
    text: "Our patient satisfaction scores have gone up since implementing this system. Patients love the online appointment booking feature.",
    imageSrc: avatar9,
    name: "Dr. Anna Roberts",
    username: "@annaroberts",
  },
];

export const Testimonials = () => {
  const testimonialsColumnOne = testimonials.slice(0, 3);
  const testimonialsColumnSecond = testimonials.slice(3, 6);
  const testimonialsColumnThird = testimonials.slice(6, 9);
  return (
    <section id="testimonials" className="bg-white px-5 lg:pb-[96px]">
      <Heading
        tagTitle="    "
        heading="What our healthcare professionals say"
        subHeading="From improved patient management to streamlined processes, our system has become indispensable to healthcare providers worldwide."
      />
      <div className="h-[750px] flex flex-row gap-6 mt-10 justify-center [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] overflow-hidden">
        <TestimonialCardColumn
          movementDuration={15}
          testimonials={testimonialsColumnOne}
        />
        <TestimonialCardColumn
          movementDuration={19}
          className="hidden md:block"
          testimonials={testimonialsColumnSecond}
        />
        <TestimonialCardColumn
          movementDuration={17}
          className="hidden lg:block"
          testimonials={testimonialsColumnThird}
        />
      </div>
    </section>
  );
};
