import React from 'react';
import './indus.css'
import Foot from '../../coman/footer';
import Nevbar from '../../coman/appbar';
import EastIcon from '@mui/icons-material/East';

function Industry()
{
    return (
        <div>
            <div className='com1'>
                <Nevbar />
                <h1 className='com1-t1'>Industry</h1>
                <p className='com1-t2'>
                    Infotech has powered the infrastructure construction industry for over 40 years. Learn more about how we work with contractors, consultants and owner-agencies to advance the industry through leading technology here.
                </p>
                <button className='buton-1 buttun'>LEARN MORE<EastIcon className='arroww' /></button>
            </div>
            <div className='com2'>
                <div className='com2in1'>
                    <div className='card1 '>
                        <div className='card1-1'><p className='card-t1'>BIM for Infrastructure</p></div>
                        <div className='card1-2'><p className='card-t2 '>LEARN MORE</p></div>
                    </div >
                    <div className='card2 '         >
                        <div className='card2-1'><p className='card-t1'>Let's Be Civil-an ITI Podcast</p></div>
                        <div className='card2-2'><p className='card-t2 '>LEARN MORE</p></div>
                    </div>
                </div>
            </div>
            <Foot />
        </div>
    );
}

export default Industry;
