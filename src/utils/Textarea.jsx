import React from 'react';

import '../styles/Textarea.css';

const Textarea = ({ value, onChange, name, error }) => {
    return (
        <div className="form-group">
            <textarea 
                value={value}
                onChange={onChange}
                name={name}
                id="newMessage"
                className="form-message"               
                type="text"
                placeholder="TVOJ TEXT" 
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
};
 
export default Textarea;

