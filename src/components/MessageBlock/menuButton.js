import React, { Component } from "react";
import Button from '@material-ui/core/Button';

 
class MenuButton extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            // enableAudio: false,
            // enableValue: "Audio Off", 
        };
        
    }
   
    render() {

        let thumbnailOnly = true
        // style={styles.messageBlockContainer} 
        return (
            <div className="menuButton"   >
                <h1>MenuButton</h1>
            </div>
            
        )
    }
}
const styles = {
    // messageBlockContainer: {
    //     position: 'absolute',
    //     top: '200px',
    //     border: '2px solid black',
    //     padding: '5px'
    // }

}

export default MenuButton;

