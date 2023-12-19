import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
const NoPage = () =>
{
    const neviget = useNavigate();
    return (
        <div className='back'>
            <button className='button' onClick={ () => neviget('/support') }>Go Home</button>
        </div>
    );
}

export default NoPage;
