import React from 'react';

const Year = new Date().getFullYear();

const Footer = () =>{
    return (
        <>
            <footer>
                <div className=" position-fixed bottom-0 text-center w-100 footer-page">© {Year} Copyright</div>
            </footer>
        </>
    );
}

export default Footer;