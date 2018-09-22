import * as React from 'react'
import { withFormik, FormikErrors, FormikProps, Field } from 'formik';
import { loginSchema } from '@studysocial/common';
import { View, Button, Text } from 'react-native';
import { InputField } from '@studysocial/app/src/modules/shared/InputField';
import { Card } from 'react-native-elements';

interface FormValues {
    email: string,
    password: string
}

interface Props {
    submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class LoginComponent extends React.PureComponent<FormikProps<FormValues> & Props> {
    render() {
        const { handleSubmit } = this.props;
        return (
            <View style={{ 
                    flex: 1, 
                    flexDirection: "column", 
                    justifyContent: "center",
                    margin: 30, 
                    marginTop: 50 
                }}>
                <Card>
                    <Text style={{fontSize: 18, marginBottom: 10}}>Login</Text>
                    <Field
                        name="email"
                        placeholder="Email"
                        component={InputField}
                        containerStyle={{ width: "100%"}}
                        autoCapitalize="none"
                    />
                    <Field
                        name="password"
                        secureTextEntry={true}
                        placeholder="Password"
                        component={InputField}
                        containerStyle={{ width: "100%"}}
                        autoCapitalize="none"
                    />
                    <View style={{ marginTop: 20 }}>
                        <Button 
                            title="Login"
                            onPress={handleSubmit as any} 
                        />
                    </View>
                </Card>
            </View>
        );
    }
}

export const LoginView = withFormik<Props, FormValues>({
    validationSchema: loginSchema,
    mapPropsToValues: () => ({ email: "", password: "" }),
    handleSubmit: async (values, { props, setErrors }) => {
        const errors = await props.submit(values);
        if (errors) {
            setErrors(errors);
        }
    }
})(LoginComponent);