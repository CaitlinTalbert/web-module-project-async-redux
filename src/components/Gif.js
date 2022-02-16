import React from 'react'; 

const Gif = (props) => {
    const { gif } = props; 

    return(<div class="gif">
        <h3>{gif.name}</h3>
        <p>{gif.profession}</p>



    </div>)
}

export default Gif; 