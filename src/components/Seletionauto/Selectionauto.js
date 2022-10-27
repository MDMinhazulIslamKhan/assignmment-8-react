import React from 'react';
import { useState } from 'react';
import './Selectionauto.css'

const Selectionauto = (props) => {
    const itemS = props.item;

    const [img, setImg] = useState('');

    const click = () => {
        const id = itemS.map(item => item.id);
        const num = parseInt(Math.random() * 10);
        if (id.indexOf(num) === -1) {
            click();
        }
        else {
            const p = './img/' + num + '.jpg'
            setImg(p);
        }
    }
    return (
        <div className='selection'>
            <h3>Selected item</h3>
            {itemS.map(item =>
                <div className='showSelect' key={item.id}>
                    <img src={item.img} alt="" />
                    <h4>{item.name}</h4>
                </div>)
            }
            <button onClick={click}>Choose one for me</button>
            <div>
                <img style={{ width: '150px' }} src={img} alt="" />
            </div>

        </div >
    );
};

export default Selectionauto;
