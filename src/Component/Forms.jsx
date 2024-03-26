// Forms.js

import React from 'react';
import { useForm } from "react-hook-form";
import "./Forms.css"; // Import CSS file for custom styling

function Forms() {
    const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm()

    function submit(data){
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)} className="form-container">
                {isSubmitSuccessful && <h3 className="success-message">Registration Successful</h3>}

                <div className="form-group">
                    <label htmlFor='firstname'>Enter your firstname</label>
                    <input type='text' placeholder='Enter your firstname' id='firstname'
                        {...register("firstname", {
                            required : "Your firstname is required"
                        })}
                    />
                    {errors.firstname && <p className="error-message">{errors.firstname.message}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor='lastname'>Enter your lastname</label>
                    <input type='text' placeholder='Enter your lastname' id='lastname'
                        {...register("lastname", {
                            required : "Your lastname is required"
                        })}
                    />
                    {errors.lastname && <p className="error-message">{errors.lastname.message}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor='email'>Enter your email</label>
                    <input type='email' placeholder='Enter your email' id='email'
                        {...register("email", {
                            required : "Your email is required",
                            pattern : {
                                value : /[a-z0-9_.]+@[a-z]+\.[a-z]/,
                                message : "Invalid email"
                            }
                        })}
                    />
                    {errors.email && <p className="error-message">{errors.email.message}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor='password'>Enter your password</label>
                    <input type='password' placeholder='Enter your password' id='password'
                        {...register("password", {
                            required : "Your password is required",
                            minLength : {
                                value: 4,
                                message : "The password should be more than 4 letters"
                            },
                            maxLength : {
                                value : 20,
                                message : "The password should be less than 20 letters"
                            }
                        })}
                    />
                    {errors.password && <p className="error-message">{errors.password.message}</p>}
                </div>

                <input type='submit' value="Register" className="submit-btn" />
            </form>
        </div>
    );
}

export default Forms;
