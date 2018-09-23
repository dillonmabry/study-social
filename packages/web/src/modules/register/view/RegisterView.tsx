import * as React from 'react'
import { Form as AntForm, Icon, Button } from 'antd';
import './RegisterView.css'
import { withFormik, FormikErrors, FormikProps, Field, Form } from 'formik';
import { validUserSchema } from '@studysocial/common';
import { InputField } from '@studysocial/web/src/modules/shared/InputField';
import { Link } from 'react-router-dom';

const FormItem = AntForm.Item;

interface FormValues {
    email: string,
    password: string
}

interface Props {
    submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>,
    onConfirm: () => void
}

class RegisterComponent extends React.PureComponent<FormikProps<FormValues> & Props> {
    render() {
        return (
            <div>
                <Form>
                    <h2 className="register-header">Register</h2>
                    <div className="register-form">
                        <Field
                            name="email"
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} /> as any}
                            placeholder="Register Email"
                            component={InputField}
                            autoComplete="username"
                        />
                        <Field
                            name="password"
                            type="password"
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} /> as any}
                            placeholder="Register Password"
                            component={InputField}
                            autoComplete="current-password"
                        />
                        <FormItem>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="register-form-button"
                            >
                                Register
                                        </Button>
                        </FormItem>
                        <FormItem>
                            <Link to="/login">Login</Link> Or <Link to="/forgot-password">Reset Password</Link>
                        </FormItem>
                    </div>
                </Form>
            </div>
        );
    }
}

export const RegisterView = withFormik<Props, FormValues>({
    validationSchema: validUserSchema,
    validateOnBlur: true,
    validateOnChange: false,
    mapPropsToValues: () => ({ email: "", password: "" }),
    handleSubmit: async (values, { props, setErrors }) => {
        const errors = await props.submit(values);
        if (errors) {
            setErrors(errors);
        } else {
            props.onConfirm();
        }
    }
})(RegisterComponent);