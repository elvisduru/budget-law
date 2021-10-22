import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TimerOutlinedIcon from '@material-ui/icons/TimerOutlined'
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined'
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined'
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined'
import Packages from '../../components/Packages'
import StatCard from '../../components/StatCard'
import DashboardLayout from '../../layouts/Dashboard'

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="subtitle2">Activites</Typography>
        </Grid>
        <StatCard
          link="/user/pending"
          title="Pending Orders"
          Icon={TimerOutlinedIcon}
          bgColor="#ffb74d"
        />
        <StatCard
          link="/user/completed"
          title="Completed Orders"
          Icon={CheckCircleOutlinedIcon}
          bgColor="#81c784"
        />
        <StatCard
          link="/user/pickups"
          title="Pickup Requests"
          Icon={LocalShippingOutlinedIcon}
          bgColor="#64b5f6"
        />
        <StatCard
          link="/user/abandoned"
          title="Saved Orders"
          Icon={DeleteOutlineOutlinedIcon}
          bgColor="#9e9e9e"
        />
      </Grid>
      <Grid container tw="mt-12">
        <Packages noPadding />
      </Grid>
    </DashboardLayout>
  )
}

export default Dashboard
