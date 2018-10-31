import React from 'react';
import { observer } from 'mobx-react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {

    render(){              
        return(
            <ul>
                {

                this.props.todos.map((todo, index)=>{
                    return (
                       <TodoItem key={index} 
                                 todo={todo} 
                                 index={index} 
                                 deleteTodo={this.props.deleteTodo}
                                 editTodo={this.props.editTodo}
                        />
                    );
                })
                
                }
            </ul>
        );
    }
}

export default observer(TodoList);