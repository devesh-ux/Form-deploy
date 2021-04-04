import React ,{useState} from 'react';
import FormSignUp from './FormSignUp';
import FormSuccess from './FormSuccess';
import './Form.css';

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm(){
        // console.log("devro");
        setIsSubmitted(true);
        
    }
    
    return (
        <>
        <div className='form-container'>
              
              {!isSubmitted ?  (<FormSignUp submitForm = {submitForm} />) : (<FormSuccess/>)}
              {/* <FormSuccess/> */}
        </div>
        </>
    )
}

export default Form
