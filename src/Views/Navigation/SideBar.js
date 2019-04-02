import React from 'react'
import Drawer from '@material-ui/core/Drawer'

const styles = {
    drawer: {
        width: 200
    }
}


const MUISideBar = (props) => (
    <div>
        <Drawer
            open={true}
            onClose={() => console.log('toggle')}
        >
            <div
                style={styles.drawer}
            >
                Dzień dobry
            </div>
        </Drawer>

    </div>
)

export default MUISideBar