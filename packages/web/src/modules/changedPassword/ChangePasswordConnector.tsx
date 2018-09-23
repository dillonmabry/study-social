import * as React from 'react';
import { ChangePasswordController } from '@studysocial/controller';
import { ChangePasswordView } from './view/ChangePasswordView';
import { RouteComponentProps } from 'react-router-dom';

export class ChangePasswordConnector extends React.PureComponent
  <RouteComponentProps<{key: string}>> {
    onChangePassword = () => {
      this.props.history.push('/login');
    }
    render() {
        const { 
          match: { 
            params: { key } 
          } 
        } = this.props;
        console.log(key);
        return (
            <ChangePasswordController>
              {({submit}) => <ChangePasswordView 
                onChangePassword={this.onChangePassword}
                submit={async({ newPassword}) => submit({key, newPassword})} 
              />}
            </ChangePasswordController>
        );
    }
}