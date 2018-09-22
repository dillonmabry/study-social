import * as React from 'react';
import { graphql, ChildMutateProps } from 'react-apollo';
import gql from 'graphql-tag';
import { RegisterMutation, RegisterMutationVariables } from '../../schemaTypes.ts/RegisterMutation';
import { normalizeErrors } from '../../utils/NormalizeErrors';

interface Props {
    children: (
        data: { submit: (values: RegisterMutationVariables) => Promise<any> }
    ) => JSX.Element | null;
}

export class RC extends React.PureComponent<
    ChildMutateProps<Props, RegisterMutation, RegisterMutationVariables>
> {
    submit = async(values: RegisterMutationVariables) => {
        console.log(values);
        const { data: {register} } = await this.props.mutate({
            variables: values
        })
        console.log("response: ", register);
        if(register) {
            return normalizeErrors(register);
        }
        return null;
    }
    render() {
        return this.props.children({ submit: this.submit });
    }
}

const registerMutation = gql`
  mutation RegisterMutation($email: String!, $password: String!) {
    register(email: $email, password: $password) {
        path
        message
    }
  }
`;

export const RegisterController = graphql<
    Props,
    RegisterMutation,
    RegisterMutationVariables
    >(registerMutation)(RC);