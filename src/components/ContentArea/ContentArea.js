import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import EnableAudioButton from '../Buttons/EnableAudio/EnableAudio';

export default function SimpleContainer() {


    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
                < EnableAudioButton style={  {
                    position: 'absolute',
                    top: 400
                }} />
            </Container>
        </React.Fragment>
    );
}

const styles = {
    enableAudioButtonContainer: {
        height: '400px',
        width: '100%',
        overflow: 'auto',
        padding: '1%',

    }

}