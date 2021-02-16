import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import EnableAudioButton from '../Buttons/EnableAudio/EnableAudio';
import './ContentArea.css'
import { Widget, addResponseMessage, addUserMessage } from 'react-chat-widget';


export default function ContainerArea() {
    const [newUnreadMessage, setnewUnreadMessage] = useState(0);

    //######## EFFECTS
    useEffect(() => {
        addResponseMessage('Welcome to this awesome chat!');
    }, []);

    const handleNewUserMessage = (newMessage) => {
       // console.log(`New message incoming! ${newMessage}`);
        // Now send the message throught the backend API
        let response = "Chat bot response";

        try {
             addResponseMessage(response)
            setnewUnreadMessage(newUnreadMessage + 1);
            console.log("chat response flag set to True: ", newUnreadMessage);
        } catch (error) {
            console.log("error in the handleNewUserMessage function: ", error);
        }

    };


    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Widget className="chat-widget" 
                style={styles.chatWidget} 
                    handleNewUserMessage={handleNewUserMessage}
                />
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
                < EnableAudioButton
                    newUnreadMessage={newUnreadMessage}
                   />
            </Container>
        </React.Fragment>
    );
}

const styles = {
    chatWidget: {
       backgroundColor: "red"

    }
}