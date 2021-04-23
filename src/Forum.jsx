import React from 'react';

//components
import Rating from './components/Rating';

//styles
import './styles/Forum.css';

const Forum = (props) => {
    return (
        <div className="home">
            <Rating />
        </div>
    );
}
 
export default Forum;