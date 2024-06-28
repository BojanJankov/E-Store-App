import "./ContactPage.css";

function ContactPage() {
  return (
    <section className="ContactPage">
      <div className="ContactPageContainer">
        <div className="ContactInfoDiv">
          <h3>{}</h3>
          <form>
            <div className="form-container">
              <div className="row50">
                <div className="inputBox">
                  <span>First Name</span>
                  <input type="text" placeholder="First name" />
                </div>
                <div className="inputBox">
                  <span>Last Name</span>
                  <input type="text" placeholder="Last name" />
                </div>
              </div>
              <div className="row50">
                <div className="inputBox">
                  <span>Email</span>
                  <input type="text" placeholder="Email" />
                </div>
                <div className="inputBox">
                  <span>Mobile</span>
                  <input type="text" placeholder="+389 72 123 456" />
                </div>
              </div>
              <div className="row100">
                <div className="inputBox">
                  <span>{}</span>
                  <textarea placeholder="Write your message here..."></textarea>
                </div>
              </div>
              <div className="send-button">
                <div className="inputBox">
                  <button>Contact</button>
                </div>
              </div>
              <div className="MessageParagraph"></div>
            </div>
          </form>
        </div>
        <div className="ContactAppInformations">
          <div>
            <span>Contact via Email:</span>
            <p>estore.app@gmail.com</p>
          </div>
          <div>
            <span>Contact via Mobile:</span>
            <p>+389 72 562 487</p>
          </div>
          <div>
            <span>Contact via WebSite:</span>
            <p>www.e-store-app.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
