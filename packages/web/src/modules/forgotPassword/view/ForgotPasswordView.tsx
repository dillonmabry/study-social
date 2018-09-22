import * as React from 'react'
import { Form as AntForm, Icon, Button } from 'antd';
import './ForgotPasswordView.css'
import { withFormik, FormikErrors, FormikProps, Field, Form } from 'formik';
import { InputField } from '@studysocial/web/src/modules/shared/InputField';
import { Link } from 'react-router-dom';

const FormItem = AntForm.Item;

interface FormValues {
    email: string
}

interface Props {
    submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class ForgotPasswordComponent extends React.PureComponent<FormikProps<FormValues> & Props> {
    render() {
        return (
            <div>
                <h2 className="forgot-header">Reset Password</h2>
                <Form>
                    <div className="forgot-form">
                        <Field
                            name="email"
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} /> as any}
                            placeholder="Email"
                            component={InputField}
                            autoComplete="username"
                        />
                        <FormItem>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="forgot-form-button"
                            >
                                Reset Password
                                        </Button>
                        </FormItem>
                        <FormItem>
                            <Link to="/login">Login</Link> Or <Link to="/register">Sign-Up</Link>
                        </FormItem>
                    </div>
                </Form>
            </div>
        );
    }
}

export const ForgotPasswordView = withFormik<Props, FormValues>({
    mapPropsToValues: () => ({ email: "" }),
    handleSubmit: async (values, { props, setErrors }) => {
        const errors = await props.submit(values);
        if (errors) {
            setErrors(errors);
        }
    }
})(ForgotPasswordComponent);