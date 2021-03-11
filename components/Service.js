import tw, { styled } from 'twin.macro'

const Heading = tw.h4`uppercase text-xs text-white text-opacity-90 tracking-wider`

const Paragraph = tw.p`text-xs mt-1 text-white text-opacity-60`

const Icon = tw.div`flex items-center justify-center border border-white border-opacity-90 rounded-full mr-5 p-3 w-16 h-14`

const StyledService = tw.div`flex flex-row py-6 border-b border-gray-50 border-opacity-5 px-6 last-of-type:(border-0) hocus:(bg-gray-900) md:(py-10 last-of-type:(border-b))`

const Service = ({ imgClass, title, text }) => {
  return (
    <StyledService>
      <Icon>
        <div tw="w-7 h-7 inline-block" className={`icon ${imgClass}`}></div>
      </Icon>
      <div>
        <Heading>{title}</Heading>
        <Paragraph>{text}</Paragraph>
      </div>
    </StyledService>
  )
}

export default Service
