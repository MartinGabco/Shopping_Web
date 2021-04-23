import React from 'react';

import './style/Input.css';

const Input = ({ name, value, error, ...rest }) => {
    return (
        <React.Fragment>
            <input 
                {...rest}
                name={name}    
                id={name}                            
                autoFocus 
                placeholder="MENO A PRIEZVISKO" 
            />
                <div className="input-alert">{error && <div className="alert alert-danger">{error}</div>}</div>           
        </React.Fragment>
    );
}
 
export default Input;