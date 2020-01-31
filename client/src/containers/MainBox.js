import React, {Component} from 'react';
import GameBoardContainer from './GameBoardContainer';
import ChoiceCardContainer from './ChoiceCardContainer';

class MainBox extends Component {

    render() {
        return(
            <>
            <GameBoardContainer />
            <ChoiceCardContainer />
            </>
        )
    }
}

export default MainBox;