import Button from '../components/Button'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

import Link from 'next/link'
import Packages from '../components/Packages'

const Registrations = () => {
  return (
    <div>
      <NavBar />
      <section tw="h-screen bg-no-repeat bg-bottom bg-cover background-image[linear-gradient(to bottom, rgba(29, 42, 55, 0.5), rgba(29, 42, 55, 0.6)) ,url('/images/registration.jpg')] text-white px-4 py-5 grid lg:grid-cols-2 items-center justify-center lg:(bg-top px-16)">
        <div tw="flex flex-col">
          <h1 tw="font-serif text-4xl lg:(text-6xl)">Legal Made Simple</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
            recusandae facere sit id a molestiae rerum placeat suscipit totam
            veniam.
          </p>
          <Link href="#content">
            <a>
              <Button tw="bg-accent text-black before:border-0 py-3 px-10 mt-10 self-start">
                Get Started
              </Button>
            </a>
          </Link>
        </div>
      </section>
      <section tw="bg-white py-10 pt-20 -mt-20" id="content">
        <Packages />
      </section>
      <Footer />
    </div>
  )
}

export default Registrations
