import * as React from 'react';
import { ForgotPasswordController } from '@studysocial/controller';
import { ForgotPasswordView } from '../forgotPassword/view/ForgotPasswordView';
import { RouteComponentProps } from 'react-router';


export class ForgotPasswordConnector extends React.PureComponent<RouteComponentProps<{}>> {
    onForgotPassword = () => {
        this.props.history.push('/confirmation/email', 
            { message: `We sent you an email to reset your password`});
    }
    render() {
        return (
            <ForgotPasswordController>
                {({submit}) => <ForgotPasswordView onForgotPassword={this.onForgotPassword} 
                    submit={submit} />}
            </ForgotPasswordController>
        );
    }
}