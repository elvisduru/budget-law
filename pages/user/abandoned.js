import DashboardLayout from '../../layouts/Dashboard'
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined'
import { IconButton, Typography } from '@material-ui/core'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined'
import { useRouter } from 'next/router'

const Inbox = () => {
  const router = useRouter()
  return (
    <DashboardLayout title="Inbox Orders">
      <div tw="flex flex-col items-center justify-center h-full">
        <DeleteOutlineOutlinedIcon
          style={{ fontSize: 100, color: '#ffb74d' }}
        />
        <div tw="mt-5 text-center space-y-3">
          <Typography variant="body1" color="textSecondary">
            No Saved Orders
          </Typography>
          <Typography variant="body2" color="textSecondary">
            When you cancel any order it will appear here. Start a new order.
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
