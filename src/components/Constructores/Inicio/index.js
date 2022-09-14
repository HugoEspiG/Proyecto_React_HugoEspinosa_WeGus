import Imagen from '../Imagen';
import { getItem } from '../../../api/ItemApi';
import { useState, useEffect } from 'react';
import './Inicio.css'

export default function Inicio() {

    const [item, setItem] = useState({});

    useEffect(() => {
        async function loadUserInfo() {
            const resp = await getItem('jnQg6yZXlRdFvycTBjmz');
            setItem(resp)
        }
        loadUserInfo();
    }, [])


    return (
        <div>
            <div className='setPadding'>
                <div className="row g-0  bg-dark rounded">
                    <div className="col-sm-6 col-md-6" >
                        <Imagen src={item.img} tam='lg' ubi='float-end'></Imagen>
                    </div>
                    <div className="col-6 col-md-6 estiloImg">
                        <h2 className='text-light'>Lorem Ipsum</h2>
                        <p className='text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                </div>
            </div>
            <div className='setPaddingSup'>
                <h1 className='text-center'>Featured</h1>
                <div className="row g-0 rounded">
                    <div className="col-sm-6 col-md-4 setPaddingSup" >
                    <h2 className='text-dark'>Lorem Ipsum</h2>
                        <p className='text-dark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                    <div className="col-6 col-md-8">
                    <Imagen src={item.img} tam='lg' ubi='float-end'></Imagen>
                    </div>
                </div>
            </div>
        </div>
    )
}