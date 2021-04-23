import React from 'react';

import '../styles/Input.css';

const Input = ({ value, onChange, name, error }) => {
    return (
        <div className="form-group">
            <input 
                value={value}
                onChange={onChange}
                name={name}                
                id="newUsername"
                className="form-name" 
                type="text"
                autoFocus 
                placeholder="MENO A PRIEZVISKO" 
            />   
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}
 
export default Input;