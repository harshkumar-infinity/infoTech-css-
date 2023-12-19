import React from 'react';
import './bid.css'
import Nevbar from '../../coman/appbar';
import Foot from '../../coman/footer';
import EastIcon from '@mui/icons-material/East'; 

function BidExpress()
{
    return (
        <div>
            <div className='c-1'>
                <Nevbar />
                <div className='c-1-1'>

                    <div className='c-1-1-1'>
                        <p className='c-1-t1'>BIDEXPRESS.COM</p>
                        <h2 className='c-1-t2'>Bidding for State & Local Construction + General Procurement</h2>
                        <div className='btns'>
                            <button className='btnpri a all '>LEARN MORE <EastIcon className='arrow' /></button>
                            <button className='btn a all '>CURRENT USER? LOGIN HERE<EastIcon className='arrow' /></button>
                        </div>
                    </div>
                    <div className='c-1-1-2'>
                        <p className='c-1-t3'>BIDX.COM</p>
                        <h2 className='c-1-t4'>Bidding For State Highway + Bridge Projects</h2>
                        <div className='btns'>
                            <button className='btnpri b all '>LEARN MORE<EastIcon className='arrow' /></button>
                            <button className='btn b all '>CURRENT USER? LOGIN HERE<EastIcon className='arrow' /></button>
                        </div>
                    </div>
                </div>
            </div>

            <Foot />
        </div>
    );
}

export default BidExpress;
