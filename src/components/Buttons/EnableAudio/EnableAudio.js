import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import SoundBoy from '@goodboydigital/soundboy'; 
class EnableAudioButton extends Component {

    state = {
        enableAudio: false,
        enableValue: "Audio Off"
    };

    componentDidMount(){

        SoundBoy.registerSound({
            // id and src are required
            id: 'alert',
            src: 'C:/Users/austin.kellum/Documents/COMCAST/testing/accessibility-testing/public/assets/MGS-alert.mp3',
            
            
            // optional (default values shown)
            preload: false, // set to true to immediately start loading the sound
            stream: false, // set to true to enable sound to start playing before fully loaded
            loop: false, // set to true to loop indefinitely
            volume: 10 // this is the base volume of the sound, the actual sound volume will be the product of this, the sound instance volume, and the volume of the channel the sound is played on
        })
    } 

    playsound = () => {
        setTimeout(() => {
          let laserSound = SoundBoy.playSfx('alert');
           // sound can be controlled independently:
            laserSound.volume = 0.5;
            
            console.log("play sound", laserSound);
            
        }, 1000);
    }

    handleAudio = () => {
        
        if (!this.state.enableAudio) {
            this.setState({
                enableAudio: true,
                enableValue: "Audio On",
            });
            this.playsound(); 
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
            <div id="audio-button">
                <p>Enable audio Button</p>
                <Button variant="contained" color="primary" onClick={this.handleAudio}>
                    <p>{this.state.enableValue}</p>
                </Button>

            </div>
        )
    }
}


export default EnableAudioButton;

