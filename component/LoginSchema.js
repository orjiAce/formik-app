import * as Yup from 'yup'

export default Yup.object().shape({
    password: Yup.string()
        .min(2, "Password is Too short")
        .max(50, "Password is Too long")
        .required("Required"),
    firstName: Yup.string()
        .min(2, "First Name is Too short")
        .max(50, "First Name Too long")
        .required("Required"),
    lastName: Yup.string()
        .min(2, "Last Name is Too short")
        .max(50, "Last Name is Too long")
        .required("Last Name is Required"),
    email: Yup.string()
        .email("Invalid email")
        .required("Email is required")
})