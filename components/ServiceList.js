import Link from 'next/link'
import Button from './Button'
import Service from './Service'
import Fade from 'react-reveal/Fade'

const services = [
  {
    imgClass: 'doc',
    title: 'Corporate Commercial',
    text:
      'We tailor expertise to suit your business needs, whether it involves completing a major transaction, starting a new venture, negotiating an important contract or expanding operations in a new region.',
  },
  {
    imgClass: 'civil',
    title: 'Civil Law',
    text:
      'We have a leading legal team devoted to civil law. We’re widely recognized as leaders, practicing on behalf of domestic and foreign corporations, organizations, public office holders, political parties, candidates and individuals.',
  },
  {
    imgClass: 'tax',
    title: 'Tax Advisory',
    text:
      'We’ll learn your objectives and tailor customized strategies to meet your short and long-term goals in the tax environments where you do (or plan to do) business.',
  },
  {
    imgClass: 'bank',
    title: 'Intellectual Property',
    text:
      'As your business grows, you will look to protecting your innovations and know-how. Analying your competitive space is also essential.  That’s where we come in with providing opinions regarding your freedom to operate and the patentability of your inventions.',
  },
  {
    imgClass: 'crime',
    title: 'Litigation / Dispute Resolution',
    text:
      'Technologies and processes are becoming smarter. Our priority is to minimize risk – whether it’s financial, reputational or operational – and help you make practical, cost-effective decisions to help your organization move forward.',
  },
  {
    imgClass: 'puzzle',
    title: 'Company or Joint Formation',
    text:
      'Our clients range from start-ups to industry leaders and include private equity funds, strategic buyers, boards of directors, independent committees, family businesses and their shareholders, as well as public companies throughout the world.',
  },
]

export default function ServiceList() {
  return (
    <section
      id="services"
      style={{ backgroundColor: '#05080A' }}
      tw="py-10 text-white md:px-10 lg:px-48"
    >
      <h2 tw="md:(text-4xl my-8)">Practice Areas</h2>
      <div tw="md:(grid grid-cols-3)">
        {services.map(({ imgClass, title, text }, i) => (
          <Fade key={i}>
            <Service imgClass={imgClass} title={title} text={text} />
          </Fade>
        ))}
      </div>

      <Fade>
        <p tw="mt-4 flex justify-center md:(mt-10)">
          <Link href="#contact">
            <a>
              <Button isPrimary>Get Free Consultation</Button>
            </a>
          </Link>
        </p>
      </Fade>
    </section>
  )
}
