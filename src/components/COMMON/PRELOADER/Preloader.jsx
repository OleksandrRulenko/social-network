import React from 'react';
import preloader from '../../../ASSETS/IMAGES/preloader.gif';

let Preloader = (props) => {
    return <div style={ { backgroundColor: '#14141f' } }>
        <img src={ preloader }/>
    </div>
}

export default Preloader;
