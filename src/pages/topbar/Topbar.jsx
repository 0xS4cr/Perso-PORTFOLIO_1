import React from 'react';
import Logo from '../../components/logo/Logo';
import Navbar from '../../components/navbar/Navbar';

export default function Topbar () {

    return(
        <div className='topbar'>
            <Logo />
            <Navbar />
        </div>
    );
}
