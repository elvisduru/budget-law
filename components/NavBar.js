import Image from 'next/image'
import Link from 'next/link'
import useToggle from '../hooks/useToggle'
import Button from './Button'
import tw, { css } from 'twin.macro'
import { useEffect, useRef } from 'react'

export default function NavBar() {
  const [openNav, toggleOpenNav] = useToggle()
  const navBarEl = useRef(null)

  const handleScroll = () => {
    if (window.scrollY > navBarEl.current.offsetHeight) {
      navBarEl.current.style.backgroundColor = '#1E2E3E'
    } else {
      navBarEl.current.style.backgroundColor = 'transparent'
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const NavBtn = ({ toggleNav }) => (
    <div
      onClick={toggleNav}
      tw="z-50 flex flex-col items-end space-y-2 md:hidden"
    >
      <div tw="w-8 h-0.5 bg-white"></div>
      <div tw="w-4 h-0.5 bg-white"></div>
    </div>
  )

  return (
    <nav
      ref={navBarEl}
      tw="fixed z-10 w-screen top-0 flex flex-col justify-between md:(flex-row items-center)  h-20 bg-primary md:bg-transparent"
    >
      <div tw="px-4 flex justify-between items-center md:pl-16">
        <Image
          src="/images/logo.svg"
          alt="Budget law logo"
          width="200"
          height="80"
          objectFit="contain"
        />
        <NavBtn toggleNav={toggleOpenNav} />
      </div>
      <ul
        css={[
          tw`flex flex-col space-y-6 pt-8 pl-8 text-xl text-white text-opacity-80 bg-primary md:(flex-row static space-x-8 justify-between items-center px-16 space-y-0 py-0 text-sm w-1/2 translate-x-0)`,
          tw`transition-transform transform -translate-x-full ease-in-out duration-300`,
          tw`z-30 fixed w-full h-full`,
          openNav && tw`translate-x-0`,
        ]}
      >
        <li>
          <Link href="/#more">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/#services">
            <a>Our Services</a>
          </Link>
        </li>
        <li>
          <Link href="/#clients">
            <a>Our Clients</a>
          </Link>
        </li>
        <li>
          <Link href="/#">
            <a>News</a>
          </Link>
        </li>
        <li>
          <Link href="/#contact">
            <Button isPrimary>FREE CONSULTATION</Button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
