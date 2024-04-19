import React from "react";
import Image from "next/image";
import StoryBG from "../assets/endlessbgg.svg";
import StoryBook from "../assets/man.svg";
import StoryR from "../assets/StoryRes.svg";
import GIF from "../assets/story.gif";
import Link from "next/link";

const EndlessStory = () => {
  return (
   <>
    {/* <section className="story relative h-screen flex flex-col md:flex-row">
      <div className=" relative flex-1 h-1/2 md:h-full md:hidden lg:hidden">
        <Image
          src={StoryBook}
          alt="Reading Stories"
          layout="fill"
          objectFit="cover"
          className=" m-0 p-0 "
        />
      </div>

      <div className="storybg xl:h-full md:h-full relative flex-1 ">
        <Image
          src={StoryBG}
          alt="Endless Story Image"
          layout="fill"
          objectFit="cover"
          className="m-0 p-0"
        />
        

        <div className="absolute endlesstext ">
          <div className="endless font-poppins">Endless Stories</div>
          <div className="endless-content font-poppins">
            Inspire <span>creativity</span> in kids and foster interactive,
            educational moments for families.
          </div>

          <div className="flex ebutton">
          <Link href="https://stories.thesimpleai.com" target="_blank">
            <button className=" ebutton1  text-white rounded-md mr-4 cursor-pointer">
              Try For Free
            </button>
            </Link>
            <Link href="https://stories.thesimpleai.com/#how" target="_blank">
            <button className="ebutton2 text-white rounded-md cursor-pointer">
              Learn More
            </button>
            </Link>
          </div>
          
        </div>
      </div>
      <div className="stories relative flex-1 h-1/2 md:h-full">
        <Image
          src={StoryBook}
          alt="Reading Stories"
          layout="fill"
          objectFit="cover"
          className=" m-0 p-0"
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="relative">
          <Image
            src={GIF}
            alt="Story GIF"
            width={240}
            height={406}
            className="gif"
          />
        </div>
      </div>
    </section> */}


  
    <section className="story relative h-screen flex flex-col md:flex-row">
      <div className=" relative flex-1 h-1/2 md:h-full md:hidden lg:hidden">
        <Image
          src={StoryBook}
          alt="Reading Stories"
          layout="fill"
          objectFit="cover"
          className=" m-0 p-0 "
        />
      </div>

      <div className="storybg xl:h-full md:h-full relative flex-1 bg-blue-700" >
        <Image
          src={StoryBG}
          alt="Endless Story Image"
          layout="fill"
          objectFit="cover"
          className="m-0 p-0 lg:block hidden"
        />

<div className="absolute endless-text lg:block hidden " style={{ position: "relative", zIndex: 1 }}>
  <div className="endless font-poppins ">Endless Stories</div>
  <div className="endless-content font-montserrat">
    Inspire <span>creativity</span> in kids and foster interactive,
    educational moments for families.
  </div>
  <div className="flex ebutton">
    <Link href="https://stories.thesimpleai.com" target="_self">
    <button className="ebutton1 text-white rounded-md mr-4">
      Try For Free
    </button>
    </Link>
    <Link href="https://stories.thesimpleai.com/#how" target="_self">
    <button className="ebutton2 text-white rounded-md">
      Learn More
    </button>
    </Link>
    
  </div>
</div>
<div className="absolute lg:hidden block " style={{ position: "relative", zIndex: 1 }}>
  <div className="endless-mobile font-poppins text-center ">Endless Stories</div>
  <div className="endless-contentmob font-poppins text-center mx-8 xs:mx-4">
    Inspire <span>creativity</span> in kids and foster interactive,
    educational moments for families.
  </div>
  <div className="flex ebutton-mob justify-center">
    <Link href="https://stories.thesimpleai.com" target="_self">
    <button className="ebutton1 text-white rounded-md mr-4">
      Try For Free
    </button>
    </Link>
    <Link href="https://stories.thesimpleai.com/#how" target="_self">
    <button className="ebutton2 text-white rounded-md">
      Learn More
    </button>
    </Link>
    
  </div>
</div>
      </div>
      <div className="stories relative flex-1 h-1/2 md:h-full">
        <Image
          src={StoryBook}
          alt="Reading Stories"
          layout="fill"
          objectFit="cover"
          className=" m-0 p-0"
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="relative">
          <Image
            src={GIF}
            alt="Story GIF"
            width={240}
            height={406}
            className="gif"
          />
        </div>
      </div>
    </section>
   </>
  );
};



export default EndlessStory;
