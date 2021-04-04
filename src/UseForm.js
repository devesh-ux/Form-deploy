import {useState,useEffect} from 'react';

const UseForm = (callback,validate) => {
    const [values, setValues] = useState({
        email:'',
        password:'',
        // Tnc : false
    });
    const[errors,setErrors] = useState({});
    const[isSubmitting,setIsSubmitting] = useState(false);

    const handleChange = e =>{
        const {name, value} = e.target;
        setValues({
            ...values,
                [name]: value
            
        })

        // setValues(e.target.checked)
    };

    const handleSubmit = e =>{
        e.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
          }
    },[errors]);

    return {handleChange,values,handleSubmit,errors};
};

export default UseForm;
