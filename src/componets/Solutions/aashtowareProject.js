import './index.css'
import { Grid } from '@mui/material';
import Nevbar from '../../coman/appbar';
import Foot from '../../coman/footer';
import photo1 from './img/apsb_tiertable.png';
import vidio1 from "./img/AASHTOWareProjectOverview.mp4";
import React from 'react';
import EastIcon from '@mui/icons-material/East';

const AashtowareProject = () => {
    return (
        <div>
            <div className='p-1'>
                <Nevbar />
                <h1 className='p-1-t1'>
                    The people behind AASHTOWare Project™
                </h1>
                <div className='p-1-t2'> For decades, we've been helping state DOTs automate the construction contract process from estimation to closeout. Our partnership with AASHTO helps power road and highway construction nationwide.</div>
                <button className='buton-1'>AASHTOWAREPROJECT.ORG <EastIcon className='arrow-1' /></button>
            </div>


            <div className='p-2'>
                <h2 className='p-2-t1'>Trusted AASHTOWare Project™ Contractor for over 30 Years
                </h2>
                <p className='p-2-t2'> In 1985, we sold an early version of our software to the American Association of State Highway and Transportation Officials (AASHTO). In the 30+ years that followed, our expert team has continued to support that software as an official contractor of AASHTOWare Project™.</p>
                <video className='Video' controls autoplay>
                    <source src={vidio1} type="video/mp4" />
                    <source src={vidio1} type="video/ogg" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className='p-3'>
                <Grid container spacing={2} className='P-3-1'>
                    <Grid container className='P-3-a'>
                        <Grid item xs={3} className='P-3-1-1'>

                        </Grid>
                        <Grid item xs={6} className='P-3-1-2'>
                            <p className='p-3-t1'>DOTs come to us for help with workflow inefficiencies like department silos, multiple data entry points, and a lack of data management and reporting standards.</p>
                        </Grid>
                        <Grid item xs={3} className='P-3-1-3'>
                            <p className='p-3-t2'> Infotech backs up highway construction with a team of 130+ software engineers, support specialists and industry experts.</p>
                        </Grid>
                    </Grid>
                    <Grid container className='P-3-a'>
                        <Grid item xs={3} className='P-3-2-1'>
                            .
                        </Grid>
                        <Grid item xs={3} className='P-3-2-2'>
                            <p className='p-3-t3'> Our priority is to work with you to help you find the best solutions to your biggest process challenges.</p>
                        </Grid>
                        <Grid item xs={3} className='P-3-2-3'>

                        </Grid>
                        <Grid item xs={3} className='P-3-2-4'>
                            <p className='p-3-t4'> 1500+ years of subject matter expertise advancing the infrastructure construction industry.</p>
                        </Grid>
                    </Grid>
                </Grid>
            </div>

            <div className='p-4'>
                <div className="p-4-1">
                    <h2 className='p-4-1-f1'>The Benefits of Advanced<br />Professional Services Bundles</h2>
                    <p className='p-4-1-f2'>Purchasing an Advanced Professional Services Bundle comes with a variety of benefits to your agency:</p>
                    <ul className='p-4-1-l'>
                        <li> Guarantee a response from Infotech to begin addressing your need within 3 days</li>
                        <li> Simplify procurement by only going through the procurement process once per year</li>
                        <li> Get more hours than you pay for through bonus hours in Tiers 2-4</li>
                        <li> Lock in today's price by purchasing 1, 2, or 3 year bundles</li>
                    </ul>
                </div>
                <div className="p-4-2">
                    <h2 className='p-4-1-f1'>Working with Infotech</h2>
                    <p className='p-4-2-f2'>Infotech works with agencies to assist in areas like implementation, product support, training, hosting, and more. These services can be paid for through Service Units or through a direct contract with Infotech.

                    </p>
                    <p className='p-4-2-f2'>To meet agency needs and simplify the procurement process, we provide flexible levels of additional service through our Advanced Professional Services Bundles. Each of our four bundle tiers offers a quantity of hours that can be leveraged for a wide variety of services including technical, professional/business, training, and data analysis. Infotech will meet with agencies to define requirements and start work within three business days or less.
                    </p>
                    <img src={photo1} alt="Table_photo" height={'224.18px'} width={'597.525px'} />
                    <p className='p-4-2-f3'><em>*Unused hours cannot be rolled over at the end of an annual period. Work must be completed within the terms of the annual contract, with a 30-day grace period.</em></p>
                </div>
            </div>
            <div className='p-5'>
                <Grid container spacing={2} className='P-5-1'>
                    <Grid item xs={1} >
                    </Grid>
                    <Grid item xs={5} className='P-5-1-1'>
                        <h2 className="p-5-t1">Want more information on bundles and the services they include?</h2>
                        <p className='p-5-t2'>Download our overview document below.</p>
                        <button className='button2'>LEARN MORE </button>
                    </Grid>
                    <Grid item xs={5} className='P-5-1-2'>
                    </Grid>
                    <Grid item xs={1} >
                    </Grid>
                </Grid>
            </div>

            <div className='p-6'>
                <button className='buton-1 button3'>AASHTOWAREPROJECT.ORG <EastIcon className='arrow-1' /></button>
            </div>
            <Foot />
        </div>
    );
}

export default AashtowareProject;
