import * as React from 'react'
import { Form as AntForm, Icon, Button } from 'antd';
import './ChangePasswordView.css'
import { withFormik, FormikErrors, FormikProps, Field, Form } from 'formik';
import { InputField } from '@studysocial/web/src/modules/shared/InputField';
import { changePasswordSchema } from '@studysocial/common';
import { Link } from 'react-router-dom';

const FormItem = AntForm.Item;

interface FormValues {
    newPassword: string
}

interface Props {
    submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class ChangePasswordComponent extends React.PureComponent<FormikProps<FormValues> & Props> {
    render() {
        return (
            <div>
                <h2 className="changep-header">Reset Password</h2>
                <Form>
                    <div className="changep-form">
                        <Field
                            name="newPassword"
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} /> as any}
                            placeholder="New Password"
                            type="password"
                            component={InputField}
                            autoComplete="username"
                        />
                        <FormItem>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="changep-form-button"
                            >
                                Change Password
                                        </Button>
                        </FormItem>
                        <FormItem>
                            <Link to="/login">Login</Link>
                        </FormItem>
                    </div>
                </Form>
            </div>
        );
    }
}

export const ChangePasswordView = withFormik<Props, FormValues>({
    validationSchema: changePasswordSchema,
    mapPropsToValues: () => ({ newPassword: "" }),
    handleSubmit: async (values, { props, setErrors }) => {
        const errors = await props.submit(values);
        if (errors) {
            setErrors(errors);
        }
    }
})(ChangePasswordComponent);