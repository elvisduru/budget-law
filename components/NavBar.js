import Image from 'next/image'
import Link from 'next/link'
import useToggle from '../hooks/useToggle'
import Button from './Button'
import tw from 'twin.macro'
import { useCallback } from 'react'

export default function NavBar() {
  const [openNav, toggleOpenNav] = useToggle()

  const navBarEl = useCallback(node => {
    if (node !== null) {
      const handleScroll = () => {
        if (window.scrollY > node.getBoundingClientRect().height) {
          node.style.backgroundColor = '#1E2E3E'
        } else {
          node.style.backgroundColor = 'transparent'
        }
      }
      window.addEventListener('scroll', handleScroll)
    }
  }, [])

  const NavBtn = ({ toggleNav }) => (
    <div
      onClick={toggleNav}
      tw="z-50 flex flex-col items-end space-y-2 lg:hidden"
    >
      <div tw="w-8 h-0.5 bg-white"></div>
      <div tw="w-4 h-0.5 bg-white"></div>
    </div>
  )

  return (
    <nav
      ref={navBarEl}
      tw="fixed z-10 w-screen top-0 flex flex-col justify-between lg:(flex-row items-center)  h-20 bg-primary lg:bg-transparent"
    >
      <div tw="px-4 flex justify-between items-center lg:pl-16">
        <Link href="/#">
          <a>
            <Image
              src="/images/logo.svg"
              alt="Budget law logo"
              width="200"
              height="80"
              objectFit="contain"
            />
          </a>
        </Link>
        <NavBtn toggleNav={toggleOpenNav} />
      </div>
      <ul
        css={[
          tw`flex flex-col space-y-6 pt-8 pl-8 text-xl text-white text-opacity-80 bg-primary lg:(flex-row static space-x-8 justify-between items-center pr-16 space-y-0 py-0 text-xs w-1/2 translate-x-0)`,
          tw`transition-transform transform -translate-x-full ease-in-out duration-300`,
          tw`z-30 fixed w-full h-full`,
          openNav && tw`translate-x-0`,
          `
            & li:not(:last-of-type):hover {
              border-bottom: 1px solid white;
            }
          `,
        ]}
        onClick={toggleOpenNav}
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
        {/* <li>
          <Link href="/registrations">
            <a>Online Registration</a>
          </Link>
        </li> */}
        <li>
          <Link href="/#contact">
            <Button isPrimary>FREE CONSULTATION</Button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
