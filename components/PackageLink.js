import { Typography } from '@material-ui/core'
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined'
import Link from 'next/link'

const PackageLink = ({ name, url }) => (
  <li tw="cursor-pointer">
    <Link href={url}>
      <a tw="color[#D68021] flex space-x-2 border shadow-sm rounded-sm p-2 my-2">
        <DescriptionOutlinedIcon />
        <Typography variant="body1">{name}</Typography>
      </a>
    </Link>
  </li>
)

export default PackageLink
