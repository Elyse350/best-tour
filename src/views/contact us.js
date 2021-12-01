import React from "react";
import HomeLayout from "../components/homeLayout";

const Contactus =()=>{
    return(
        <HomeLayout>
            <section class="contact">
      <div class="content2">
        <h2>Contact Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          alias voluptatem beatae veniam, sapiente repellat, recusandae et animi
          ipsam cum ut. Veritatis minus provident nihil repellendus doloribus
          dignissimos aspernatur natus!
        </p>
      </div>
      <div class="contact-container">
        <div class="contactinfo">
          <div class="box">
            <div class="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></div>
            <div class="textbox">
              <h3>Address</h3>
              <p>KG 577 ST <br />RWANDA,KIGALI <br />Kacyiru</p>
            </div>
          </div>

          <div class="box">
            <div class="icon"><i class="fa fa-phone" aria-hidden="true"></i></div>
            <div class="textbox">
              <h3>Phone</h3>
              <p>+250781368636</p>
            </div>
          </div>
          <div class="box">
            <div class="icon"><i class="fa fa-envelope" aria-hidden="true"></i></div>
            <div class="textbox">
              <h3>Email</h3>
              <p>mutonielyse35@gmail.com</p>
            </div>
          </div>
        </div>
        <div class="contactform">
          <form> 
            <h2>Send Messange</h2>
            <div class="inputBox">
            <input type="text" name="" required="required"/>
            <span>Full Name</span>
            </div>
            <div class="inputBox">
              <input type="text" name="" required="required"/>
              <span>Email</span>
              </div>
              <div class="inputBox">
                <textarea required="required"></textarea>
                <span>Type Your Messange...</span>
                </div>
                <div class="inputBox">
                 <input type="submit" name="" value="Send"/>
                  </div>
          </form>
        </div>
      </div>
    </section>
        </HomeLayout>
    )
}
export default Contactus;