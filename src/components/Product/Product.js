import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Selectionauto from '../Seletionauto/Selectionauto';
import Tree from '../Tree/Tree';
import './Product.css'

const Product = () => {
    const item = [];

    const [trees, setTrees] = useState([]);

    useEffect(() => {
        fetch('db.json')
            .then(res => res.json())
            .then(data => setTrees(data))
    }, [])

    const [sendtree, setSendtree] = useState([]);

    const bye = (data) => {
        if (sendtree.length === 4) {
            alert("You can select only four item")
        }

        else if (sendtree.indexOf(data) === -1) {
            const newTree = [...sendtree, data];
            setSendtree(newTree);
        }
    }

    return (
        <div className="all">
            <div className='trees'>
                {trees.map(tree =>
                    <Tree
                        tree={tree}
                        key={tree.id}
                        bye={bye}
                    ></Tree>
                )}
            </div>
            <Selectionauto
                item={sendtree}
            ></Selectionauto>
        </div>
    );
};

export default Product;