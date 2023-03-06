import React, {useState} from 'react'

const ContactForm = () => {

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
    
        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(contactEmail)) {
          setErrorMessage('Email is invalid');
          // We want to exit out of this code block if something is wrong so that the user can correct it
          return;
          // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
        }
    }

    const [contactName, setContactName] = useState("")
    const [contactEmail, setContactEmail] = useState("")
    const [contactMessage, setContactMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    
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