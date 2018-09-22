import * as React from 'react';
import { graphql, ChildMutateProps } from 'react-apollo';
import gql from 'graphql-tag';
import { forgotPasswordChangeMutation, forgotPasswordChangeMutationVariables } 
  from '../../schemaTypes.ts/forgotPasswordChangeMutation';
import { normalizeErrors } from '../../utils/NormalizeErrors';

interface Props {
    children: (
        data: { submit: (values: forgotPasswordChangeMutationVariables) => Promise<any> }
    ) => JSX.Element | null;
}

export class CP extends React.PureComponent<
    ChildMutateProps<
      Props, 
      forgotPasswordChangeMutation, 
      forgotPasswordChangeMutationVariables>
> {
    submit = async(values: forgotPasswordChangeMutationVariables) => {
        console.log(values);
        const {
          data: { forgotPasswordChange }
        } = await this.props.mutate({
            variables: values
        });
        console.log(forgotPasswordChange);
        if(forgotPasswordChange) {
          return normalizeErrors(forgotPasswordChange);
        }
        return null;
    }
    render() {
        return this.props.children({ submit: this.submit });
    }
}

const changePasswordMutation = gql`
  mutation forgotPasswordChangeMutation($newPassword: String!, $key: String!) {
    forgotPasswordChange(newPassword: $newPassword, key: $key) {
      path
      message
    }
  }
`;

export const ChangePasswordController = graphql<
    Props,
    forgotPasswordChangeMutation,
    forgotPasswordChangeMutationVariables
    >(changePasswordMutation)(CP);