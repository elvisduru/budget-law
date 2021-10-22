import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { TabContext, TabPanel, TabList } from '@material-ui/lab'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import HomeIcon from '@material-ui/icons/Home'
import {
  Paper,
  Tab,
  Box,
  useMediaQuery,
  Grid,
  Typography,
  Divider,
  makeStyles,
} from '@material-ui/core'
import PackageLink from '../components/PackageLink'

const useStyles = makeStyles(theme => ({
  tabPanel: {
    padding: 0,
  },
}))

const Packages = ({ noPadding }) => {
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const isDesktop = useMediaQuery('(min-width: 600px)')
  const classes = useStyles()

  const [isLanding, setIsLanding] = useState(true)

  useEffect(() => {
    setIsLanding(location.pathname === '/registrations')
  }, [])

  return (
    <TabContext value={value}>
      <Grid container>
        <Grid tw="pb-5" item xs={12} sm={isLanding && 3} md={isLanding && 2}>
          <Paper square elevation={0}>
            <TabList
              centered
              orientation={isDesktop && isLanding ? 'vertical' : 'horizontal'}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="Registrations" value="1" />
              <Tab label="Documents" value="2" />
            </TabList>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={isLanding && 9}>
          <Box>
            <TabPanel
              className={clsx({
                [classes.tabPanel]: noPadding,
              })}
              value="1"
            >
              <Grid container>
                <div tw="mb-4 flex">
                  <div>
                    <BusinessCenterIcon
                      tw="color[#D68021]"
                      fontSize="large"
                      tw="mr-2"
                    />
                  </div>
                  <div>
                    <Typography variant="h5">Starting a Business</Typography>
                    <Typography variant="caption">
                      We've helped tens of thousands of people just like you
                      form legally recognized businesses in all 36 states.
                    </Typography>
                  </div>
                </div>
                <Divider />
              </Grid>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                  <ul tw="mt-4">
                    <PackageLink
                      name="Business Name Registration"
                      url="/forms"
                    />
                    <PackageLink
                      name="Company Incorporation"
                      url="/forms/company-incorporation"
                    />
                    <PackageLink name="Copyright Registration" url="/forms" />
                    <PackageLink name="NGO Registration" url="/forms" />
                    <PackageLink name="TIN/VAT Registration" url="/forms" />
                    <PackageLink name="Trademark Registration" url="/forms" />
                  </ul>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <ul tw="mt-0 sm:mt-4">
                    <PackageLink name="Order Company Seal" url="/forms" />
                    <PackageLink name="Order Stamp" url="/forms" />
                    <PackageLink name="Registered Entity Search" url="/forms" />
                  </ul>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel
              className={clsx({
                [classes.tabPanel]: noPadding,
              })}
              value="2"
            >
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                  <div tw="mb-4 flex">
                    <div>
                      <BusinessCenterIcon
                        tw="color[#D68021]"
                        fontSize="large"
                        tw="mr-2"
                      />
                    </div>
                    <div>
                      <Typography variant="h5">
                        Business and Contracts
                      </Typography>
                      <Typography variant="caption">
                        Make professional business contracts and more. We can
                        help.
                      </Typography>
                    </div>
                  </div>
                  <Divider />
                  <ul tw="mt-4">
                    <PackageLink name="Non-Disclosure Agreement" url="/forms" />
                    <PackageLink name="Privacy Policy" url="/forms" />
                    <PackageLink name="Board Resolution" url="/forms" />
                    <PackageLink name="Employee Contract" url="/forms" />
                    <PackageLink name="Letter of Confirmation" url="/forms" />
                    <PackageLink name="Vehicle Sales Agreement" url="/forms" />
                  </ul>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div tw="mb-4 flex">
                    <div>
                      <HomeIcon
                        tw="color[#D68021]"
                        fontSize="large"
                        tw="mr-2"
                      />
                    </div>
                    <div>
                      <Typography variant="h5">Real Estate</Typography>
                      <Typography variant="caption">
                        Protect your property with custom legal documents. We're
                        here to help.
                      </Typography>
                    </div>
                  </div>
                  <Divider />
                  <ul tw="mt-4">
                    <PackageLink name="Tenancy Agreement" url="/forms" />
                    <PackageLink name="Eviction Notice" url="/forms" />
                  </ul>
                </Grid>
              </Grid>
            </TabPanel>
          </Box>
        </Grid>
      </Grid>
    </TabContext>
  )
}

export default Packages
