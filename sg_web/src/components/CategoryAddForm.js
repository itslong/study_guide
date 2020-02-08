import React, { Component } from 'react';

import { FormFields, Button } from './common';


const fields = [
    {type: 'input', name: 'category_name', label: 'Category Name'},
    {type: 'input', name: 'category_desc', label: 'Description'},
];


class CategoryAddForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category_name: '',
            category_desc: '',
            user_id: props.user_id
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

        const { category_name, category_desc, user_id } = this.state;
        const user = user_id || 1;

        const formValues = Object.assign({}, {
          category_name,
          category_desc,
          user
        }) ;


        // pass values to endpoint, then reset state.
        this.props.addCategory(formValues);
        this.props.getCategoriesByUser(user);

        this.setState({
            category_name: '',
            category_desc: '',
        })
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


export default CategoryAddForm;
