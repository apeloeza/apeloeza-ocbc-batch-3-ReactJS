import React, {useState, useEffect} from 'react';
import Recursive from './Recursive';
import axios from 'axios';


const Menu = () => {
    const [menu, setMenu] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:5000/debug')
        .then(response => {
            setMenu(response.data)
        });
    }, []);

    
    return (
        <div>
            {menu.map(item => {
                return(
                <Recursive key={item.id} {...item}/>
                );
            })}
        </div>
    );
};

export default Menu;