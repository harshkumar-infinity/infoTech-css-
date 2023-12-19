import React from 'react';
import './com.css'
import Nevbar from '../../coman/appbar';
import Foot from '../../coman/footer';
import { Grid } from '@mui/material';
import phoro1 from './img/icons_all_icon_scales.png';
import EastIcon from '@mui/icons-material/East'; 

const Company = () =>
{
    return (
        <div className="company">
            <div className='c-1'>
                <Nevbar />
                <h1 className='c1-t1'>Bridging innovation and integrity for over 45 years</h1>
                <p className='c1-t2'>
                    We've built an enduring reputation for using technology and data to bring transparency, integrity and efficiency to everyone we serve.
                </p>
            </div>
            <div className='c-2'>
                <h2 className='c2-t1' >Treating People Right</h2>
                <p className='c2-t2'>Our mission is to set the standard for how a company should treat people - including employees - and then continue to raise the bar. We celebrate diversity, creativity and individuality. At Infotech, difference is not only accepted, it is welcomed and celebrated. We believe in investing in people and pride ourselves on building long-lasting, authentic relationships and treating people right. Or TPR, as we like to call it. <br /> <br /> Every day our people help us bridge innovation and integrity by developing cutting-edge digital solutions for the infrastructure construction industry and providing expert statistical and econometric consulting services across multiple industries.</p>
            </div>
            <div className='c-3'>
                <Grid container spacing={ 2 }>
                    <Grid item xs={ 1 } >
                    </Grid>
                    <Grid item xs={ 2.5 } className='c-3-g-1-1' >
                    </Grid>
                    <Grid item xs={ 5 } className='c-3-g-1-2'>
                        <p className='c-3-t1'>
                            OUR CULTURE
                        </p>
                        <p className='c-3-t2'>
                            Two university professors founded this company while working out of a garage to build something innovative and inclusive. Four decades later, we’re still working hard to grow in a way that keeps people and relationships at the forefront of progress - we just have nicer offices.
                        </p>
                        <p className='c-3-t3'>
                            LEARN MORE
                        </p>
                    </Grid>
                    <Grid item xs={ 2.5 } className='photo111'>

                    </Grid>
                    <Grid item xs={ 1 }>
                    </Grid>


                    <Grid item xs={ 1 }>

                    </Grid>
                    <Grid item xs={ 2.5 } className='c-3-g-2-1'>
                        <p className='grid-top'> OUR VALUES</p>
                        <p className='g2-t1'> Integrity</p>
                        <p className='g2-t1 col'> Insights</p>
                        <p className='g2-t1 col'> Inclusion</p>
                        <p className='g2-t1 col'> Innovation</p>
                    </Grid>
                    <Grid item xs={ 2.5 } className='c-3-g-2-2'>
                        <img src={ phoro1 } alt="" />
                        <p className='g2-t2'> As our founders often say - treat people right, the rest will follow.</p>
                    </Grid>
                    <Grid item xs={ 2.5 } className='c-3-g-2-3'>
                        {/* back photo */ }
                    </Grid>
                    <Grid item xs={ 2.5 } className='c-3-g-2-4'>
                        <p className='g2-t3'>  Breaking our own settlement records since our first $30 million case in 1981.</p>
                        <p className='g2-t4'>  CONSULTING</p>
                    </Grid>
                    <Grid item xs={ 1 }>

                    </Grid>


                    <Grid item xs={ 1 }>
                        .
                    </Grid>
                    <Grid item xs={ 2.5 } className='c-3-g-3-1'>
                        <p className='grid-top'> OUR COMMUNITY</p>
                        <p className='g3-t1'> We are committed to giving back to the communities in which we live and work.</p>
                        <p className='g3-t2'> LEARN MORE</p>
                    </Grid>
                    <Grid item xs={ 2.5 } className='photo111'>
                        {/* box */ }
                    </Grid>
                    <Grid item xs={ 2.5 } className='c-3-g-3-3'>
                        <p className='grid-top'> PEOPLE FIRST</p>
                        <p className='g3-t1'>
                            We believe work is a part of life, not the opposite. Our benefits and initiatives allow you to prioritize the things most important to you.
                        </p>
                        <p className='g3-t3'> EXPLORE BENEFITS</p>
                    </Grid>
                    <Grid item xs={ 2.5 } className='c-3-g-3-4'>
                        {/* back photo */ }
                    </Grid>
                    <Grid item xs={ 1 }>

                    </Grid>
                </Grid>
            </div>
            <div className='c-4'>
                <h1 className='c2-t1'>Our history</h1>
                <p className='c2-t2'>
                    There are endless milestones that define who Infotech is today. And that's not even the best part. Because this timeline isn't just meant to show our history - it's meant to show opportunity.
                </p>
            </div>
            <div className='c-5'>
                <div className='c-5-t1'>
                    <p className="t1-1"> 1970s</p>
                    <p className="t1-1"> 1980s</p>
                    <p className="t1-1"> 1990s</p>
                    <p className="t1-1"> 2000s</p>
                    <p className="t1-1"> 2010s</p>
                    <p className="t1-1"> 2020s</p>
                    <p className="t1-2"> Onward</p>
                </div>
                <div className='c-5-t2'>
                    <h3 className='t2-1'>Before It All Began</h3>
                    <h2 className='t2-2'> 1976</h2>
                    <p className='t2-3'> Dr. Jim McClave works out of his garage as a legal consultant when he's not teaching at the University of Florida. Meanwhile, at the University of Missouri, Dr. Tom Rothrock completes his Ph.D. thesis on the statistical analysis of sealed bid markets that would form the basis of our early techniques for detecting bid rigging.</p>
                    <button className='button-1'>NEXT <EastIcon className='arrow' /></button>
                </div>
            </div>
            <div className='c-6'>
                <div className='c-6-1'>

                </div>
                <div className='c-6-2'>
                    <h2 className='c-6-t1'>A state-of-the-art campus</h2>
                    <p className='c-6-t2'>
                        Our LEED-Gold certified building is located in the mixed-use community of Celebration Pointe. When they’re not relaxing on our roof terrace or playing a game of ping pong, our employees can be found exploring the green spaces, shops and restaurants that line the promenade of Celebration Pointe.
                    </p>
                </div>
            </div>
            <Foot />
        </div>
    );
}

export default Company;