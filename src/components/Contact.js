import React from 'react';
import '../css/contact.css';

const Contact = () => {
    return (
        <div className="contact">
      <h1>Contact Us</h1>
      <div className="contact-div">
          <p className="contact-info"> Phone: (347) 449-0795 </p>
          <p className="contact-info"> Email: BCapote@brilliance-fs.com </p>
      </div>
      <div className="form-div">
          <form action='./contact'>
            <label for="fname"> First name: </label>
            <input type="text" id="fname" name="fname"></input>

            <label for="lname"> Last name: </label>
            <input type="text" id="lname" name="lname"></input>
            <br></br>

            <label for="email" id="email-label"> Email: </label>
            <input type="text" id="email" name="email"></input>
            <br></br>

            <label for="priority" id='priority'> Priority : </label>
            <select>
                <optgroup label='a type of shade'> 
                    <option selected> high </option>
                    <option> medium </option>
                    <option> low </option>
                </optgroup>
            </select>
            <br></br>

            <input type="submit" id="submit" value="Submit"></input>
          </form>
          
      </div>
    </div>
  );
}

export default Contact;
