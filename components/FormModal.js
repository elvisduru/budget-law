import { useEffect } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import { useRouter } from 'next/router'

const FormModal = ({ title, children }) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const router = useRouter()

  const handleClose = () => {
    router.push('/user/dashboard')
  }

  useEffect(() => {
    router.prefetch('/registrations')
  }, [])

  return (
    <div tw="h-screen w-screen bg-cover bg-center background-image[url('/images/bg-forms.jpg')]">
      <Dialog
        fullScreen={fullScreen}
        open={true}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
        <div>{children}</div>
      </Dialog>
    </div>
  )
}

export default FormModal
