import React from 'react';

const GenerateChoicesButton = (props) => {


    return (
        <button id="generate-room-choice"
            className={props.buttonVisible ? '' : 'hidden '}
            onClick={props.clickMethod(props.level)}>Get Room Choices</button>
    );

}


export default GenerateChoicesButton;