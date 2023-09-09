import React from 'react'
import "./sign-up.css"

function Sign(){
   return(
    <div className="container">
    <div className="container-inner">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Stay updated with our latest news and offers!</p>
        <form id="newsletter-form">
            <input type="email" id="email" name="email" placeholder="Enter your email address" required/>
            <button type="submit">Subscribe</button>
        </form>
    </div>
</div>

   )
       
};

export default Sign;