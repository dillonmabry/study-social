import * as React from 'react';
import { ForgotPasswordController } from '@studysocial/controller';
import { ForgotPasswordView } from '../forgotPassword/view/ForgotPasswordView';


export class ForgotPasswordConnector extends React.PureComponent {
    render() {
        return (
            <ForgotPasswordController>
                {({submit}) => <ForgotPasswordView submit={submit} />}
            </ForgotPasswordController>
        );
    }
}