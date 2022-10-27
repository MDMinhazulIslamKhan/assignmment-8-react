import React from 'react';
import './Tree.css'

const Tree = (props) => {
    const { name, price, img } = props.tree;
    return (
        <div className='card-item'>
            <img src={img} alt="" />
            <div className="card-details">
                <h3>Tree name: {name}</h3>
                <p>Price: {price}</p>
                <button onClick={() => { props.bye(props.tree) }}>Bye now</button>
            </div>
        </div>
    );
};

export default Tree;