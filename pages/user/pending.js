import DashboardLayout from '../../layouts/Dashboard'
import TimerOffOutlinedIcon from '@material-ui/icons/TimerOffOutlined'
import { IconButton, Typography } from '@material-ui/core'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined'
import { useRouter } from 'next/router'

const Pending = () => {
  const router = useRouter()
  return (
    <DashboardLayout title="Pending Orders">
      <div tw="flex flex-col items-center justify-center h-full">
        <TimerOffOutlinedIcon style={{ fontSize: 100, color: '#ffb74d' }} />
        <div tw="mt-5 text-center space-y-3">
          <Typography variant="body1" color="textSecondary">
            No Pending Orders
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

export default Pending
