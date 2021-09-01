import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


export default function Company() {
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div>
            <Button
                aria-controls='simple-menu'
                aria-haspopup='true'
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon/>}
                style={{paddingTop:'0.6rem'}}
                
            >
                <Typography variant='body2' style={{fontSize:'0.8rem'}}>
                    Company
                </Typography>
            </Button>
            <Menu
                id='simple-menu'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <Link to='/our-team' style={{ display: 'block' }}>
                        {' '}
                        Our Team
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to='/terms-and-conditions'>Terms & Conditions</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to='/privacy-policy'>Privacy Policy</Link>
                </MenuItem>
            </Menu>
        </div>
    )
}
