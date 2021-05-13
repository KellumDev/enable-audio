import React, { Component } from "react";
import Button from '@material-ui/core/Button';

/* 

Defect Testing in web-sdk  
goal to achieve: 
IF there is no thumbnailOnly omit the aria-label attribute completely 
Else add the aria label as aria-label="element.altText" thumbnailOnly  

Target of element: 
<img onLoad={(this.props && this.props.onImgLoadFunction) ? this.props.onImgLoadFunction : null}  
                    className="media-card-img" 
EDIT LINE:          aria-label = {thumbnailOnly ? element.altText : ""} 
REMOVE LINE:        role={showClickHandler ? "link" : ""}    
                    src={element.image} alt = {element.altText} 
                    onClick={cardClickHandler} 
                    style={ thumbnailOnly ? { borderRadius: '5px'} : {cursor: showClickHandler ? 'pointer' : 'auto'}}/>

RESULT: 
  aria-label = {thumbnailOnly ? element.altText : null}
  by adding null this omitted the attribute from the element  
*/
class MessageBlock extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            // enableAudio: false,
            // enableValue: "Audio Off", 
        };
        
    }
  
    // ToggleAlert = () => {
 

    // }
 // aria-label = {thumbnailOnly ? element.altText : ""} 
    render() {

        let thumbnailOnly = true
        return (
            <div className="message-block" aria-label = {thumbnailOnly ? 'message-block' : null } style={styles.messageBlockContainer}  >
                <h1>Message Block</h1>
            </div>
        )
    }
}
const styles = {
    messageBlockContainer: {
        position: 'absolute',
        top: '200px',
        border: '2px solid black',
        padding: '5px'
    }

}

export default MessageBlock;

