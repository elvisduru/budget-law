import clsx from 'clsx'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MailIcon from '@material-ui/icons/Mail'
import NotificationsIcon from '@material-ui/icons/Notifications'
import DashboardIcon from '@material-ui/icons/Dashboard'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined'
import TimerOutlinedIcon from '@material-ui/icons/TimerOutlined'
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined'
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { useRouter } from 'next/router'

// Fix Authentication later
const user = 'user'
const links =
  user === 'admin'
    ? [
        {
          link: '/admin/dashboard',
          title: 'Dashboard',
          Icon: DashboardIcon,
        },
        {
          link: '/admin/pending',
          title: 'Pending Orders',
          Icon: TimerOutlinedIcon,
        },
        {
          link: '/admin/completed',
          title: 'Completed Orders',
          Icon: CheckCircleOutlinedIcon,
        },
        {
          link: '/admin/pickups',
          title: 'Pickup Requests',
          Icon: LocalShippingOutlinedIcon,
        },
      ]
    : [
        {
          link: '/user/dashboard',
          title: 'Dashboard',
          Icon: DashboardIcon,
        },
        {
          link: '/user/inbox',
          title: 'Inbox',
          Icon: MailIcon,
        },
        {
          link: '/user/notifications',
          title: 'Notifications',
          Icon: NotificationsIcon,
        },
        { title: 'Divider' },
        {
          link: '/user/pending',
          title: 'Pending Orders',
          Icon: TimerOutlinedIcon,
        },
        {
          link: '/user/pickups',
          title: 'Pickup Requests',
          Icon: LocalShippingOutlinedIcon,
        },
        {
          link: '/user/abandoned',
          title: 'Saved Orders',
          Icon: DeleteOutlineOutlinedIcon,
        },
        { title: 'Divider' },
        {
          link: '/user/dashboard',
          title: 'Resources',
          Icon: LibraryBooksIcon,
        },
      ]

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  appBar: {
    // [theme.breakpoints.up('sm')]: {
    //   width: `calc(100% - ${drawerWidth}px)`,
    //   marginLeft: drawerWidth,
    // },
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#1E2E3E',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    [theme.breakpoints.up('lg')]: {
      paddingRight: theme.spacing(30),
    },
  },
}))

const DashboardLayout = ({ title, children }) => {
  const router = useRouter()
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)

  const [path, setPath] = useState('')

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const isDesktop = useMediaQuery('(min-width: 600px)')

  useEffect(() => {
    setPath(location.pathname)
  }, [])

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {links.map(({ title, link, Icon }, index) =>
          title === 'Divider' ? (
            <Divider key={index} />
          ) : (
            <ListItem
              selected={path === link}
              button
              key={title}
              onClick={() => router.push(link)}
            >
              <ListItemIcon key={title}>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={title} />
            </ListItem>
          ),
        )}
        <ListItem button onClick={() => router.push('/')}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  )

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/#">
            <a>
              <Image
                src="/images/logo.svg"
                alt="Budget law logo"
                width="150"
                height="40"
                objectFit="contain"
              />
            </a>
          </Link>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            variant="permanent"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: mobileOpen,
              [classes.drawerClose]: !mobileOpen,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: mobileOpen,
                [classes.drawerClose]: !mobileOpen,
              }),
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div tw="mb-5">
          <Typography variant="h5">{title}</Typography>
        </div>
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout
