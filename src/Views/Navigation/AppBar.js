import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const MUIAppBar = (props) => (
    <div>
        <AppBar
            position={"static"}
        >
            <Toolbar>
                <IconButton
                    color={"inherit"}
                    aria-label={"Menu"}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant={"h6"}
                    color={"inherit"}
                    noWrap={"true"}
                >
                    JFDDL7 APP
          </Typography>
            </Toolbar>
        </AppBar>
    </div>
)

export default MUIAppBar