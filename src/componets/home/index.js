import React from 'react';
import './all.css'
import Button from '@mui/material/Button';
import photo1 from './img/mndot_homepage_image.png';
import photo2 from './img/iti_employees_homepage.png';
import { Grid } from '@mui/material';
import photo3 from './img/remotebidding_zoom_small.jpg'
import photo4 from './img/tiles_road3.png'
import Foot from '../../coman/footer';
import Nevbar from '../../coman/appbar';
import EastIcon from '@mui/icons-material/East';
import MyForm from '../../coman/form';

const Homee = () => {
    return (
        <>
            <div className='part1'>
                <Nevbar />

                <p className='text1'>CASE STUDY</p><br />
                <p className='text2'>Watch our Trimble integration in action.</p>
                <p className='text3'>See how the team at the Minnesota DOT uses a mix of integrated field tools to make their digital inspection process 87% more efficient.</p>
                <img src={photo1} alt="." className='photo1' />
                <Button variant="contained" className='button1'>
                    WATCH NOW <EastIcon className='arro' />
                </Button>
                <div className="text4">Problems<br />we solve <br /><br /><br /><br /><b className='plus'>+</b></div>
            </div>
            <div className="part2">
                <img src={photo2} alt="" className="photo2" />
                <p className='text11'>Everything we do is centered on breaking new ground.</p>
                <p className="text12">Our Systems and Consulting businesses may be distinct, but we're united by the dual spirit of integrity and innovation present since our founding. Sometimes that means sifting out the truth through mountains of complex data. And sometimes it means literally helping companies break ground by revolutionizing their construction project management process. Powered by our values, we’ve led two industries forward and plan to keep helping companies advance the way they do business.</p>
            </div>

            <div className="part3">
                <Grid container spacing={0} columns={16} className='a1'>
                    <Grid item xs={4}>

                    </Grid>
                    <Grid item xs={4} className='a22'>
                        <p className='aa1'>BID EXPRESS®</p>
                        <p className='aa2'>We've processed nearly 700,000 bids worth $1.97 trillion</p>
                        <p className='aa3'>SEE ALL PRODUCTS</p>
                    </Grid>
                    <Grid item xs={4} className='a22'>
                        <div >
                            <img src={photo3} alt=" " />
                        </div>
                    </Grid>
                    <Grid item xs={4} className='a22 z'>
                        <p className='aaa1'>APPIA®</p>
                        <p className='aa2'>The Appia Referral Program</p>
                        <p className='aaa3'>GET A FREE LICENSE</p>
                    </Grid>
                </Grid>
                <Grid container spacing={0} columns={16} className='a1'>
                    <Grid item xs={4} className='a22 z2'>
                        <p className='aa1'>FOUNDATION</p>
                        <p className='aa2'>Veteran industry leader in statistical insights and construction software solutions</p>
                        <p className='b1'>COMPANY</p>
                    </Grid>
                    <Grid item xs={4} className='a22'>
                        <div >
                            <img src={photo4} alt=" " />
                        </div>
                    </Grid>
                    <Grid item xs={4} className='a22 z1'>
                        <p className='aaa1'>INSIGHTS</p>
                        <p className='aa2'>As long as variables and volume exist, accurate information will always be vulnerable.</p>
                        <p className='b2'>SEE ALL POSTS</p>
                    </Grid>
                    <Grid item xs={4}>

                    </Grid>
                </Grid>
                <Grid container spacing={0} columns={16} className='a1'>
                    <Grid item xs={4}>

                    </Grid>
                    <Grid item xs={4} className='a22 z3'>
                        <p className='aa1'> CONSULTING</p>
                        <p className='c2'>Consistently breaking records since our $30 million bid rigging case in 1981</p>
                        <p className='b2'>LEARN MORE</p>
                    </Grid>
                    <Grid item xs={4} className='a22'>
                        <div >
                            <img src={photo3} alt=" " />
                        </div>
                    </Grid>
                    <Grid item xs={4} className='a22 z2'>
                        <p className='aaa1'> CAREERS</p>
                        <p className='c2'> Let's build something great together. Come see what we're all about.</p>
                        <p className='b2'> OUR CULTURE</p>
                    </Grid>
                </Grid>
            </div>

            <div className="part4">

                <div className='part4-first'>
                    <h2 className="p1">What can Infotech solve for you?</h2>
                    <p className='p2'>Through technology and data analysis, we provide solutions to some of the most complicated problems on the planet. Let’s work together to find out how we can positively impact your process.</p>
                    <strong className='p3'>ADDRESS</strong>
                    <p className='p4'>2970 SW 50TH TERRACE GAINESVILLE, FLORIDA 32608</p>
                    <a href="/" className='p5'>VIEW MAP</a><br /><br />
                    <strong className='p6'>PHONE</strong><br />
                    <a href="/" className='p7'>+1 352-381-4400</a><br /><br />
                    <strong className='p8'>FAX</strong><br />
                    <a href="/" className='p9'>+1 888-971-3916</a>
                </div>
                <div className='part4-sac'>
                    {/* <FormCompo />
                     */}
                    <MyForm />
                </div>
            </div>

            <Foot />
        </>
    );
}

export default Homee;