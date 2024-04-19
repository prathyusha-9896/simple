import React from "react";
import Image from "next/image";
import BannerBG from "../assets/Banner.svg";
import Mic from "../assets/mic.svg";
import Article from "../assets/article.svg"
import Notes from "../assets/notes.svg"
import Grammar from "../assets/grammar.svg"
import Save from "../assets/save.svg"

const Banner = () => {
  return (
    <section className="">
      <div
        className="banner w-full h-full relative "
        style={{ paddingBottom: "35%" }}
      >
        <Image
          src={BannerBG}
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
          className="bimage"
        />

      </div>

      <div className="banner-container text-center">
        <h3 className="font-poppins">Why Simple AI?</h3>

        <Image src={Mic} alt="Mic" width={40} height={40} className="" />
        <div className="element">
          <h4 className="font-poppins">Transcribe voice Story</h4>
          <h5 className="font-poppins">with human-level accuracy</h5>
        </div>
        <Image src={Article} alt="Mic" width={40} height={40} className="" />
        <div className="element">
          <h4 className="font-poppins">Reorganize your scattered</h4>
          <h5 className="font-poppins">thoughts into coherent article outlines</h5>
        </div>
        <Image src={Notes} alt="Mic" width={40} height={40} className="" />
        <div className="element">
       <h4 className="font-poppins"> List key takeaways and action</h4>
       <h5 className="font-poppins">items from your meeting notes</h5>
        </div>
        <Image src={Grammar} alt="Mic" width={40} height={40} className="" />
        <div className="element">
          <h4 className="font-poppins">Fix grammar, spelling,</h4>
          <h5 className="font-poppins">and improve your writing</h5>
        </div>
        <Image src={Save} alt="Mic" width={40} height={40} className="" />
        <div className="element">
          <h4 className="font-poppins">Save your own</h4>
          <h5 className="font-poppins">custom prompts</h5>
        </div>
      </div>
    </section>
  );
};

export default Banner;
