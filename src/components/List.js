import React from 'react'; 
import Gif from './Gif'; 

const List = props => {
    const { guildwars } = props; 

    return (<div id="list">
        {
            guildwars.map(gif => {
                return(<Gif gif={gif}/>);
            })
        }
    </div>)
}

export default List; 