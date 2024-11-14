import React from 'react';
import '../Css/Contact.css'
import ContactImg from '../Images/Contact.png';
import ContactImg2 from '../Images/Contact2.png';

const Contact = () => {
  return (
    <>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 id='head5'>Get In Touch</h2>
            <form id="contactForm">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows="5"
                  required
                />
          
              </div>

              <button type="submit" className="btn">Submit</button>
            </form>

          </div>
          <div className="col-md-6">
            <img src={ContactImg} alt="Contact" width={400} />
          </div>
        </div>
      </div>
      </section>
      <hr />
    

      <section className='ContactSect'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6" >
             
            
            <div className="col-md-6" id='MapDiv'>
            <h1>Location</h1>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8979724198!2d77.04417397583121!3d28.527554408051664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1731571280779!5m2!1sen!2sus" 
                width="500" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map of New Delhi"
            ></iframe>
        </div>
            </div>
            <div className="col-md-6 " id='contactdiv'>
              <h2 id='HeadingCont'>Contact Details</h2>
              <p id='Contact'><i class="bi bi-telephone"></i> Phone: +91 90754xxx</p>
              <p id='Contact'><i class="bi bi-geo-alt"></i> Address:  123 Origami St, Language City,Delh</p>
              <p id='Contact'><i class="bi bi-envelope"></i> Email:info@origamienglish.com</p>
              <img src={ContactImg2} alt="Contact2" width={300} />
              

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
