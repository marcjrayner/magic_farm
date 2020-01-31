import React , {useState} from 'react';

const Cell = ({cell}) => {

    const [empty, setEmpty] = useState(cell.empty);

        return (
            <article className={"cell " + ({empty}? 'empty' : '') } />
        )
}

export default Cell;