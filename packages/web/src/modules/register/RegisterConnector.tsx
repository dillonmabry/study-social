import * as React from 'react';
import { RegisterController } from '@studysocial/controller';
import { RegisterView } from './view/RegisterView';
import { RouteComponentProps } from 'react-router-dom'; 

export class RegisterConnector extends React.PureComponent<
    RouteComponentProps<{}>
    > {
    onConfirm = () => {
        this.props.history.push('/confirmation/email', 
            { message: `We sent you an email to confirm your account`});
    }
    render() {
        return (
        <RegisterController>
            {({ submit }) => <RegisterView onConfirm={this.onConfirm} submit={submit} />}
        </RegisterController>
        );
    }
}