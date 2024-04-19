import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import kin from '@/assets/kin.png';
import hena from '@/assets/hena.png';
import praveen from '@/assets/praveen.png';
import amarjeet from '@/assets/amarjeet.png';
import karun from '@/assets/karun.png';
import dhaval from '@/assets/Dhaval.png';
import gaurav from '@/assets/Gaurav.png'
import nadra from '@/assets/Nadra.png'
import lucita from '@/assets/Lucita.png'
import sawal from '@/assets/Sawal.png'
import lakshmi from '@/assets/MahaLakshmi.png'
import vikrant from '@/assets/vikrant.png';
import pra from '@/assets/pra.jpg';
import sohail from '@/assets/sohail.png';
import manu from '@/assets/manu.png';
import prabakar from '@/assets/prabakar.png';
import sonu from '@/assets/sonu.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Footer from '@/components/Footer';
import HeaderMobile from '@/components/HeaderMobile';

const Aboutus = () => {
  const [visibleSlides, setVisibleSlides] = useState(3);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 
    }
  };

  const customNext = () => {
    const totalItems = 18;
    if(visibleSlides + 3 <= totalItems) {
      setVisibleSlides(visibleSlides+3);
    } 
  };

  const customPrevious = () => {
    if(visibleSlides - 3 >= 3){
      setVisibleSlides(visibleSlides -3);
    }
  };

  return (
    <>
      <div className="about">
        <div className="lg:block sm:hidden xs:hidden pt-12">
          <Header />
        </div>
        <div className="lg:hidden sm:block xs:block pt-12">
          <HeaderMobile/>
        </div>

        <div className="about-text ">
          <h1>Simple AI Enterprise</h1>
          <h4>Empowering AI Application Specialists</h4>
          <div className="about-content-title">
            <h3>
              What motivates our behavior <br></br>and actions?
            </h3>
          </div>
          <div className="about-content">
            <p>
              At Simple AI, we strongly believe in the power of understanding to
              drive better decision-making. We recognize that involving those
              closest to the challenges AI systems aim to solve leads to
              improved outcomes. With this in mind, we have developed a product
              that empowers individuals to see, describe, and comprehend AI
              systems using natural language.
            </p>
            <br></br>
            <br></br>
            <p>
              Our easy-to-use AI tools provide clear insights into AI systems,
              allowing users to validate and correct those insights. This not
              only generates a wealth of new data but also enhances predictive
              capabilities. We are taking the human-AI relationship to new
              heights, combining understanding and performance for optimal
              results.
            </p>
            <br></br>
            <br></br>
            <p>
              If you share our passion for unlocking the true potential of AI,
              we invite you to connect with us. This is an exciting era for AI,
              and we believe in building AI that people can trust. It goes
              beyond being responsible and ethical - it is about fostering good
              business practices and shaping the future of intelligence. Join us
              in this remarkable AI journey.
            </p>
          </div>
        </div>
      </div>
      <div className="h-[945px]">
        <div className="team-heading">
          <h1>Our Team</h1>
          <h3>Meet the team transforming our AI relationship.</h3>
        </div>
        <div className='lg:mx-24 sm:mx-0 mt-[108px] '>
        <Carousel responsive={responsive}
        additionalTransfrom={0}
        arrows
        infinite
        autoPlay={false}
        customButtonGroup={<div />}
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        showDots={false}
        slidesToSlide={3}
        swipeable
        draggable
        className='h-[455px] '>
          <div>
            <div className='flex flex-col items-center justify-center pl-[20px]'>
              <Image src={kin} alt='' />
              <div className='pt-5 text-black text-center font-poppins text-lg font-medium leading-normal'>Kin Cheung</div>
              <div className="text-gray-700 text-center font-poppins text-lg font-medium leading-normal">Founder </div>
              <div className="w-[240px] h-[63px] pt-4 text-gray-700 text-center font-poppins text-base font-medium leading-normal">Founded 4 Successful Companies Co-founder of a Multimillion-dollar Company</div>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center justify-center'>
              <Image src={hena} alt='' />
              <div className='pt-5 text-black text-center font-poppins text-lg font-medium leading-normal'>Heena Sinha</div>
              <div className="text-gray-700 text-center font-poppins text-lg font-medium leading-normal">Co-Founder </div>
              <div className="w-[197px] h-[42px] pt-4 text-gray-700 text-center font-poppins text-base font-medium leading-normal">Co-founder of a Multimillion-dollar Company</div>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center justify-center pr-[20px]'>
              <Image src={praveen} alt='' />
              <div className='pt-5 text-black text-center font-poppins text-lg font-medium leading-normal'>Praveen Dommalapati</div>
              <div className="w-[224px] h-[63px] pt-4 text-gray-700 text-center font-poppins text-base font-medium leading-normal">Product Manager</div>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center justify-center rounded-full pl-[20px]'>
              <Image src={amarjeet} alt='' />
              <div className='pt-5 text-black text-center font-poppins text-lg font-medium leading-normal'>Amarjeet Sandhu</div>
              <div className="w-[224px] h-[63px] pt-4 text-gray-700 text-center font-poppins text-base font-medium leading-normal">Human Resource Manager </div>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center justify-center'>
              <Image src={karun} alt='' />
              <div className='pt-5 text-black text-center font-poppins text-lg font-medium leading-normal'>Karun Kumar</div>
              <div className="w-[224px] h-[63px] pt-4 text-gray-700 text-center font-poppins text-base font-medium leading-normal">Senior Software Developer</div>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center justify-center pr-[40px]'>
              <Image src={dhaval} alt='' />
              <div className='pt-5 text-black text-center font-poppins text-lg font-medium leading-normal'>Dhaval Vaja</div>
              <div className="w-[224px] h-[63px] pt-4 text-gray-700 text-center font-poppins text-base font-medium leading-normal">UX/UI Designer</div>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center justify-center pl-[40px]'>
              <Image src={vikrant} alt='' />
              <div className='pt-5 text-black text-center font-poppins text-lg font-medium leading-normal'>Vikrant Singh</div>
              <div className="w-[224px] h-[63px] pt-4 text-gray-700 text-center font-poppins text-base font-medium leading-normal">Web Developer</div>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center justify-center'>
              <Image className='w-[255px] h-[255px] rounded-full' src={pra} alt='' />
              <div className='pt-5 text-black text-center font-poppins text-lg font-medium leading-normal'>Prathyusha Ponnaganti</div>
              <div className="w-[224px] h-[63px] pt-4 text-gray-700 text-center font-poppins text-base font-medium leading-normal">Web Developer</div>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center justify-center pr-[20px]'>
              <Image src={prabakar} alt='' />
              <div className='pt-5 text-black text-center font-poppins text-lg font-medium leading-normal'>Prabhakar Singh</div>
              <div className="w-[224px] h-[63px] pt-4 text-gray-700 text-center font-poppins text-base font-medium leading-normal">Web Developer</div>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center justify-center pl-[20px]'>
              <Image src={manu} alt='' />
              <div className='pt-5 text-black text-center font-poppins text-lg font-medium leading-normal'>Manu Goel</div>
              <div className="w-[224px] h-[63px] pt-4 text-gray-700 text-center font-poppins text-base font-medium leading-normal">Web Developer</div>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center justify-center'>
              <Image src={sohail} alt='' />
              <div className='pt-5 text-black text-center font-poppins text-lg font-medium leading-normal'>Sohail Khan</div>
              <div className="w-[224px] h-[63px] pt-4 text-gray-700 text-center font-poppins text-base font-medium leading-normal">Web Developer</div>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center justify-center pr-[20px]'>
              <Image src={sonu} alt='' />
              <div className='pt-5 text-black text-center font-poppins text-lg font-medium leading-normal'>Sonu Kumari</div>
              <div className="w-[224px] h-[63px] pt-4 text-gray-700 text-center font-poppins text-base font-medium leading-normal">UX/UI Designer</div>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center justify-center pl-[20px]'>
              <Image src={gaurav} alt='' />
              <div className='pt-5 text-black text-center font-poppins text-lg font-medium leading-normal'>Gaurav Pardhi</div>
              <div className="w-[224px] h-[63px] pt-4 text-gray-700 text-center font-poppins text-base font-medium leading-normal">UX/UI Designer</div>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center justify-center'>
              <Image src={nadra} alt='' />
              <div className='pt-5 text-black text-center font-poppins text-lg font-medium leading-normal'>Nadra Hoda</div>
              <div className="w-[224px] h-[63px] pt-4 text-gray-700 text-center font-poppins text-base font-medium leading-normal">Web Developer</div>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center justify-center pr-[20px]'>
              <Image src={lucita} alt='' />
              <div className='pt-5 text-black text-center font-poppins text-lg font-medium leading-normal'>Lucita Pagado</div>
              <div className="w-[224px] h-[63px] pt-4 text-gray-700 text-center font-poppins text-base font-medium leading-normal">Social Media Manager</div>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center justify-center '>
              <Image src={sawal} alt='' />
              <div className='pt-5 text-black text-center font-poppins text-lg font-medium leading-normal'>Sawal Tandon</div>
              <div className="w-[224px] h-[63px] pt-4 text-gray-700 text-center font-poppins text-base font-medium leading-normal">Quality Assurance Tester</div>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center justify-center '>
              <Image src={lakshmi} alt='' />
              <div className='pt-5 text-black text-center font-poppins text-lg font-medium leading-normal'>Maha Lakshmi K</div>
              <div className="w-[224px] h-[63px] pt-4 text-gray-700 text-center font-poppins text-base font-medium leading-normal">Quality Assurance Tester</div>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center justify-center pt-4'>
              {/* <Image src={} alt='' /> */}
              <div className='pt-5 text-black text-center font-poppins text-lg font-medium leading-normal'></div>
              <div className="w-[224px] h-[63px] pt-4 text-gray-700 text-center font-poppins text-base font-medium leading-normal"></div>
            </div>
          </div>
        </Carousel>
        
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Aboutus;
