import React from 'react';
import './contect.css'
import Nevbar from '../../coman/appbar';
import Foot from '../../coman/footer';
import Form from '../../coman/form';
import { useNavigate } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East'; 

const Contact = () =>
{
    const neviget = useNavigate();
    return (
        <div>
            <div className='con-1'>
                <Nevbar />
                <div className='con-1-first'>
                    <h1 className="con1">Contact us</h1>
                    <strong className='p3'>ADDRESS</strong>
                    <p className='p4'>2970 SW 50TH TERRACE GAINESVILLE, FLORIDA 32608</p>
                    <a href="/" className='p5'>VIEW MAP</a><br /><br />
                    <strong className='p6'>PHONE</strong><br />
                    <a href="/" className='p7'>+1 352-381-4400</a><br /><br />
                    <strong className='p8'>FAX</strong><br />
                    <a href="/" className='p9'>+1 888-971-3916</a>
                    <p className='p10'>OR</p>
                    <button className='con-btn' onClick={ () => neviget('/support') }>VISIT PRODUCT SUPPORT <EastIcon className='arrow' /></button>
                </div>
                <div className='con-1-sec'>
                    <Form />
                </div>
            </div>
            <Foot />
        </div>
    );
}

export default Contact;
