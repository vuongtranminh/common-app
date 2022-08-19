import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { isString } from '~/utils';

const useForm = (infomation) => {
    const [errors, setErrors] = useState({});

    const keyArray = Object.keys(infomation);

    const [state, setState] = useState(() => {
        return keyArray.reduce((object, key) => {
            return {
                ...object,
                [key]: infomation[key].initValue,
            };
        }, {});
    });

    const [initState, setInitState] = useState({});

    useEffect(() => {
        setInitState(state);
    }, []);

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const validate = () => {
        let error = '';
        const errors = keyArray.reduce((object, key) => {
            for (const rule of infomation[key].rules) {
                error = rule(state[key]);
                if (isString(error)) break;
            }
            return {
                ...object,
                [key]: error,
            };
        }, {});
        setErrors(errors);
    };

    const resetValidation = () => {
        setState(initState);
        setErrors({});
    };

    return { state, handleChange, errors, validate, resetValidation };
};

useForm.propTypes = {
    infomation: PropTypes.Object,
};

export default useForm;
