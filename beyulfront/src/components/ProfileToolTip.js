import {Popover } from "@material-ui/core"
import { WithStyles } from "@material-ui/core"

const ViewTip = withStyles({
    tooltip:{
        width: "",
    }
})


export const ProfileToolTip = (props) => {
    return (
        <>
           <ViewTip interactive title="Profile">
                <div></div>
           </ViewTip>
        </>
    )
}
