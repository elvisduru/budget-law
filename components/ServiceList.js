import Link from 'next/link'
import Button from './Button'
import Service from './Service'
import Fade from 'react-reveal/Fade'

const services = [
  {
    imgClass: 'doc',
    title: 'Corporate Commercial',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    imgClass: 'puzzle',
    title: 'Company or Joint Formation',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    imgClass: 'tax',
    title: 'Tax Advisory',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    imgClass: 'bank',
    title: 'Intellectual Property',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    imgClass: 'crime',
    title: 'Litigation / Dispute Resolution',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    imgClass: 'civil',
    title: 'Civil Law',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
]

export default function ServiceList() {
  return (
    <section
      id="services"
      style={{ backgroundColor: '#05080A' }}
      tw="py-10 text-white md:(px-48)"
    >
      <h2 tw="md:(text-4xl my-8)">Services</h2>
      <div tw="md:(grid grid-cols-3)">
        {services.map(({ imgClass, title, text }, i) => (
          <Fade>
            <Service key={i} imgClass={imgClass} title={title} text={text} />
          </Fade>
        ))}
      </div>

      <p tw="mt-4 flex justify-center md:(mt-10)">
        <Fade>
          <Link href="#contact">
            <a>
              <Button isPrimary>Get Free Consultation</Button>
            </a>
          </Link>
        </Fade>
      </p>
    </section>
  )
}
