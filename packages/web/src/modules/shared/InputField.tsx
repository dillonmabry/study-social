import * as React from 'react';
import { FieldProps } from 'formik';
import { Form, Input } from 'antd';

const FormItem = Form.Item;

export const InputField: React.SFC<
    FieldProps<any> & { prefix: React.ReactNode, placeholder: any}
    > = ({
        field, // { name, value, onChange, onBlur }
        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
        ...props
    }) => {
    const errorMessage = touched[field.name] && errors[field.name];
    return (
        <FormItem help={errorMessage} validateStatus={errorMessage ? "error" : undefined}>
            <Input {...field} {...props} />
        </FormItem>
    )
}