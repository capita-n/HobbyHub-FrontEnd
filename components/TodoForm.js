
import List from '../components/TodoList';
import HobbyHub from '../Api/HobbyHub';

class TodoForm extends React.Component {
  state={
    name: '',
    items:[]
  }

  onChange = (event) => {
    this.setState({ name: event.target.value });
	}
	
	updateTodo = (data) => {                                                                                                                                                                                                                                                                          
		this.setState({                                                                                                                                                                                                                           
      items: [...data]
    });
  }
  
  

  onSubmit =  (event) => {
    event.preventDefault();
    HobbyHub.post('/hobbies',{name:this.state.name})
    .then(res=>{
      console.log("Hobby Route",{res})
      if (this.state.name) {
        this.setState({
          // name: '', 
          items: [...this.state.items, this.state.name]
        });
      }
    }).catch(err=>{
      console.log({err});
    })

  }
  
  render() {
    return (
      <div className="">
      <div className="card-title"><h2>Todo List App</h2></div>
        <form className="" onSubmit={this.onSubmit}>
          <input value={this.state.name} onChange={this.onChange} type="text" placeholder="Add a todo list..." />
          <button type="button" className="btn btn-primary">Add</button>
          <button type="button" className="btn btn-primary">view hobbies</button>
        </form>
        <List items={this.state.items} updateTodo={this.updateTodo} /> 
      </div>
    );
  }
}

export default TodoForm;