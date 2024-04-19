import React from "react";
import Image from "next/image";
import bgcontact from '@/assets/bgcontact.png'
import youtube from "../assets/youtube.png"
import instagram from '@/assets/instagram.png'
import linkedin from "@/assets/linkedin.png"
import twitter from "@/assets/twitter.png"
import Link from 'next/link'
const contact = () => {
  return (
    <div className=" bg-gray-200 contact relative">
      <div className="w-full h-full absolute inset-0 contactbg">
        <Image
          src={bgcontact}
          alt="Contact"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-white max-w-lg text-center pt-10 contacttexts">
          <p className="lg:text-4xl text-2xl lg:px-0 px-14  font-normal font-poppins">Drop us a message and we will get back to you.</p>
        </div>
        <div className="pt-12 flex">
          <form action="#" method="post" id="myForm" className="text-white ">
            <label htmlFor="" className="">
              <input
                type="email"
                name=""
                placeholder="Your Email"
                required
                className="inputw mb-7 md:mb-7 sm:mb-0 xs:mb-0 w-[320px] lg:w-[684px]" 
              />
              <span></span>
            </label>
            <br />
            
            <label htmlFor="">
              <input
                type="text"
                name=""
                required
                className="inputw mb-7 md:mb-7 sm:mb-0 xs:mb-0 w-[320px] lg:w-[684px]"
                placeholder="Name"
              />
              <span></span>
            </label>
            <br />
            
            <label htmlFor="">
              <textarea
                rows={6}
                cols={40}
                className="inputm resize-none inputw sm:mb-0 xs:mb-0 w-[320px] lg:w-[684px]"
                placeholder="
            Message"
                required
              />
              <br /> <br />
            </label>
            <button
              type="submit"
              value="Send
            "
              className="cbutton"
            >
              GET IN TOUCH
            </button>
          </form>
        </div>

        <div className="text-white  text-center pt-8 clinks">
          <Link href='/' className="lg:text-base text-[12px] lg:pr-14 pr-4">Home</Link>
          <Link href='/aboutus' className="lg:text-base text-[12px] lg:pr-14 pr-4">About Us</Link>
          <Link href='/contact' className="lg:text-base text-[12px] lg:pr-14 pr-4">Contact Us</Link>
          {/*<Link href='/privacy' className="lg:text-base text-[12px]">Privacy Policy</Link>*/}
        </div>

        <div className="pt-6 text-center contacttextbox text-white">
          <p className="text-md contacttext font-poppins">
            Join us on this transformative journey as we harness the power of AI
            to simplify your life and unlock your true potential.At Simple AI,
            we believe that technology should empower, uplift,and enhance every
            aspect of your existence.
          </p>
        </div>
        <div className=" flex justify-center items-center space-x-4 pt-8">
          <Link
            href="https://www.youtube.com/@simpleai2403"
            target="_self"
            rel="noopener noreferrer"
          >
            <Image
              src={youtube}
              alt="Youtube"
              className="w-6 h-6"
            />
          </Link>
          <Link
            href="https://twitter.com/"
            target="_self"
            rel="noopener noreferrer"
          >
            <Image src={twitter} alt="Twitter" className="w-6 h-6" />
          </Link>
          <Link
            href="https://www.instagram.com/"
            target="_self"
            rel="noopener noreferrer"
          >
            <Image
              src={instagram}
              alt="Instagram"
              className="w-6 h-6"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/company/simple-ai-powered/"
            target="_self"
            rel="noopener noreferrer"
          >
            <Image
              src={linkedin}
              alt="LinkedIn"
              className="w-6 h-6"
            />
          </Link>
        </div>

        <div className="copyright text-center text-white pt-5 font-poppins" >
          <p>© Copyright 2023 - Simple AI</p>
        </div>
      </div>
    </div>
  );
};

export default contact;