import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
}))

export default function EditProfile() {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)
    const id = open ? 'simple-popover' : undefined

    return (
        <div>
            <Button
                aria-describedby={id}
                variant='outlined'
                color='primary'
                onClick={handleClick}
            >
                EDIT PROFILE
            </Button>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Box style={{ padding: '5%', width: '400px' }}>
                    <Box style={{ padding: '5%' }}>
                        <Typography style={{ textAlign: 'center' }}>
                            EDIT DETAILS
                        </Typography>
                    </Box>
                    <form
                        className={classes.root}
                        noValidate
                        autoComplete='off'
                    >
                        <Box style={{ padding: '5%', paddingLeft: '18%' }}>
                            <TextField
                                id='outlined-basic'
                                label='Name'
                                variant='outlined'
                            />
                        </Box>
                        <Box style={{ padding: '5%', paddingLeft: '18%' }}>
                            <TextField
                                id='outlined-basic'
                                label='Address'
                                variant='outlined'
                            />
                        </Box>
                        <Box style={{ padding: '5%', paddingLeft: '18%' }}>
                            <TextField
                                id='outlined-basic'
                                label='Phone'
                                variant='outlined'
                                type='number'
                            />
                        </Box>

                        <Box style={{ padding: '5%', paddingLeft: '18%' }}>
                            <TextField
                                id='outlined-basic'
                                label='Password'
                                variant='outlined'
                                type='password'
                            />
                        </Box>

                        <Button
                            variant='contained'
                            size='large'
                            type='submit'
                            fullwidth
                            style={{
                                backgroundColor: '#DF9534',
                                textAlign: 'center',
                                marginLeft: '25%',
                            }}
                        >
                            {' '}
                            SAVE CHANGES{' '}
                        </Button>
                    </form>
                </Box>
            </Popover>
        </div>
    )
}
