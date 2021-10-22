import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Link from 'next/link'

const StatCard = ({ Icon, title, link, iconStyles, bgColor }) => (
  <Grid item xs={6} md={3}>
    <Paper style={{ backgroundColor: bgColor, textAlign: 'center' }}>
      <Link href={link}>
        <a>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            padding={1}
          >
            <Icon style={{ fontSize: 40, ...iconStyles }} />
            <Typography variant="caption">{title}</Typography>
          </Box>
        </a>
      </Link>
    </Paper>
  </Grid>
)

export default StatCard
