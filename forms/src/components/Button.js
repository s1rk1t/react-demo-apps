import React from 'react';

const Button = props => {

    return (
        <div className={props.className}>
            <button>{props.value}</button>
        </div>
    )

}

export default Button;