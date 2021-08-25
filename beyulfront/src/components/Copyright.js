import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

function Copyright() {
    return (
        <Typography style={{ color: '#c47d1e' }}>
            {'Copyright ©. All rights reserved to'} {new Date().getFullYear()}
            {'.'}
            <Link color='inherit' href={process.env.PUBLIC_URL}>
                Beyul Venture
            </Link>{' '}
        </Typography>
    )
}

export default Copyright
