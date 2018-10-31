import { extendObservable, action} from 'mobx';
// import remotedev from 'mobx-remotedev/lib';


class Todos {
    constructor() {
        extendObservable(this, {
            todos: [],
            get getTodos() {
                return this.todos;
            },
            addTodo: action((newTodo)=> {
                this.todos = this.todos.concat(newTodo);
                // console.log(this.todos);
            }),
            deleteTodo: action((index)=>{
                this.todos = [...this.todos.slice(0, index), ...this.todos.slice(index+1)];
            }),
            editTodo: action((index, updatedText)=>{
                // console.log(index);
                // console.log(updatedText);
                this.todos = [...this.todos.slice(0, index), updatedText ,...this.todos.slice(index+1)];
            })
        });
    }
}

export default new Todos();  //this works without using remotedev

// export default remotedev(new Todos()); // this does not seem to work
