import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addArticle } from '../../js/actions';
import { Button, Input } from '../common';


class ConnectedForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { title } = this.state;
        // read this compponent's state and pass the state to store
        // redux action called
        this.props.addArticle({ title });
        // clear this component's state
        this.setState({
            title: ''
        });
    }

    render() {
        const { title } = this.state;

        return (
            <form>
                <Input
                    id={"title"}
                    name={'title'}
                    title={"Title"}
                    value={title}
                    handleChange={this.handleChange}
                />
                <Button
                    type={"submit"}
                    title={"SAVE"}
                    action={this.handleSubmit}
                />
            </form>
        )
    }
}

// connects Redux actions to React props. Called before component is loaded.
const mapDispatchToProps = (dispatch) => {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
};

// connects ConnectedForm to redux store
// first arg must be null when mapStateToProps is absent; otherwise TypeError
const Form = connect(null, mapDispatchToProps)(ConnectedForm);


export default Form;
