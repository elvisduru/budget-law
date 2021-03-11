import Button from '../components/Button'
import NavBar from '../components/NavBar'
import ServiceList from '../components/ServiceList'
import Clients from '../components/Clients'
import Link from 'next/link'
import ConsultForm from '../components/ConsultForm'
import Footer from '../components/Footer'
import { useMediaQuery } from '../hooks/useMediaQuery'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'

export default function App() {
  const isDesktop = useMediaQuery('(min-width: 800px)')
  return (
    <div>
      <NavBar />
      <section
        style={{
          backgroundImage: `${
            isDesktop
              ? `linear-gradient(to left, #1E2E3E 40%, transparent 40%), url('/images/hero-lg.jpg')`
              : `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.8)), url('/images/hero.jpg')`
          }`,
        }}
        tw="bg-primary bg-center bg-cover h-screen flex flex-col px-4 py-5 text-white"
      >
        <h1 tw="text-4xl leading-normal mt-auto md:(mb-auto ml-auto w-1/2 pr-4 text-7xl leading-tight)">
          <Fade cascade>
            A fresh &amp; inclusive approach to world class litigation
          </Fade>
        </h1>
        <p tw="text-white tracking-widest relative mt-10 text-xs text-opacity-60 uppercase md:(pl-7 text-sm)">
          <Link href="#more">
            <a>
              <span tw="text-lg absolute -top-1 animate-bounce w-6 h-6">
                &darr;
              </span>
              &nbsp;&nbsp;&nbsp; Discover more
            </a>
          </Link>
        </p>
      </section>
      <section
        id="more"
        tw="bg-primary text-white md:(pt-24 px-48 pb-80 grid grid-cols-1 grid-rows-2 relative)"
      >
        <div tw="px-12 py-10 text-sm text-white md:(px-0 py-4 w-1/3 text-base)">
          <Fade bottom>
            <p tw="md:(my-3)">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis nobis debitis vero consequuntur? Fuga unde doloribus
              dignissimos consequatur esse?
            </p>
            <p tw="md:(my-3)">
              Eos, perferendis dolorem. Praesentium similique sint minima
              voluptas non ducimus. Itaque!
            </p>
            <Link href="#contact">
              <a tw="md:hidden">
                <Button isPrimary tw="mt-5">
                  Get Free Consultation
                </Button>
              </a>
            </Link>
          </Fade>
        </div>
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url('/images/lawyers-walking.jpg')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: isDesktop ? 630 : 300,
          }}
          tw="w-full h-60 pt-16 md:(absolute -bottom-20 right-40 w-5/12)"
        >
          <h2 tw="w-3/4 ml-4 pl-4 border-l-2 border-accent mt-auto md:(text-6xl w-full leading-tight absolute -left-3/4 top-1/4)">
            <Fade cascade>
              We're the litigation specialists that can help you.
            </Fade>
          </h2>
        </div>
      </section>
      <section tw="bg-white p-6 pb-16 md:(px-48 pt-48 pb-0 grid grid-cols-12 grid-rows-2 gap-x-20)">
        <div tw="md:col-span-5">
          <Fade>
            <Image
              src="/images/angel.jpg"
              width={150}
              height={200}
              layout="responsive"
            />
          </Fade>
        </div>
        <h2 tw="my-6 text-black px-0 md:(col-span-7 text-6xl leading-tight place-self-center)">
          <Fade cascade>
            A tailored approach that puts the needs of our clients first.
          </Fade>
        </h2>
        <div tw="md:(col-span-6 pr-10 pt-12)">
          <Fade cascade>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              totam impedit inventore molestias laboriosam, illum veritatis unde
              numquam minus, alias dolores vitae labore earum necessitatibus?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              earum eaque amet harum veniam iusto facere debitis in, voluptatem
              laboriosam fugit pariatur quasi hic. Hic, nobis? Doloribus nulla
              expedita, commodi ipsam necessitatibus enim, consequuntur quisquam
              consectetur laborum illo quis molestias?
            </p>
          </Fade>
        </div>
        <div tw="md:(col-span-6)">
          <Fade>
            <Image
              src="/images/handshake.jpg"
              width={320}
              height={220}
              layout="responsive"
            />
          </Fade>
        </div>
      </section>
      <ServiceList />
      <section
        id="clients"
        style={{ backgroundColor: '#05080A' }}
        tw="py-10 md:(px-48)"
      >
        <h2 tw="md:(text-4xl my-10)">Our clients</h2>
        <Clients isDesktop={isDesktop} />
      </section>
      <section
        style={{
          backgroundImage: `linear-gradient(to top, rgba(5, 8, 10, 0.9), rgba(5, 8, 10, 0.7)), url('/images/thumbs-up.jpg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        tw="w-full h-60 pt-5 md:(px-48 py-16 h-80)"
      >
        <h2 tw="text-gray-200 text-center md:(text-3xl leading-relaxed w-1/2 m-auto)">
          <Fade>
            The best possible legal team will always look after our clients.
          </Fade>
        </h2>
        <p tw="mt-3 flex justify-center">
          <Link href="#contact">
            <Fade delay={100}>
              <a>
                <Button isPrimary>Get Free Consultation</Button>
              </a>
            </Fade>
          </Link>
        </p>
      </section>
      <section
        style={{
          backgroundColor: '#05080A',
          height: isDesktop ? '40rem' : '20rem',
        }}
        tw="h-80 flex items-center justify-center md:(px-48)"
      >
        <h1
          style={{
            backgroundImage: `url('/images/court.jpg')`,
            backgroundPosition: 'bottom',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
          tw="font-sans font-black text-7xl bg-clip-text text-transparent leading-tight bg-fixed text-center md:(text-9xl)"
        >
          BUDGET <br />
          LAW
        </h1>
      </section>
      <section
        id="contact"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(5, 8, 10, 0.9), rgba(5, 8, 10, 0.8)),url('/images/court.jpg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        tw="py-10 bg-fixed bg-no-repeat grid grid-cols-1 md:(px-48 py-32 grid-cols-2 gap-x-10)"
      >
        <div>
          <h2 tw="text-accent">Free Consultation</h2>
          <p tw="px-6 mt-0 mb-10 text-sm text-white text-opacity-90">
            Please fill the form below an agent will get in touch with you.
          </p>
          <ConsultForm />
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4257560365536!2d3.353681414711019!3d6.593887895231411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93928d499a29%3A0x3ba3699567d98733!2sWAF%20SOLICITORS!5e0!3m2!1sen!2sng!4v1615484113989!5m2!1sen!2sng"
          width={isDesktop ? '500' : '300'}
          height={isDesktop ? '400' : '200'}
          style={{ border: 0, margin: '30px auto' }}
          loading="lazy"
        ></iframe>
      </section>
      <Footer />
    </div>
  )
}
