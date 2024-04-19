
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import logom from '@/assets/logom.png';
import logo from '@/assets/logo.png';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

import HeaderMobile from "./HeaderMobile";
import Header from "./Header";
const Privacy = () =>{
    const [openmenu, setOpenmenu] = useState(false);
    const [hideOnScroll, setHideOnScroll] = useState(false);
    const menuRef = useRef<HTMLElement | null>(null);

  const router = useRouter();
  const pathname = usePathname();
  const searchparams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(pathname);

  const [prevScroll, setPrevScroll] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const visible = prevScroll > currentScroll;

      setVisible(visible);
      setPrevScroll(currentScroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScroll, visible]);

  const headerStyle = {
    transition: 'top 0.3s',
    top: visible ? '0' : '-100px'
  };

  useEffect(() => {
    const handleClick = (e: any) => {
      if (openmenu) {
        setOpenmenu(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [openmenu]);

  useEffect(() => {
    const url = `${pathname}?${searchparams}`
    console.log(url)
  }, [pathname, searchparams]);
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
          setOpenmenu(false);
        }
      };
  
      const handleScroll = () => {
        setHideOnScroll(window.pageYOffset > 50);
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return(
        <>
                  <div className="lg:block sm:hidden xs:hidden pt-12">
                  <header className="fixed top-0 left-0 right-0 bg-transparent px-8 mt-4 lg:block sm:hidden xs:hidden max-w-full" style={headerStyle}>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <button>
                <Image src={logo} alt="Logo" className="w-[66px] h-[66px]" />
              </button>
            </Link>
          </div>
          <nav className="text-lg flex items-center">
            <Link href="/">
              <button
                className={`${
                  currentPage === '/' ? 'text-white' : 'text-[#999C9C]'
                } hover:text-[#0C0D17] px-4 py-2 rounded-md`}
              >
                Home
              </button>
            </Link>
            <Link href="/aboutus">
              <button
                className={`${
                  currentPage === '/aboutus' ? 'text-white' : 'text-[#999C9C]'
                } hover:text-[#0C0D17] px-4 py-2 rounded-md`}
              >
                About Us
              </button>
            </Link>
            <Link href="/contact">
              <button
                className={`${
                  currentPage === '/contact' ? 'text-white' : 'text-[#999C9C]'
                } hover:text-[#0C0D17] px-4 py-2 rounded-md`}
              >
                Contact
              </button>
            </Link>
            <Link href="/privacy">
              <button
                className={`${
                  currentPage === '/contact' ? 'text-white' : 'text-[#0C0D17]'
                } hover:text-[#0C0D17] px-4 py-2 rounded-md`}
              >
                Privacy Policy
              </button>
            </Link>
          </nav>
        </div>
      </header>
          </div>
          <div className="lg:hidden sm:block xs:block pt-12 ">
          <header ref={menuRef} className={`fixed top-0 left-0 right-0 lg:hidden sm:block ${openmenu ? 'z-20' : 'z-10'} ${hideOnScroll ? 'hidden' : ''}`}>
      <div className="flex justify-between items-center px-8 pt-3">
        <div className="flex items-center">
          <Link href="/">
            <button>
              <Image src={logom} alt="Logo" className="w-[38px] h-[38px]" />
            </button>
          </Link>
        </div>
        <div className="flex items-center">
          <button onClick={() => setOpenmenu(!openmenu)} className="text-3xl cursor-pointer">
            <GiHamburgerMenu className="fill-white w-[20px] h-[14px]" name={openmenu ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
      {openmenu && (
        <ul className="fixed top-[0px] bg-white w-[80%] h-[calc(100vh-76px)] z-10 p-4 shadow-md overflow-y-auto">
          <li className="my-4 hover:border-solid hover:border-b hover:border-[#0D0037] hover:shadow-sm hover:shadow-[#0D0037] p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="my-4 hover:border-solid hover:border-b hover:border-[#0D0037] hover:shadow-sm hover:shadow-[#0D0037] p-4">
            <Link href="/aboutus"><button>About us</button></Link>
          </li>
          <li className="my-4 hover:border-solid hover:border-b hover:border-[#0D0037] hover:shadow-sm hover:shadow-[#0D0037] p-4">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="my-4 hover:border-solid hover:border-b hover:border-[#0D0037] hover:shadow-sm hover:shadow-[#0D0037] p-4">
            <Link href="/privacy">Privacy Policy</Link>
          </li>
        </ul>
      )}
    </header>
          </div>

      <div className='items-center justify-center flex pt-14'>
        <div id="privacy" className=' text-[[#0C0D17]] text-2xl md:text-8xl lg:text-8xl font-semibold mb-8 md:mb-16 lg:mb-16'>Privacy Statement</div>
      </div>
      <div className='mx-4 md:mx:12 lg:mx-12 md:mb-56 lg:mb-56 mb-20'>
        <div className='w-full h-full  text-[#0C0D17]leading-relaxed font-sans'>
        <h1 className="md:text-6xl lg:text-6xl text-2xl py-6 text-[#0C0D17]">Privacy Notice</h1>
        <p className='text-sm md:text-2xl lg:text-2xl '>Last updated <span className='text-xl md:text-4xl lg:text-4xl'>October 14, 2022</span></p>
        <p className='text-sm md:text-2xl lg:text-2xl '>This privacy notice for EndlessStories (&apos;Company&apos;, &apos;we&apos;, &apos;us&apos;, or &apos;our&apos;,), describes how and why we might collect, store, use, and/or share (‘process‘) your information when you use our services</p>
        <p className='text-sm md:text-2xl lg:text-2xl '>(&apos;Services&apos;), such as when you:</p>
        <ul className=''>
          <li className='text-sm md:text-2xl lg:text-2xl '>* Visit our website at EndlessStories, or any website of ours that links to this privacy notice</li>
          <li className='text-sm md:text-2xl lg:text-2xl '>* Engage with us in other related ways, including any sales, marketing, or events</li>
        </ul>
        <p className='text-sm md:text-2xl lg:text-2xl '>Questions or concerns?ÊReading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at yiukins@gmail.com.</p>
                    <h1 id="key" className="text-xl md:text-4xl lg:text-4xl py-4">SUMMARY OF KEY POINTS</h1>

                    <p className='text-sm md:text-2xl lg:text-2xl '>This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for. You can also clickÊhereÊto go directly to our table of contents.</p>
                    <p className='text-sm md:text-2xl lg:text-2xl '>What personal information do we process? When you visit, use, or navigate our Services, we may process personal information depending on how you interact with EndlessStories and the Services, the choices you make, and the products and features you use. ClickÊhereÊto learn more.Do we process any sensitive personal information? We do not process sensitive personal information.</p>
                    <p className='text-sm md:text-2xl lg:text-2xl '>Do we receive any information from third parties? We do not receive any information from third parties.</p>
                    <p className='text-sm md:text-2xl lg:text-2xl '>How do we process your information? We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. ClickÊhereÊto learn more.In what situations and with which parties do we share personal information? We may share information in specific situations and with specific third parties. ClickÊhereÊto learn more.How do we keep your information safe? We have organisational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. ClickÊhereÊto learn more.</p>
                    <p className='text-sm md:text-2xl lg:text-2xl '>What are your rights? Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. ClickÊhereÊto learn more.</p>
                    <p className='text-sm md:text-2xl lg:text-2xl '>How do you exercise your rights? The easiest way to exercise your rights is by filling out our data subject request form available here, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</p>
                    <p className='text-sm md:text-2xl lg:text-2xl '>Want to learn more about what EndlessStories does with any information we collect? ClickÊhereÊto review the notice in full.</p>
                    <h1 id="table" className="text-xl md:text-4xl lg:text-4xl py-4">TABLE OF CONTENTS</h1>
                    <ol>
                        <li className='text-sm md:text-2xl lg:text-2xl'><a className=" hover:text-blue-600 dark:hover:bg-indigo-700" href="https://mysecondhome.com.au/EndlessStories-privacy-statement/#infocollect">1. WHAT INFORMATION DO WE COLLECT?</a></li>
                        <li className='text-sm md:text-2xl lg:text-2xl'><a className="hover:text-blue-600 dark:hover:bg-indigo-700" href="https://mysecondhome.com.au/EndlessStories-privacy-statement/#infouse">2. HOW DO WE PROCESS YOUR INFORMATION?</a></li>
                        <li className='text-sm md:text-2xl lg:text-2xl'> <a className="hover:text-blue-600 dark:hover:bg-indigo-700" href="https://mysecondhome.com.au/EndlessStories-privacy-statement/#legalbases">3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</a> </li>
                        <li className='text-sm md:text-2xl lg:text-2xl' > <a className="hover:text-blue-600 dark:hover:bg-indigo-700" href="https://mysecondhome.com.au/EndlessStories-privacy-statement/#whoshare">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a> </li>
                        <li className='text-sm md:text-2xl lg:text-2xl'> <a className="hover:text-blue-600 dark:hover:bg-indigo-700" href="https://mysecondhome.com.au/EndlessStories-privacy-statement/#inforetain">5. HOW LONG DO WE KEEP YOUR INFORMATION?</a> </li>
                        <li className='text-sm md:text-2xl lg:text-2xl'> <a className="hover:text-blue-600 dark:hover:bg-indigo-700" href="https://mysecondhome.com.au/EndlessStories-privacy-statement/#infosafe">6. HOW DO WE KEEP YOUR INFORMATION SAFE?</a> </li>
                        <li className='text-sm md:text-2xl lg:text-2xl'> <a className="hover:text-blue-600 dark:hover:bg-indigo-700" href="https://mysecondhome.com.au/EndlessStories-privacy-statement/#privacyrights">7. WHAT ARE YOUR PRIVACY RIGHTS?</a> </li>
                        <li className='text-sm md:text-2xl lg:text-2xl'> <a className="hover:text-blue-600 dark:hover:bg-indigo-700" href="https://mysecondhome.com.au/EndlessStories-privacy-statement/#DNT">8. CONTROLS FOR DO-NOT-TRACK FEATURES</a> </li>
                        <li className='text-sm md:text-2xl lg:text-2xl'> <a className="hover:text-blue-600 dark:hover:bg-indigo-700" href="https://mysecondhome.com.au/EndlessStories-privacy-statement/#caresidents">9. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</a> </li>
                        <li className='text-sm md:text-2xl lg:text-2xl'> <a className="hover:text-blue-600 dark:hover:bg-indigo-700" href="https://mysecondhome.com.au/EndlessStories-privacy-statement/#policyupdates">10. DO WE MAKE UPDATES TO THIS NOTICE?</a> </li>
                        <li className='text-sm md:text-2xl lg:text-2xl'> <a className="hover:text-blue-600 dark:hover:bg-indigo-700" href="https://mysecondhome.com.au/EndlessStories-privacy-statement/#contact">11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a> </li>
                        <li className='text-sm md:text-2xl lg:text-2xl'> <a className="hover:text-blue-600 dark:hover:bg-indigo-700" href="https://mysecondhome.com.au/EndlessStories-privacy-statement/#request">12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</a> </li>
                    </ol>

                    <h2 id="one" className="text-xl md:text-4xl lg:text-4xl py-4 ">1. WHAT INFORMATION DO WE COLLECT?</h2>
                    <p className='text-sm md:text-2xl lg:text-2xl'>Personal information you disclose to us</p>
                    <p className='text-sm md:text-2xl lg:text-2xl'>In Short:ÊWe collect personal information that you provide to us.</p>
                    <p className='text-sm md:text-2xl lg:text-2xl'>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
                    <p className='text-sm md:text-2xl lg:text-2xl'>Personal Information Provided by You. The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
                    <ul>
                        <li className='text-sm md:text-2xl lg:text-2xl'>names</li>
                        <li className='text-sm md:text-2xl lg:text-2xl'>email addresses</li>
                    </ul>
                    <p className='text-sm md:text-2xl lg:text-2xl'>Sensitive Information. We do not process sensitive information.</p>
                    <p className='text-sm md:text-2xl lg:text-2xl'>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>

                    <h2 id="two" className='text-xl md:text-4xl lg:text-4xl py-4'>2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
                    <p className='text-sm md:text-2xl lg:text-2xl'>In Short:ÊWe process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>
                    <p className='text-sm md:text-2xl lg:text-2xl'>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p>
                    <p className='text-sm md:text-2xl lg:text-2xl'>To save or protect an individual&apos;s vital interest. We may process your information when necessary to save or protect an individualÕs vital interest, such as to prevent harm.</p>
                    <h2 id="three" className='text-xl md:text-4xl lg:text-4xl py-4'>3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</h2>
                    <p className='text-sm md:text-2xl lg:text-2xl'>In Short:ÊWe only process your personal information when we believe it is necessary and we have a valid legal reason (i.e. legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfil our contractual obligations, to protect your rights, or to fulfil our legitimate business interests.If you are located in the EU or UK, this section applies to you.The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:</p>
                    <ul>
                        <li className='text-sm md:text-2xl lg:text-2xl'>Consent.ÊWe may process your information if you have given us permission (i.e. consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. <a href="https://mysecondhome.com.au/EndlessStories-privacy-statement/#withdrawconsent" className="hover:text-blue-600 dark:hover:bg-indigo-700" >ClickÊhere</a> Êto learn more.</li>
                        <li className='text-sm md:text-2xl lg:text-2xl'>Legal Obligations. We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.</li>
                        <li className='text-sm md:text-2xl lg:text-2xl'>Vital Interests. We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</li>
                    </ul>
                    <p className='text-sm md:text-2xl lg:text-2xl'>If you are located in Canada, this section applies to you.</p>
                    <p className='text-sm md:text-2xl lg:text-2xl'>We may process your information if you have given us specific permission (i.e. express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e. implied consent). You can withdraw your consent at any time. ClickÊhereÊto learn more.</p>
                    <p className='text-sm md:text-2xl lg:text-2xl'>In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:</p>  
                    <ul className='text-sm md:text-2xl lg:text-2xl'>
                        <li>* If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</li>
                        <li>* For investigations and fraud detection and prevention</li>
                        <li>* For business transactions provided certain conditions are met</li>
                        <li>* If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</li>
                        <li>* For identifying injured, ill, or deceased persons and communicating with next of kin</li>
                        <li>* If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse</li>
                        <li>* If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province</li>
                        <li>* If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records</li>
                        <li>* If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced</li>
                        <li>* If the collection is solely for journalistic, artistic, or literary purposes</li>
                        <li>* If the information is publicly available and is specified by the regulations</li>
                    </ul>
                    <h2 id="four" className='text-xl md:text-4xl lg:text-4xl py-4'>4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
                    <p className='text-sm md:text-2xl lg:text-2xl'>In Short:ÊWe may share information in specific situations described in this section and/or with the following third parties.</p>
                    <p className='text-sm md:text-2xl lg:text-2xl'>We may need to share your personal information in the following situations:</p>
                    <ul className='text-sm md:text-2xl lg:text-2xl'>
                        <li>* Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>

                    </ul>
                    <h2 id="five" className="text-xl md:text-4xl lg:text-4xl py-4">5. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
                    <div className='text-sm md:text-2xl lg:text-2xl'>
                    <p >In Short:ÊWe keep your information for as long as necessary to fulfil the purposes outlined in this privacy notice unless otherwise required by law.</p>
                    <p >We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than 1 year.</p>
                    <p >When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>
                    </div>


                    <h2 id="six" className="text-xl md:text-4xl lg:text-4xl py-4">6. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
                    <div className='text-sm md:text-2xl lg:text-2xl'>
                    <p >In Short:ÊWe aim to protect your personal information through a system of organisational and technical security measures.</p>
                    <p >We have implemented appropriate and reasonable technical and organisational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</p>
                    </div>
                    <h2 id="seven" className="text-xl md:text-4xl lg:text-4xl py-4">7. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
                    <div className='text-sm md:text-2xl lg:text-2xl'>
                    <p>In Short:ÊIn some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Canada, you have rights that allow you greater access to and control over your personal information.ÊYou may review, change, or terminate your account at any time.</p>
                    <p>In some regions (like the EEA, UK, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section <a href="https://mysecondhome.com.au/EndlessStories-privacy-statement/#contact" className="hover:text-blue-600 dark:hover:bg-indigo-700">‘HOW CAN YOU CONTACT US ABOUT THIS NOTICE?‘</a> below.</p>
                    <p> We will consider and act upon any request in accordance with applicable data protection laws.Ê</p>
                    <p>If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: <a className="hover:text-blue-600 dark:hover:bg-indigo-700" href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.">https://ec.europa.eu/justice<br></br>/data-protection/bodies/<br></br>authorities/index_en.htm.</a></p>
                    <p>If you are located in Switzerland, the contact details for the data protection authorities are available here: <a href="https://www.edoeb.admin.ch/edoeb/en/home.html." className="hover:text-blue-600 dark:hover:bg-indigo-700">https://www.edoeb.admin.<br></br>ch/edoeb/en/home.html.</a></p>
                    <p>Withdrawing your consent: If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section <a href="https://mysecondhome.com.au/EndlessStories-privacy-statement/#contact" className="hover:text-blue-600 dark:hover:bg-indigo-700">‘HOW CAN YOU CONTACT US ABOUT THIS NOTICE?‘</a> below.</p>
                    <p>However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</p>
                    <p>If you have questions or comments about your privacy rights, you may email us at Info@simplemail.ai.</p>
                    </div>


                    <h2 id="eight" className="text-xl md:text-4xl lg:text-4xl py-4">8. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
                    <p className='text-sm md:text-2xl lg:text-2xl'>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (‘DNT’) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognising and implementing DNT signals has been finalised. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.</p>

                    <h2 id="nine" className="text-xl md:text-4xl lg:text-4xl py-4">9. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
                    <div className='text-sm md:text-2xl lg:text-2xl'>
                    <p >In Short:ÊYes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</p>
                    <p >California Civil Code Section 1798.83, also known as the ‘Shine The Light’ law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.</p>
                    <p >If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g. backups, etc.).</p>
                    </div>

                    <h2 id="ten" className="text-xl md:text-4xl lg:text-4xl py-4">10. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
                    <p className='text-sm md:text-2xl lg:text-2xl'>In Short:ÊYes, we will update this notice as necessary to stay compliant with relevant laws.We may update this privacy notice from time to time. The updated version will be indicated by an updated ‘Revised’ date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</p>


                    <h2 id="eleven" className="text-xl md:text-4xl lg:text-4xl py-4">11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
                    <div className='text-sm md:text-2xl lg:text-2xl'>
                    <p >If you have questions or comments about this notice, you may email us at Info@simplemail.ai.Êor by post to:</p>
                    <p >EndlessStories</p>
                    <p >37 Heatherdale Rd</p>
                    <p >Ringwood , Victoria 3134</p>
                    <p >Australia</p>
                    </div>


                    <h2 id="twelve" className="text-xl md:text-4xl lg:text-4xl py-4">12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
                    <p className='text-sm md:text-2xl lg:text-2xl'>You have the right to request access to the personal information we collect from you, change that information, or delete it.ÊTo request to review, update, or delete your personal information, please submit a request form by <a href="https://app.termly.io/notify/7d1b7dc5-acaa-47ba-a852-3c53e2f467a8" className='hover:text-blue-600 dark:hover:bg-indigo-700'>clickingÊhere.</a></p>
        </div>
      </div>
        </>
    )
}


export default Privacy