import  {Form} from "formik";
import loginStyle from '../styles/Login.module.scss'
export default (({handleChange, values, errors, isValid}) =>{
return (<Form>
    <div style={loginStyle.signup}>
<input type='email'
onChange={handleChange}
       value={values.email}
       name='email'
       placeholder='Email'

/>
<input type='password'
onChange={handleChange}
       value={values.password}
       name='password'
       placeholder='Your password'

/>

<button disabled={!isValid}>
    Signup
</button>
    </div>
</Form>)
})