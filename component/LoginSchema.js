import * as Yup from 'yup'

//this is the form schema for our formik form, this is done using a package called Yup

//here you can easily add all form parameters or accepted inputs (password, email etc)
//and set their validation messages
export default Yup.object().shape({
    password: Yup.string()
        .min(2, "Password is Too short")
        .max(50, "Password is Too long")
        .required("Password is Required"),
    firstName: Yup.string()
        .min(2, "First Name is Too short")
        .max(50, "First Name Too long")
        .required("First Name Required"),
    lastName: Yup.string()
        .min(2, "Last Name is Too short")
        .max(50, "Last Name is Too long")
        .required("Last Name is Required"),
    email: Yup.string()
        .email("Invalid email")
        .required("Email is required")
})