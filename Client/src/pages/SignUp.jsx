import { useFormik } from 'formik'
import * as yup from 'yup'
import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    let navigate = useNavigate()
    const formik = useFormik({
        initialValues:{
            firstname:'',
            lastname:'',
            phonenumber:'',
            email:'',
            password:'',
            repeat_password : '',
            occupation : ''
        },
        validationSchema : yup.object({
            firstname : yup.string().required( "First name is required" ),
            lastname : yup.string().required( "Last name is required" ),
            email : yup.string().required( "Email is required" ),
            phonenumber : yup.string().required( "Phone number is required" ).min(11, "input a complete number"),
            password : yup.string().required( "Password is required" ),
            repeat_password : yup.string().required( "Password is required" ),
            occupation : yup.string()
        }),
        onSubmit: (value)=>{
                console.log(value);
                axios.post("http://localhost:5000/user/register", value)
                .then((response)=>{
                    console.log(response.data);
                    // navigate('/signin')
                    
                })
                .catch((err)=>{
                    console.log(err);
                })
        }
    })

  return (
    <div className='my-16 mx-3'>
        <h1 className='mb-6'>Sign up</h1>
        

            <form className="max-w-md mx-auto" onSubmit={formik.handleSubmit} >
            <div className="relative z-0 w-full mb-5 group">
                <input 
                    type="email" 
                    name="email" id="floating_email" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className={formik.touched.email && formik.errors.email ? "errorInput peer" : "input peer"} 
                    placeholder=" " />
                <label for="floating_email" className={formik.touched.email && formik.errors.email ? "errorLabel" : "label"}>Email address</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input 
                    type="text" 
                    name="password" id="floating_password" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    className={formik.touched.password && formik.errors.password ? "errorInput peer" : "input peer"}
                    placeholder='' />
                <label for="floating_password" className={formik.touched.password && formik.errors.password ? "errorLabel" : "label"}>Password</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="repeat_password" id="floating_repeat_password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.repeat_password}
                  className={formik.touched.repeat_password && formik.errors.repeat_password ? "errorInput peer" : "input peer"}  placeholder=" " />
                <label for="floating_repeat_password" className={formik.touched.repeat_password && formik.errors.repeat_password ? "errorLabel" : "label"}>Confirm password</label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="firstname" id="floating_first_name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstname}
                        className={formik.errors.firstname&&formik.touched.firstname ? "errorInput peer" : "input peer"}  placeholder=" " />
                    <label for="floating_first_name" className={formik.errors.firstname&&formik.touched.firstname? "errorLabel": "label"}>First name</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="lastname" id="floating_last_name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastname}
                    className={formik.errors.lastname&& formik.touched.lastname ? "errorInput peer" : "input peer"}  placeholder=" " />
                    <label for="floating_last_name" className={formik.errors.lastname&&formik.touched.lastname?"errorLabel":"label"}>Last name</label>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="tel" name="phonenumber" id="floating_phone"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phonenumber}  
                    className={formik.errors.phonenumber&&formik.touched.phonenumber ? "errorInput peer" : "input peer"}  placeholder=" " />
                    <label for="floating_phone" className={formik.errors.phonenumber&&formik.touched.phonenumber?"errorLabel":"label"}>Phone number (123-456-7890)</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="occupation" id="floating_company" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.occupation}
                    className={formik.errors.occcupation&&formik.touched.occupation?"errorInput peer":"input peer"} placeholder=" " />
                    <label for="floating_company" className={formik.errors.occupation&&formik.touched.occupation?"errorLabel":"label"}>Occupation</label>
                </div>
            </div>
            <button type="submit" className="text-white bg-neutral-700 hover:bg-neutral-800 focus:ring-4 focus:outline-none focus:ring-transparent font-medium rounded text-sm w-full  px-5 py-2.5 text-center dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800">Submit</button>
            </form>

    </div>
  )
}

export default SignUp