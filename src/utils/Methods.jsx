import React, { Component } from 'react'

class Methods extends Component {
    state = {
        account: {},
        responses: [{}],
        errors: {}
    }

    //validation functions

    validate = () => {
        const errors = {};

        const { account } = this.state;
        if(account.newUsername.trim() === '')
          errors.newUsername = 'Vyplň svoje meno a priezvisko, prosím!';
        if(account.newMessage.trim() === '')
          errors.newMessage = 'Napíš svoje vyjadrenie, prosím!';

        return Object.keys(errors).length === 0 ? null : errors;
    }

    validateProperty = input => {
        if (input.name === 'newUsername') {
            if (input.value.trim() === '') return 'Vyplň svoje meno a priezvisko, prosím!';
        }
        if (input.name === 'newMessage') {
            if (input.value.trim() === '') return 'Napíš svoje vyjadrenie, prosím!';
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;

        const newResponse = {
            id: Math.max(...this.state.responses.map(r => r.id)) + 1,
            username: this.state.account.newUsername,
            message: this.state.account.newMessage,
            likes: this.state.account.newLikes

        }

        this.setState({
            responses: [...this.state.responses, newResponse]
        });

        this.handleResetForm();

        this.doSubmit()
    };

    handleChange = ({ currentTarget: input }) => {
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const account = {...this.state.account}
        account[input.name] = input.value;
        this.setState({ account, errors });
    }

    handleResetForm = () => {
        this.setState({
            account: {
                newUsername: '',
                newMessage: ''
            }
        });
    };

    handleDelete = response => {
        this.setState(state => {
            return {
                responses: state.responses.filter(item => item !== response)
            }
        })
    }

    handleLike = response => {
        const responses = [...this.state.responses];
        const index = responses.indexOf(response);
        responses[index] = {...responses[index] };
        responses[index].liked = !responses[index].liked;
        this.setState({ responses });
    };

}

export default Methods
