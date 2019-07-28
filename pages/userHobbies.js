
import List from '../components/TodoList';
import HobbyHub from '../Api/HobbyHub';

class UserHobbies extends React.Component {
//   state={
//     name: '',
//     items:[]
//   }

//   onChange = (event) => {
//     this.setState({ name: event.target.value });
// 	}
	
// 	updateTodo = (data) => {
// 		this.setState({
//       items: [...data]
//     });
//   }
  


  onSubmit =  (event) => {
    event.preventDefault();
    HobbyHub.get('/hobbies')
    .then(res=>{
      console.log("Hobby Route",{res})
      // if (this.state.name) {
      //   this.setState({
      //     // name: '', 
      //     items: [...this.state.items, this.state.name]
      //   });
      // }
    }).catch(err=>{
      console.log({err});
    })

  }
  
 
}

export default UserHobbies;