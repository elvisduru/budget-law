import tw, { css, styled } from 'twin.macro'

const Button = styled.button(({ isPrimary, isSecondary, isSmall }) => [
  // The common button styles added with the tw import
  tw`px-8 py-2 focus:outline-none uppercase relative`,

  tw`before:(content absolute transition-all duration-200 ease-in-out block border border-accent left-0.5 right-0.5 -top-1 -bottom-1)`,

  // Use the variant grouping feature to add variants to multiple classes
  tw`hocus:(text-accent) hocus:before:(top-0 left-0 right-0 bottom-0)`,

  // Use props to conditionally style your components
  isPrimary &&
    tw`bg-transparent text-white text-opacity-80 border border-accent`,

  // Combine regular css with tailwind classes within backticks
  isSecondary && [
    css`
      box-shadow: 0 0.1em 0 0 rgba(0, 0, 0, 0.25);
    `,
    tw`border-2 border-yellow-600`,
  ],

  // Conditional props can be added
  isSmall && tw`text-sm`,
])

export default Button
