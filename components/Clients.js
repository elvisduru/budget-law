import Image from 'next/image'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

const clientList = [
  {
    name: 'John Maxwell',
    image: '/images/client1.jpg',
    type: 'CEO, Maxwell Inc.',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet possimus hic molestiae harum quaerat quod. \n\nPerspiciatis eius alias exercitationem, modi tempore cumque unde repellat dolorum pariatur doloribus esse, blanditiis ea?`,
  },
  {
    name: 'Henry Jo',
    image: '/images/client2.jpg',
    type: 'CEO, Fiction Ltd.',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet possimus hic molestiae harum quaerat quod. \n\nPerspiciatis eius alias exercitationem, modi tempore cumque unde repellat dolorum pariatur doloribus esse, blanditiis ea?`,
  },
  {
    name: 'Tunde Lanre',
    image: '/images/client3.jpg',
    type: 'CEO, Lens Group',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet possimus hic molestiae harum quaerat quod. \n\nPerspiciatis eius alias exercitationem, modi tempore cumque unde repellat dolorum pariatur doloribus esse, blanditiis ea?`,
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
      <div tw="ml-5 place-self-end mr-auto md:(col-span-4 ml-0)">
        <h4 tw="text-white text-opacity-90">{name}</h4>
        <h6 tw="text-xs text-accent uppercase">{type}</h6>
      </div>
      <p tw="col-span-2 text-xs mb-2 mt-7 text-white leading-normal text-opacity-80 whitespace-pre-line md:(col-span-6  text-base)">
        {text}
      </p>
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
                <SlideContent
                  name={name}
                  image={image}
                  type={type}
                  text={text}
                  isDesktop={isDesktop}
                />
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
