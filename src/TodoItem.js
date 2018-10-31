import React from 'react';
import { observer } from 'mobx-react';
import { extendObservable, action } from 'mobx';


class TodoItem extends React.Component {

    constructor() {
        super();

        this.todoItemLocalState = extendObservable(this, {
            isEditing: false,
            toggleEditing: action((value)=>{
                this.isEditing = value;
            })
        });
    }

    renderList = ()=> {
        return (<li>
            {this.props.todo}
            <button onClick={()=>{
                this.props.deleteTodo(this.props.index);
            }}>Delete</button>
            <button onClick={()=>{
                this.todoItemLocalState.toggleEditing(true);
            }}>Edit</button>
        </li>);
    }

    renderForm = ()=> {
        return(
            <form onSubmit={(e)=>{
                
                e.preventDefault();

                this.props.editTodo(this.props.index,this.refs.editTodo.value);
                this.todoItemLocalState.toggleEditing(false);
            }}>
                <input type="text" defaultValue={this.props.todo} ref="editTodo"/>
                <button type="submit">Edit</button>
            </form>
        );
    }

    render() {

        if(this.isEditing) {
            return this.renderForm();
        }
        
        return this.renderList();
        
    }
}


export default observer(TodoItem);
