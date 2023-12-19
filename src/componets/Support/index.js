import React from 'react';
import './supp.css'
import Nevbar from '../../coman/appbar';
import Foot from '../../coman/footer';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Support = () =>
{
    return (
        <div>
            <div className='sup1'>
                <Nevbar />
                <div className='sup1-1'>
                    <h1 className="p1">
                        Support
                    </h1>
                    <p className='p2'>  Need help? We are here for you. Select the product
                        or service you need assistance with from the list.</p>
                    <div className="c">
                        <div className="dd">
                            <div className="dd-sup2">Select one<KeyboardArrowDownIcon className='d-arro' /></div>
                            <input type="checkbox" />
                            <div className="dd-c">
                                <ul>
                                    <li className='sup2-a'><a href="." >Appia®</a></li>
                                    <li className='sup2-a'><a href="." >Bid Express®</a></li>
                                    <li className='sup2-a'><a href="." >Doc Express®</a></li>
                                    <li className='sup2-a'><a href="." >Mobile Inspector® - Appia® field extension</a></li>
                                    <li className='sup2-a'><a href="." >Mobile Inspector® - AASHTOWare Project™ field extension</a></li>
                                    <li className='sup2-a'><a href="." >AASHTOWare Project™ Estimator</a></li>
                                    <li className='sup2-a'><a href="." >AASHTOWare Project™ FieldManager</a></li>
                                    <li className='sup2-a'><a href="." >AASHTOWare Project™</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Foot />
        </div>
    );
}

export default Support;
