// Header.jsx

// Import necessary dependencies
'use client';
import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Tooltip } from '@mui/material';
import RedditIcon from '@mui/icons-material/Reddit';
import GitHubIcon from '@mui/icons-material/GitHub';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


const Header = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const isScrollingDown = currentScrollPos > prevScrollPos;

            setPrevScrollPos(currentScrollPos);
            setIsVisible(!isScrollingDown);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);



    const toggleDarkMode = () => {

        setDarkMode(!darkMode);


        document.body.classList.toggle('dark-mode', !darkMode);


        document.body.classList.toggle('light-mode', darkMode);
    };

    const headerStyle = {
        backgroundColor: isVisible ? '#ff4500' : '#993399',
        transition: 'background-color 0.3s',
        position: 'sticky',
        borderBottom: isVisible ? '1px solid #ddd' : 'none',
    };

    const logoStyle = {
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        textDecoration: 'none',
    };

    const iconStyle = {
        fontSize: '24px',
    };

    const toggleButtonStyle = {
        marginLeft: 'auto',
    };


    return (
        <AppBar style={headerStyle}>
            <Toolbar>
                <a href="/" style={logoStyle}>
                    <RedditIcon style={iconStyle} />
                    <Typography variant="h7">
                        My Meme Gallery
                    </Typography>
                </a>


                <div style={toggleButtonStyle}>
                    <Tooltip title={darkMode ? 'Light Mode' : 'Dark Mode'}>
                        <IconButton color="inherit" onClick={toggleDarkMode}>
                            {darkMode ? (
                                <Brightness7Icon style={{ fontSize: '24px' }} />
                            ) : (
                                <Brightness4Icon style={{ fontSize: '24px' }} />
                            )}
                        </IconButton>
                    </Tooltip>
                </div>

                <div>
                    <Tooltip title="My GitHub Repository">
                        <IconButton
                            color="inherit"
                            component="a"
                            href="https://github.com/AnitBhattacharjee/reddit-meme-gallery"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GitHubIcon style={{ fontSize: '32px' }} />
                        </IconButton>
                    </Tooltip>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
