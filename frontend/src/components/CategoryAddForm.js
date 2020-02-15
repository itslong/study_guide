import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormFields, Button } from './common';
import { addCategoryToUser } from '../js/actions';

const fields = [
    {type: 'input', name: 'category_name', label: 'Category Name'},
    {type: 'input', name: 'category_desc', label: 'Description'},
];


class ConnectedCategoryAddForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category_name: '',
            category_desc: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { category_name, category_desc } = this.state;
        const { user } = this.props;
        // no longer need to get userId after Auth is implemented.
        const id = user.userId ? user.userId : 1;

        const formValues = Object.assign({}, {
            category_name,
            category_desc,
            user: id
        }) ;


        // pass values to endpoint, then reset state.
        this.props.addCategoryToUser(formValues);

        this.setState({
            category_name: '',
            category_desc: '',
        });
    }

    render() {
        const { category_name, category_desc } = this.state;

        // pass state values down as controlled inputs
        const stateVals = [category_name, category_desc];

        const fieldsWithHandler = fields.map((field, index) => {
            let fieldsWithActions = {
                ...field,
                onChange: this.handleChange,
                value: stateVals[index]
            };
            return fieldsWithActions;
        })


        const formFields = <FormFields fields={fieldsWithHandler} />

        return (
            <form>
                {formFields}
                <div>
                    <Button 
                        id={'submit-category'}
                        title={'Add New Cateogry'}
                        action={this.handleSubmit}
                    />
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    const { user } = state;

    return {
        user
    }
}

const CategoryAddForm = connect(mapStateToProps, { addCategoryToUser })(ConnectedCategoryAddForm);

export default CategoryAddForm;
