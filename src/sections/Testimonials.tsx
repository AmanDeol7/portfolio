import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import test from "node:test";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import grainImage from "../assets/images/grain.jpg"
import {Card} from "../components/Card";

const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return <div className="container mt-[18vh]">
    <SectionHeader title="Testimonials" eyebrow="What Clients Say" description="Here's what some of my clients have to say about working with me." />
    
    {/* <div className="">
      {testimonials.map((testimonial, index) => {
        return (
          <div key={index} className="bg-gray-800 rounded-3xl p-6 relative mb-4 overflow-hidden z-0">
            <div className="absolute inset-0  opacity-5 -z-10" style={{backgroundImage:`url(${grainImage.src})`}}></div>
            <Image src={testimonial.avatar} alt="image"/>
            <div>{testimonial.name}</div>
            <div>{testimonial.position}</div>
            <p>{testimonial.text}</p>


          </div>

        )
      })}

    </div> */}
  <Card />
  </div>;
};
