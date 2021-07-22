import React from 'react';


class TodoItemClass extends Comment {
    state = {checked: this.prop.defChk};

    render() {
        const { checked } = this.state;
        const { label } = this.props;

        return (
            <p onClick={() => this.setState({checked : !checked})}>
                {checked ? 'ok' : 'X'}
            </p>
        )


    }
};


export default TodoItemClass;