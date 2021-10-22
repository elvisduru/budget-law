import DashboardLayout from '../../layouts/Dashboard'
import MailIcon from '@material-ui/icons/Mail'
import { IconButton, Typography } from '@material-ui/core'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined'
import { useRouter } from 'next/router'

const Inbox = () => {
  const router = useRouter()
  return (
    <DashboardLayout title="Inbox">
      <div tw="flex flex-col items-center justify-center h-full">
        <MailIcon style={{ fontSize: 100, color: '#ffb74d' }} />
        <div tw="mt-5 text-center space-y-3">
          <Typography variant="body1" color="textSecondary">
            No Messages Received
          </Typography>
          <Typography variant="body2" color="textSecondary">
            This page is empty and boring, but you can make things happen.
          </Typography>
          <IconButton
            color="inherit"
            aria-label="new document"
            onClick={() => router.push('/user/dashboard')}
          >
            <AddOutlinedIcon />
          </IconButton>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Inbox
