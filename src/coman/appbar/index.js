import './index.css'
import React, { useState } from 'react';
import logo from '../img/2f9862420dadbbe27c3665a06195c4f6.png'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const settings = [ 'Profile', 'Account', 'Dashboard', 'Logout' ];

function Nevbar()
{
    const [ anchorElNav, setAnchorElNav ] = useState(null);
    const [ anchorElUser, setAnchorElUser ] = useState(null);

    const handleOpenNavMenu = (event) =>
    {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () =>
    {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () =>
    {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={ { backgroundColor: ' #00000000' } } elevation={ 0 }>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={ {
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        } }
                    >
                        <img src={ logo } alt='' className='logo' />
                    </Typography>

                    <Box sx={ { flexGrow: 1, display: { xs: 'flex', md: 'none' } } }>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={ handleOpenNavMenu }
                            color="'transparent'"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={ anchorElNav }
                            anchorOrigin={ {
                                vertical: 'bottom',
                                horizontal: 'left',
                            } }
                            keepMounted
                            transformOrigin={ {
                                vertical: 'top',
                                horizontal: 'left',
                            } }
                            open={ Boolean(anchorElNav) }
                            onClose={ handleCloseNavMenu }
                            sx={ {
                                display: { xs: 'block', md: 'none' },
                            } }
                        >

                        </Menu>
                    </Box>


                    <div className="dropdown">
                        <span>Solutions </span>

                        <div className="dropdown-content">
                            <p><a href=".">Construction Admin</a></p>
                            <p><a href=".">Bid Management</a></p>
                            <p><a href=".">Document Routing</a></p>
                            <p><a href="/aashtowareProject">AASHTOWare</a></p>
                            <p><a href=".">Mobile Field Tools</a></p>
                            <p><a href=".">Data Services</a></p>
                        </div>
                    </div><KeyboardArrowDownIcon className="downarrow" />
                    <div className="dropdown">
                        <span>Products</span>
                        <div className="dropdown-content">
                            <p><a href=".">Appia®</a> </p>
                            <p><a href="/bidExpress">Bid Express®</a> </p>
                            <p><a href=".">Doc Express®</a> </p>
                            <p ><a href="." className='dropinn'> FIELD EXTENSIONS</a></p>
                            <p><a href="."> Mobile Inspector®</a></p>
                            <p><a href="."> Field Interviewer™</a></p>
                            <p><a href="."> Estimator™</a></p>
                            <p><a href="."> FieldManager®</a></p>
                        </div>
                    </div><KeyboardArrowDownIcon className="downarrow" />
                    <div className="dropdown">
                        <span>Resources</span>
                        <div className="dropdown-content">
                            <p> <a href="/industry"> Industry</a></p>
                            <p> <a href="."> Blog</a></p>
                            <p> <a href="."> Case Studies</a></p>
                            <p> <a href="."> Webinars</a></p>
                            <p> <a href="."> Product Guides</a></p>
                            <p> <a href="."> Shopping Cart</a></p>
                        </div>
                    </div><KeyboardArrowDownIcon className="downarrow" />
                    <div className="dropdown">
                        <span>About</span>
                        <div className="dropdown-content">
                            <p><a href="/company"> Company</a></p>
                            <p><a href="."> Culture</a></p>
                            <p><a href="."> Careers</a></p>
                            <p><a href="."> Community</a></p>
                            <p><a href="."> Partnerships</a></p>
                            <p><a href="."> News</a></p>
                        </div>
                    </div><KeyboardArrowDownIcon className="downarrow" />
                    <div className="dropdown">
                        <span><a href="/contact">Contact</a></span>
                    </div>

                    <Box sx={ { flexGrow: 1, display: { xs: 'none', md: 'flex' } } }>

                    </Box>

                    <Box sx={ { flexGrow: 0 } }>


                        <span><a href="/support">Support</a></span>


                        <Menu
                            sx={ { mt: '45px' } }
                            id="menu-appbar"
                            anchorEl={ anchorElUser }
                            anchorOrigin={ {
                                vertical: 'top',
                                horizontal: 'right',
                            } }
                            keepMounted
                            transformOrigin={ {
                                vertical: 'top',
                                horizontal: 'right',
                            } }
                            open={ Boolean(anchorElUser) }
                            onClose={ handleCloseUserMenu }
                        >
                            { settings.map((setting) => (
                                <MenuItem key={ setting } onClick={ handleCloseUserMenu }>
                                    <Typography textAlign="center" className="dropdown">{ setting }</Typography>
                                </MenuItem>
                            )) }
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>

    );
}
export default Nevbar;