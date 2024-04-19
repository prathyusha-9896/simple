// import Hero from '@/components/Hero' 
import Image from 'next/image' 
import Banner from '@/components/Banner' 
import Contact from '../components/Contact' 
import EndlessStory from '@/components/EndlessStory' 
import Simplemail from '@/components/Simplemail' 
import Hero from '@/components/Hero' 
import SlideData from '@/components/SlideData' 
import Head from 'next/head' 
export const metadata = { 
  title: 'Simple AI', 
  description: 'Description of my website', 
}; 
 
export default function Page() { 
  return ( 
    <> 
     
      <Hero /> 
    </> 
  ); 
}
