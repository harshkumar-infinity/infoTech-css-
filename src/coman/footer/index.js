import './index.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react';

const Foot = () =>
{
    return (
        <footer className='part5'>
            <div className="main">
                <div className="main1">
                    <div className='footbartext'> <a href="." className='hed hover sec'>Products</a><br /></div>
                    <div className='footbartext'> <a href="." className='first hover'> Appia®</a><br /></div>
                    <div className='footbartext'> <a href="/bidExpress" className='first hover'> Bid Express®</a><br /></div>
                    <div className='footbartext'> <a href="." className='first hover'> Doc Express®</a><br /></div>
                    <div className='footbartext'> <a href="." className='first hover'> Mobile Inspector®</a><br /></div>
                    <div className='footbartext'> <a href="." className='first hover'> Field Interviewer™</a><br /></div>
                    <div className='footbartext'> <a href="." className='first hover'> Estimator™</a><br /></div>
                    <div className='footbartext'> <a href="." className='first hover'> FieldManager®</a><br /></div>
                </div>
                <div className="main2">
                    <div className='footbartext'> <a href='.' className='hed sec'>Resources</a><br /></div>
                    <div className='footbartext'> <a href="." className='first hover'>  Blog</a><br /></div>
                    <div className='footbartext'> <a href="." className='first hover'>  Case Studies</a><br /></div>
                    <div className='footbartext'> <a href="." className='first hover'>  Webinars</a><br /></div>
                    <div className='footbartext'> <a href="." className='first hover'>  Events</a><br /></div>
                    <div className='footbartext'> <a href="." className='first hover'>  Product Guides</a><br /></div>
                    <div className='footbartext'> <a href="." className='first hover'>  System Status</a><br /></div>
                </div>
                <div className="main3">
                    <div className='footbartext'>  <a href="/company" className='hed sec hover'>Company</a></div>
                    <div className='footbartext'>  <a href="." className='sec hover'> Culture</a></div>
                    <div className='footbartext'>  <a href="." className='sec hover'> Careers</a></div>
                    <div className='footbartext'>  <a href="." className='sec hover'> Community</a></div>
                    <div className='footbartext'>  <a href="." className='sec hover'> News</a></div>
                    <div className='footbartext'>  <a href="/contact" className='sec hover'> Contact</a></div>
                </div>
                <div className="main4">
                    <a href="." className='hover sec'>AASHTOWare Project™</a>
                    <div className='main4-2'>
                        <FacebookIcon className='icon hover' />
                        <LinkedInIcon className='icon hover' />
                    </div>
                </div>
            </div>
            <div className="undar">
                <p>  Copyright © 2023, Info Tech, Inc., DBA Infotech. Info Tech ®</p>
                <p>
                    <a href="." className='undar-a hover'>  Legal Notices</a>
                    <a href="." className='undar-a hover'>  Terms of Service</a>
                    <a href="." className='undar-a hover'>  Privacy Policy</a>
                    <a href="." className='undar-a hover'>  DMCA Policy</a>
                    <a href="." className='undar-a hover'>  Trademarks</a>
                </p>
            </div>
        </footer>
    );
}

export default Foot;
