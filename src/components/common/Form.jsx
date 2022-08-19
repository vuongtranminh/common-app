import React from 'react';

const Form = (props) => {
    const { children, name, onSubmit } = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <form name={name} onSubmit={handleSubmit}>
            {children}
        </form>
    );
};

export default Form;
