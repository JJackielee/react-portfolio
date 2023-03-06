import React, {useState} from 'react'

const ContactForm = () => {
    // validateemail function that test whether the passed in email is valid using regex to check the structure of the string passed in
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
    
        //uses the validateemail function to check if the email passed in is valid
        //if it isnt then it will set our error message. and stops the code
        if (!validateEmail(contactEmail)) {
          setErrorMessage('Email is invalid');
          return;
        }
    }

    //state variables declaration
    const [contactName, setContactName] = useState("")
    const [contactEmail, setContactEmail] = useState("")
    const [contactMessage, setContactMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    
    //handleerrorchange function to check if each input field is empty. if its empty then it will seterror message
    const handleErrorChange = e =>{
        if(!e.target.value){
           return setErrorMessage(e.target.name + " cannot be empty!")
        }
        if(!contactName) {
            setErrorMessage("Name cannot be empty!");
        } else if(!contactEmail){
            setErrorMessage("Email cannot be empty!");
        } else if(!contactMessage){
            setErrorMessage("Message cannot be empty!");
        } else {
            setErrorMessage("");
        }
    }

    //handlechange function that allows our input field to change our state variables
    const handleChange = e =>{
        const {name,value} = e.target;
        switch (name) {
          case "Name":
            setContactName(value)
            break;
          case "Email":
            setContactEmail(value)
            break;
          case "Message":
            setContactMessage(value)
            break;

          default:
            break;
        }
       }

       //input field uses handlechange function onChange so we can update our state variables
       //input field uses handleErrorchange function onBlur so when user clicks out of the input field if the field is empty error message will pop up
       //form uses handleFormSubmit function so we can check if the passed in email is and valid email
    return (
        <div className = "background">
            <div class="container">
                <br>
                </br>
                <h2 className="display-6 text-center">Contact Me</h2>
                <div class="row align-items-start">
                    <div class="col">
                        <form onSubmit={handleFormSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Name</label>
                                <input class="form-control" name="Name" onChange={handleChange} onBlur={handleErrorChange} value={contactName} placeholder="Enter Name"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email</label>
                                <input class="form-control" name="Email" onChange={handleChange}  onBlur={handleErrorChange} value={contactEmail} placeholder="Enter Email"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" name="Message" value={contactMessage}  onBlur={handleErrorChange} onChange={handleChange} placeholder="Message" rows="3"></textarea>
                            </div>
                            <p style={{color:'#ffc857'}}>{errorMessage}</p>
                            <button type="submit" class="btn btn-primary" >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )

}

export default ContactForm