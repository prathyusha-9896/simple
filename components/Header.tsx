"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '@/assets/logo.png';

export default function Header() {
  const [openmenu, setOpenmenu] = useState(false);
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

  return (
    <>
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
                } hover:text-white px-4 py-2 rounded-md`}
              >
                Home
              </button>
            </Link>
            <Link href="/aboutus">
              <button
                className={`${
                  currentPage === '/aboutus' ? 'text-white' : 'text-[#999C9C]'
                } hover:text-white px-4 py-2 rounded-md`}
              >
                About Us
              </button>
            </Link>
            <Link href="/contact">
              <button
                className={`${
                  currentPage === '/contact' ? 'text-white' : 'text-[#999C9C]'
                } hover:text-white px-4 py-2 rounded-md`}
              >
                Contact
              </button>
            </Link>
            {/*<Link href="/privacy">
              <button
                className={`${
                  currentPage === '/contact' ? 'text-white' : 'text-[#999C9C]'
                } hover:text-white px-4 py-2 rounded-md`}
              >
                Privacy Policy
              </button>
              </Link>*/}
          </nav>
        </div>
      </header>
    </>
  );
}
