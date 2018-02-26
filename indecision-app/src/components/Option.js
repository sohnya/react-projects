import React from 'react';

const Option = (props) => (
    <div>
        <br />
        {props.optionText}
        <button
            onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}
        >Remove</button>
    </div>
);

export default Option;