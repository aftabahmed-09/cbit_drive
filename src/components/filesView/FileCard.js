import React from 'react'
import '../../styles/FileCard.css'

import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

const FileCard = ({ name ,fileUrl    }) => {
    return (
        <div className='fileCard'>
            <a href={fileUrl} target="_blank" download>
            <div className="fileCard--top">
                <InsertDriveFileIcon style={{ fontSize: 130,color:'burlywood' }} />
            </div>

            <div className="fileCard--bottom">
                <p>{name}</p>
            </div>
            </a>
        </div>
    )
}

export default FileCard