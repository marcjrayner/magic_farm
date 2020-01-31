import React , {useState} from 'react';

const Cell = ({cell}) => {

    // const [empty, setEmpty] = useState(cell.empty);

        return (
            <article className={"cell " + (cell.empty? 'empty' : 'full') } />
        )
}

export default Cell;