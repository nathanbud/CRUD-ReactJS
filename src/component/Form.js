import React from 'react'

const Form =() =>{
    
    return(
        <div>
        <form className="contact-form">
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <div className="submit-container">
            <input type="submit" value="Sign In"/>
            <input type="submit" value="Sign Up"/>
            </div>
        </form>
        </div>

    )
} 

export default Form;