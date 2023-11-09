import SignInForm from "../../components/Forms/signInForm"
import "./styles.css"

const SignIn = () =>{

    return(
        <div className="body">
          <div className="signin">
             <h2>INICIAR SESION</h2>
             <SignInForm/>
          </div>
        </div>
    )
}

export default SignIn