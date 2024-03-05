'use client'
import React from 'react';
import { MdDownloadForOffline } from 'react-icons/md';
import './style.css';

const DownloadButton = () => {

    const handleDownload = () => {
        console.log('Download button clicked');
    };


    return (
        <div className='download-div'>
            <img src="/asset/downloadimg.jpg" alt="" />
            <div className='d-flex flex-column align-items-center justify-content-center'>
                <h2 className='dw-title'>Download Our App</h2>
               <button className='download-button' onClick={handleDownload}><MdDownloadForOffline /> DOWNLOAD</button> 
            </div>
            
        </div>
        
    );
};

export default DownloadButton;
