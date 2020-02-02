import React, {Component} from 'react';
import Room from '../rooms/Room';

class MouseObject extends Component {

    constructor(props){
        super(props);
        this.doNothing = this.doNothing.bind(this);
    };

    doNothing() {
        console.log("Selecting This Room Does Nothing Here");
    };

    render() {
    
        return (
            <>
                    <Room clickMethod={this.doNothing}
                        hoverMethod={this.doNothing}
                        className={'mouse-object '}
                        position={this.props.position}
                        room={this.props.mouseObject.objectData} />
            </>
            )
        };
    
}
export default MouseObject;