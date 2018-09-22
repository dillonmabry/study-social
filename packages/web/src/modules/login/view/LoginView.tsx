import * as React from 'react'
import { Form as AntForm, Icon, Button } from 'antd';
import './LoginView.css'
import { withFormik, FormikErrors, FormikProps, Field, Form } from 'formik';
import { loginSchema } from '@studysocial/common';
import { InputField } from '@studysocial/web/src/modules/shared/InputField';
import { Link } from 'react-router-dom';

const FormItem = AntForm.Item;

interface FormValues {
    email: string,
    password: string
}

interface Props {
    submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class LoginComponent extends React.PureComponent<FormikProps<FormValues> & Props> {
    render() {
        return (
            <div>
                <Form>
                    <h2 className="login-header">Login</h2>
                    <div className="login-form">
                        <Field
                            name="email"
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} /> as any}
                            placeholder="Email"
                            component={InputField}
                            autoComplete="username"
                        />
                        <Field
                            name="password"
                            type="password"
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} /> as any}
                            placeholder="Password"
                            component={InputField}
                            autoComplete="current-password"
                        />
                        <FormItem>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                            >
                                Login
                        </Button>
                        </FormItem>
                        <FormItem>
                           <Link to="/register">Sign-Up</Link> Or <Link to="/forgot-password">Forgot Password</Link>
                        </FormItem>
                    </div>
                </Form>
            </div>
        );
    }
}

export const LoginView = withFormik<Props, FormValues>({
    validationSchema: loginSchema,
    validateOnBlur: false,
    validateOnChange: false,
    mapPropsToValues: () => ({ email: "", password: "" }),
    handleSubmit: async (values, { props, setErrors }) => {
        const errors = await props.submit(values);
        if (errors) {
            setErrors(errors);
        }
    }
})(LoginComponent);