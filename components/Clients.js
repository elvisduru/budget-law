import Image from 'next/image'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import Fade from 'react-reveal/Fade'

const clientList = [
  {
    name: 'Ade Adebajo',
    image: '/images/client1.jpg',
    type: 'CEO, UT Financial services Ltd',
    text: `Budget law is an extremely professional form and they show a high level of care. \n\nThey are also very affordable. They deliver to time as well`,
  },
  {
    name: 'Temi',
    image: '/images/client2.jpg',
    type: 'CEO, BBHair LDN.',
    text: `Budget Law has been very helpful in assisting me in my business. As a new business owner, I needed a lot of help and advice and Budget Law has really helped me. My business is now flourishing and I owe it all to Budget Law!! They are kind, understanding and highly professional!!`,
  },
  {
    name: 'Francis Akpan-Inwang',
    image: '/images/client3.jpg',
    type: 'CEO, Apex HR Consulting (UK) Ltd',
    text: `Professional. Efficient. Courteous. The team at Budget Law understand the essence of customer service. Highly recommend them.`,
  },
]

const SlideContent = ({ name, type, text, image, isDesktop }) => (
  <>
    <div tw="grid grid-cols-2 md:(grid-cols-12 grid-flow-col gap-x-10)">
      <div tw="md:(col-span-3 row-span-2)">
        <Image
          objectFit="cover"
          objectPosition="center"
          src={image}
          alt="business"
          width={isDesktop ? 300 : 180}
          height={isDesktop ? 360 : 250}
        />
      </div>
      
      <p tw="col-span-2 text-xs mb-2 mt-7 text-white leading-normal text-opacity-80 whitespace-pre-line md:(col-span-6  text-base)">
        {text}
      </p>
      <div tw="ml-5 place-self-end mr-auto md:(col-span-4 ml-0)">
        <h4 tw="text-white text-opacity-90">{name}</h4>
        <h6 tw="text-xs text-accent uppercase">{type}</h6>
      </div>
    </div>
  </>
)

export default function Clients({ isDesktop }) {
  return (
    <div>
      <div tw="text-white px-6">
        <CarouselProvider
          totalSlides={3}
          naturalSlideWidth={100}
          naturalSlideHeight={isDesktop ? 30 : 125}
        >
          <Slider>
            {clientList.map(({ name, image, text, type }, i) => (
              <Slide index={i} key={i}>
                <Fade>
                  <SlideContent
                    name={name}
                    image={image}
                    type={type}
                    text={text}
                    isDesktop={isDesktop}
                  />
                </Fade>
              </Slide>
            ))}
          </Slider>
          <ButtonBack>
            <span tw="text-3xl mr-5 text-white text-opacity-80">&larr;</span>
          </ButtonBack>
          <ButtonNext>
            <span tw="text-3xl text-white text-opacity-80">&rarr;</span>
          </ButtonNext>
        </CarouselProvider>
      </div>
    </div>
  )
}
