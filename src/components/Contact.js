import React from 'react';
import '../css/contact.css';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import { Grid, Cell, ListItemContent } from 'react-mdl';





const Contact = () => {
    return (
      <div className="contact">

        <div className='contact-title'>
          <h1>Contact Us</h1>
        </div>

        <div className='contact-container'>
          <ul>

            <div className="contact-div">
                <p className="contact-info"> <PhoneIcon className='PhoneIcon'/> Phone: (347) 449-0795 </p>
                <p className="contact-info"> <EmailIcon className='EmailIcon'/> Email: BCapote@brilliance-fs.com </p>
            </div>

            <div className="form-div">
                <form action='./contact'>
                    <label for="fname"> First name: </label>
                    <input type="text" id="fname" name="fname"></input>

                    <label for="lname"> Last name: </label>
                    <input type="text" id="lname" name="lname"></input>

                    <br></br>
                  
                    <label for="email" id="email-label" placeholder="Enter your email"> Email: </label>
                    <input type="text" id="email" name="email"></input>
                    <br></br>

                    <label for="priority" id='priority'> Priority : </label>
                    <select>
                        <optgroup label='select'> 
                            <option selected> high </option>
                            <option> medium </option>
                            <option> low </option>
                        </optgroup>
                    </select>

                    <br></br>

                    <input type="submit" id="submit" value="Submit"></input>
                </form>
            </div>
          </ul>
        </div>
    </div>
  );
}

export default Contact;
