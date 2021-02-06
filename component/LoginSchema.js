import * as Yup from 'yup'

export default Yup.object().shape({
    password: Yup.string()
        .min(2, "Too short")
        .max(50, "Too long")
        .required("Required"),
    email: Yup.string()
        .email("Invalid email")
        .required("This field is required")
})