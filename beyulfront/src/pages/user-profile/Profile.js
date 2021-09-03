import React from 'react'
import Typography from '@material-ui/core/Typography'
import './index.css'
import map from 'img/nischal.png'
import CustomTimeline from './CustomTimeline'
import { ProfileData } from './ProfileData'
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Paper from '@material-ui/core/Paper'

const Profile = () => {
    return (
        <Paper style={{marginTop:'25%', marginLeft:'5%', marginRight:'5%'}}>
        <div className='profile container_shadow'>
            <div className='profile_name'>
                <Typography className='name'>{ProfileData[0].name}</Typography>
                <Typography className='user_name'>{ProfileData[0].user_name}</Typography>
            </div>

            <figure className='profile_image'>
                <img src={map} alt='profile images' style={{border: '5px solid #DF9534'}} />
            </figure>

            <div className='profile_information'>
                <CustomTimeline />
                <div className='image_upload'>
                    <input
                        accept="image/*"
                        style={{display:'none'}}
                        id="contained-button-file"
                        multiple
                        type="file"
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color="primary" component="span">
                        CHANGE PHOTO
                        </Button>
                    </label>
                    <input accept="image/*" style={{display:'none'}} id="icon-button-file" type="file" />
                    <label htmlFor="icon-button-file">
                        <IconButton color="primary" aria-label="upload picture" component="span">
                        <Tooltip title='change photo'>
                            <PhotoCamera />
                        </Tooltip>
                        </IconButton>
                    </label>
                </div>

            </div>
        </div>
        </Paper>
    )
}

export default Profile
