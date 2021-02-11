import React, { Component } from "react";
import Button from '@material-ui/core/Button';

class EnableAudioButton extends Component {

    state = {
        enableAudio: false,
        enableValue: "Audio Off"
    };

    handleAudio = () => {
        /* this.setState({
            enableAudio: true,
            enableValue: "Audio On",
          }); */
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
            <div>
                <p>Enable audio Button</p>
                <Button variant="contained" color="primary" onClick={this.handleAudio}>
                    <p>{this.state.enableValue}</p>
                </Button>

            </div>
        )
    }
}

export default EnableAudioButton;

