import Fade from 'react-reveal/Fade'
import Button from './Button'

export default function ConsultForm() {
  const handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData(e.target)
    console.log(formData.getAll())
  }

  return (
    <form
      onSubmit={handleSubmit}
      tw="grid grid-cols-1 gap-4 px-6 text-accent text-opacity-80"
    >
      <Fade>
        <label tw="text-sm">
          Name <br />
          <input
            tw="w-full h-9 bg-transparent border-b border-accent border-opacity-25 focus:border-opacity-100 outline-none"
            type="text"
            name="name"
            required
          />
        </label>
        <label tw="text-sm">
          Email <br />
          <input
            tw="w-full h-9 bg-transparent border-b border-accent border-opacity-25 focus:border-opacity-100 outline-none"
            type="email"
            name="email"
            required
          />
        </label>
        <label tw="text-sm">
          Phone number
          <br />
          <input
            tw="w-full h-9 bg-transparent border-b border-accent border-opacity-25 focus:border-opacity-100 outline-none"
            type="tel"
            name="mobile"
            required
          />
        </label>
        <label tw="text-sm">
          Your message
          <br />
          <textarea
            tw="w-full h-16 bg-transparent border-b border-accent border-opacity-25 focus:border-opacity-100 outline-none"
            name="msg"
          ></textarea>
        </label>
        <Button tw="mt-5 mb-10 w-full md:w-auto" isPrimary>
          Send message
        </Button>
      </Fade>
    </form>
  )
}
