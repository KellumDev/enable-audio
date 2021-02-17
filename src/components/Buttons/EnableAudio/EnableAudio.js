import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import uifx from 'uifx'; 
import msgaudio from '../EnableAudio/MGS-alert.mp3'; 

class EnableAudioButton extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            enableAudio: false,
            enableValue: "Audio Off", 
        };
        
    }
 
    componentDidUpdate () {

        if( this.state.enableAudio && this.props.newUnreadMessage > 0 ){
            this.playsound();
        }

    }
   
    playsound = () => {
            const beep = new uifx(msgaudio); 
            beep.setVolume(0.1).play(); 
            console.log("play sounds" )       
    }

    ToggleAlert = () => {

        if (!this.state.enableAudio) {
            this.setState({
                enableAudio: true,
                enableValue: "Audio On",
            });
            
        }
        else {
            this.setState({
                enableAudio: false,
                enableValue: "Audio Off"
            });
        }

    }



    render() {
        return (
            <div id="audio-button"  style={styles.enableAudioButtonContainer}  >
               
                <Button variant="contained" color="primary" onClick={this.ToggleAlert}>
                    <p>{this.state.enableValue}</p>
                </Button>
                <p>Enable audio Button</p>
            </div>
        )
    }
}
const styles = {
    enableAudioButtonContainer: {
        position: 'absolute',
        bottom: '100px'

    }

}

export default EnableAudioButton;

