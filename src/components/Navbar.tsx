/* eslint-disable  @typescript-eslint/no-non-null-assertion */

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";
import { CiMenuFries } from 'react-icons/ci'
import { AiOutlineClose } from 'react-icons/ai'
import rs from '../../public/images/rs.png'
import en from '../../public/images/en.jpg'

const Navbar = () => {
  const { locales } = useRouter();
  console.log(typeof(locales))
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="max-w-screen-xl my-0 mx-auto">
        <ul className="hidden sm:flex items-center justify-between pt-12">
          <li>
            <Link href="#activities-section">
              <FormattedMessage id="page.home.navbar.link.activities" />
            </Link>
          </li>
          <li>
            <Link href="#accomodation-section">
              <FormattedMessage id="page.home.navbar.link.accomodation" />
            </Link>
          </li>
          <li>
            <Link href="#events-section">
              <FormattedMessage id="page.home.navbar.link.events" />
            </Link>
          </li>
          <li>
            <Link href="#contact-section">
              <FormattedMessage id="page.home.navbar.link.contact" />
            </Link>
          </li>
          <div className="flex">
            <li className="flex bg-transparent">
              {[...locales!].sort().map((locale) => (
                locale === 'en' ? <><Link key={locale} href="/" className="w-[35px] h-[40px] bg-transparent overflow-y-hidden mr-[2rem]" locale={locale}><Image src={en} width={80} height={30} alt="" /></Link></> : 
                <><Link key={locale} href="/" className="w-[35px] h-[40px] bg-transparent overflow-y-hidden"  locale={locale}><Image src={rs} width={80} height={25} alt=""  /></Link></>
              ))}
            </li>
          </div>
        </ul>
        <div className="text-white text-[4rem] flex sm:hidden justify-between z-10 relative font-light" onClick={()=>setIsOpen(!isOpen)} ><div></div>{isOpen ? <AiOutlineClose />:<CiMenuFries />}</div>
      </nav>

      <div className={`${isOpen ? 'absolute':'hidden'} top-0 w-full h-full flex flex-col justify-center items-center overflow-x-hidden`}>
        <ul className="flex flex-col items-center sm:hidden pt-[6rem] py-6 bg-black w-full h-full">
            <li>
              <Link href="#activities-section" className="bg-transparent mb-[3rem] hover:bg-[#5A5A5A]">
                <FormattedMessage id="page.home.navbar.link.activities" />
              </Link>
            </li>
            <li>
              <Link href="#accomodation-section" className="bg-transparent mb-[3rem] hover:bg-[#5A5A5A]">
                <FormattedMessage id="page.home.navbar.link.accomodation" />
              </Link>
            </li>
            <li>
              <Link href="#events-section" className="bg-transparent mb-[3rem] hover:bg-[#5A5A5A]">
                <FormattedMessage id="page.home.navbar.link.events" />
              </Link>
            </li>
            <li>
              <Link href="#contact-section" className="bg-transparent mb-[3rem] hover:bg-[#5A5A5A]">
                <FormattedMessage id="page.home.navbar.link.contact" />
              </Link>
            </li>
            <div className="flex">
            <li className="flex bg-transparent hover:bg-transparent">
              {[...locales!].sort().map((locale) => (
                locale === 'en' ? <><Link key={locale} href="/" className="w-[37px] xl:w-[37px] h-[20px] xl:h-[8px] bg-transparent overflow-y-hidden mr-[2rem]" locale={locale}><Image src={en} width={37} height={8} alt="" /></Link></> : 
                <><Link key={locale} href="/" className="w-[37px] xl:w-[37px] h-[20px] xl:h-[8px] bg-transparent overflow-y-hidden"  locale={locale}><Image src={rs} width={37} height={8} alt="" /></Link></>
              ))}
            </li>
          </div>
          </ul>
      </div>
    </>
  );
};

export default Navbar;
