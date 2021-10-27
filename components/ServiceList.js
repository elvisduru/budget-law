import Link from 'next/link'
import Button from './Button'
import Service from './Service'
import Fade from 'react-reveal/Fade'

const services = [
  {
    imgClass: 'doc',
    title: 'Corporate Commercial',
    text: 'We tailor expertise to suit your business needs, whether it involves completing a major transaction, starting a new venture, negotiating an important contract or expanding operations in a new region.',
  },
  {
    imgClass: 'civil',
    title: 'Civil Law',
    text: 'We have a an experienced legal team devoted to civil law. We’re widely recognized as leaders, practising on behalf of domestic and foreign corporations and organizations.',
  },
  {
    imgClass: 'civil',
    title: 'Election Tribunal',
    text: 'Our experienced lawyers understand the electoral process and can assist you to achieve credible outcome and/or obtain remedy in your past disputed electoral results in the following: National Assembly, Presidential, Gubernatorial, State Assembly and Local Government elections. We fight your causes at the electoral tribunal whether as an Aspirant, Candidate, Political party or Stakeholder.',
  },
  {
    imgClass: 'tax',
    title: 'Tax Advisory',
    text: 'We’ll learn your objectives and tailor customized strategies to meet your short and long-term goals in the tax jurisdiction where you do (or plan to do) business.',
  },
  {
    imgClass: 'bank',
    title: 'Intellectual Property',
    text: 'As your business grows, you will look to protecting your innovations and know-how. Analying your competitive space is also essential.  our intellectual property lawyers protect your innovation giving you the space and freedom to operate and enjoy your patented inventions.',
  },
  {
    imgClass: 'crime',
    title: 'Litigation / Dispute Resolution',
    text: 'Technologies and processes are becoming smarter. Our priority is to minimize risk – whether it’s financial, reputational or operational – and help you make practical, cost-effective decisions to help your organization move forward.',
  },
  {
    imgClass: 'puzzle',
    title: 'Company or Business Formation',
    text: 'Our clients range from start-ups to industry leaders and include private equity funds, strategic buyers, boards of directors, family run businesses and their shareholders.',
  },
  {
    imgClass: 'civil',
    title: 'Oil and Gas Law',
    text: 'We have a thriving oil and gas legal practice with associate offices in the United Kingdom, West Africa, South Africa and East Africa. Our experienced lawyers and seasoned consultants will guide you through the intricacies of the industry and offer practical and professional advice to protect your investments and reputation.',
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
