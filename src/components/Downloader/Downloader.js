import React, { useState } from 'react';
import { Buttonebook } from '../ButtonElement-download-ebook';

function Downloader() {

    const [download, setDownload] = useState('');
    

    return (
        <div>
            <Buttonebook><a href="/src/components/Downloader/book/book.rar" download style={{textDecoration: 'none', color: '#fff'}}>Download</a></Buttonebook>

        </div>
    )
}

export default Downloader
