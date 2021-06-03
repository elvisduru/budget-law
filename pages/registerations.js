import Button from '../components/Button'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

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
          <Button tw="bg-accent text-black before:border-0 py-3 px-10 mt-10 self-start">
            Get Started
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Registrations
