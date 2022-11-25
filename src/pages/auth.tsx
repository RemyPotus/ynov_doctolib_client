import {useState} from 'react';

function Auth() {

    const [seeLogin,setSeeLogin] = useState(true);
    const [email,setEmail] = useState('');

    const signUpForm = () => {
        return (
            <form>
            <h2>Sign Up!</h2>
            <fieldset>
              <legend>Create Account</legend>
              <ul>
                <li>
                  <label htmlFor="username">Username:</label>
                  <input type="text" id="username" required/>
                </li>
                <li>
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" required/>
                </li>
                <li>
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" required/>
                </li>
              </ul>
            </fieldset>
            <button>Submit</button>
            <button type="button" onClick={ () => setSeeLogin(true)}>Have an Account?</button>
          </form>
        );
    }

    const loginForm = () => {
        return (
            <form>
              <h2>Welcome Back!</h2>
              <fieldset>
                <legend>Log In</legend>
                <ul>
                  <li>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" required/>
                  </li>
                  <li>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" required/>
                  </li>
                </ul>
              </fieldset>
              <button>Login</button>
              <button type="button" onClick={ () => setSeeLogin(false)}>Create an Account</button>
            </form>
        )
    }

    return (
        <div>
            {seeLogin && loginForm()}
            {!seeLogin && signUpForm()}
        </div>

    )
}
export default Auth

