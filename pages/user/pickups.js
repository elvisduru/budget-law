import DashboardLayout from '../../layouts/Dashboard'
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined'
import { IconButton, Typography } from '@material-ui/core'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined'
import { useRouter } from 'next/router'

const Pickups = () => {
  const router = useRouter()
  return (
    <DashboardLayout title="Pickup Requests">
      <div tw="flex flex-col items-center justify-center h-full">
        <LocalShippingOutlinedIcon
          style={{ fontSize: 100, color: '#ffb74d' }}
        />
        <div tw="mt-5 text-center space-y-3">
          <Typography variant="body1" color="textSecondary">
            No Pickup Requests
          </Typography>
          <Typography variant="body2" color="textSecondary">
            You do not have any packages ordered yet. Click the button below to
            begin.
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

export default Pickups
