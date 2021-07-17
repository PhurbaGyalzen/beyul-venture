import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

function Copyright() {
  return (
    <Typography variant='body2' align='center'>
      {'Copyright © '}
      <Link color='inherit' href={process.env.PUBLIC_URL}>
        Beyul Venture
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default Copyright
