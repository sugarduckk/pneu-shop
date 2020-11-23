import React from 'react';
import { cloneDeep, isFunction } from 'lodash/lang';
import useMounted from './useMounted';

const useForm = (defaultValues, handleSubmit, validate, reset = false) => {
  const [values, setValues] = React.useState(defaultValues);
  const [errors, setErrors] = React.useState({});
  const [disabled, setDisabled] = React.useState(false);
  const mounted = useMounted();
  React.useEffect(() => {
    if (validate) {
      setErrors(validate(values));
    }
  }, [values, validate]);
  const handleChange = React.useCallback((key, value) => {
    const newValues = cloneDeep(values);
    if (isFunction(value)) {
      setValues(values => {
        newValues[key] = value(values[key]);
        return newValues;
      });
    }
    else {
      newValues[key] = value;
      setValues(newValues);
    }
  }, [values]);
  const form = React.useCallback((name) => {
    return {
      name,
      value: values[name],
      error: errors[name],
      handleChange
    };
  }, [values, errors, handleChange]);
  const onSubmit = React.useCallback(e => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      setDisabled(true);
      Promise.resolve(handleSubmit(values))
        .finally(() => {
          if (mounted()) {
            setDisabled(false);
            if (reset) {
              setValues(defaultValues);
            }
          }
        });
    }
  }, [handleSubmit, mounted, values, defaultValues, reset, errors]);
  return { form, onSubmit, disabled, values, setValues };
};

export default useForm;