import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { Card, CardContent } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import Link from '@material-ui/core/Link'
import { blue } from '@material-ui/core/colors'

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
})

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant='h6'>{children}</Typography>
            {onClose ? (
                <IconButton
                    aria-label='close'
                    className={classes.closeButton}
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    )
})

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent)

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions)

//Defining custom styles for SignUp

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 550,
        margin: '0 auto',
        marginTop: 10,
        padding: 20,
    },

    cardTitle: {
        marginBottom: 20,
    },

    submit: {
        margin: theme.spacing(2, 0, 2),
        padding: 10,
    },

    dialog: {
        padding: 10,
    },
}))

//Defining form initial values
const InitialFormValues = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    contactNo: '',
}

const CustomizedDialogs = (props) => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <Dialog
                onClose={handleClose}
                aria-labelledby='customized-dialog-title'
                open={open}
                onBackdropClick
                className={classes.dialog}
                color='textSecondary'
            >
                <DialogTitle
                    id='customized-dialog-title'
                    onClose={handleClose}
                >
                    <Typography
                        variant='h5'
                        color='primary'
                        align='center'
                        gutterbottom
                        className={classes.cardTitle}
                    >
                        Sign Up Today
                    </Typography>
                </DialogTitle>
                <DialogContent dividers>
                    <div className={classes.signUp}>
                        <Card className={classes.card} elevation={1}>
                            <CardContent>
                                <Typography
                                    variant='body2'
                                    gutterBottom
                                    color='textSecondary'
                                    component='p'
                                >
                                    Be part of Beyul Venture
                                </Typography>

                                <form autoComplete='off' noValidate>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6} md={6}>
                                            <TextField
                                                variant='outlined'
                                                label='First Name'
                                                color='secondary'
                                                values={
                                                    InitialFormValues.fullName
                                                }
                                                required
                                                placeholder='Enter First Name'
                                                fullWidth
                                                id='fName'
                                                name='fName'
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={6} md={6}>
                                            <TextField
                                                variant='outlined'
                                                label='Last Name'
                                                color='secondary'
                                                values={
                                                    InitialFormValues.lastName
                                                }
                                                required
                                                placeholder='Enter Last Name'
                                                fullWidth
                                                id='lName'
                                                name='lName'
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={6} md={6}>
                                            <TextField
                                                variant='outlined'
                                                label='Email Address'
                                                color='secondary'
                                                values={
                                                    InitialFormValues.email
                                                }
                                                required
                                                placeholder='Enter Email Address'
                                                fullWidth
                                                type='email'
                                                id='email'
                                                name='email'
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={6} md={6}>
                                            <TextField
                                                variant='outlined'
                                                label='Phone'
                                                color='secondary'
                                                values={
                                                    InitialFormValues.contactNo
                                                }
                                                required
                                                placeholder='Enter Phone Number'
                                                fullWidth
                                                type='number'
                                                id='phone'
                                                name='phone'
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={12} md={12}>
                                            <Button
                                                variant='contained'
                                                color='primary'
                                                fullWidth
                                                type='submit'
                                                className={classes.submit}
                                            >
                                                Submit
                                            </Button>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify='flex-end'>
                                        <Grid item>
                                            <Link
                                                href='/sign-in'
                                                variant='body2'
                                            >
                                                Already have an account? Sign
                                                in
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default CustomizedDialogs
