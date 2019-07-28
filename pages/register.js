import Layout from "../components/Layout";
import HobbyHub from "../Api/HobbyHub";
import Router from "next/router"



class Register extends React.Component {

  state = {
      email: '',
      password: '',
      passwordLength: 8
  }

  onEmailChange = (event) => {
    this.setState({
      email: event.target.value
    });
  }

  onPasswordChange = (event) => {
    this.setState({
      password: event.target.value
    });
  }

  onSubmit= (event)=> {
    event.preventDefault();
    HobbyHub.post('user/signup',{ email:this.state.email, password:this.state.password})
    .then(res => {
      console.log({res})
      if (res.status === 200) {
      // alert(res.data.message)
      Router.push('/hobby')
      }
    
    }).catch(err => {
      console.error({err})
      alert("A USER WITH THAT EMAIL ALREADY EXIST!!!")
    })
    
    // console.log(response);

    // if (response.data.status === 'error') {
    //   alert(response.data.message)
    // }
    // else if (response.data.status === 'success') {
    //   alert(response.data.message)
    // }
    // else {
    //   alert('An error occured ')
    // }
  }

  render() {
    return (
      <Layout>
        <div>
        <form onSubmit={this.onSubmit} action="/user/signup" method="POST" className="form-signin">
        <div className="form-label-group">
          <input value={this.state.email} onChange={this.onEmailChange} type="email" id="inputEmail" name="email" className="form-control" placeholder="Email" required autoFocus />
        </div>
          <hr />
        <div className="form-label-group">
          <input value={this.state.password} onChange={this.onPasswordChange} type="password" id="inputPassword" name="password" className="form-control" placeholder="Password" required />
        </div>
  
        <div className="custom-control custom-checkbox mb-3">
          <input type="checkbox" className="custom-control-input" id="customCheck1" />
        </div>
        <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign Up!</button>
       
  </form>
        </div>
      </Layout>
    )
  }
  
}
 export default Register;