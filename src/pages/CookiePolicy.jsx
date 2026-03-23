import React from 'react';
import './CookiePolicy.css';

const CookiePolicy = () => {
  return (
    <div className="cookie-policy-container">
      <h1 className="cookie-policy-title">Cookie Policy</h1>
      <p className="cookie-policy-intro">
        This Cookie Policy explains how Unione ("Company", "we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our website at <a href="https://unione.com">unione.com</a> ("Website"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
      </p>

      <section className="cookie-policy-section">
        <h2 className="cookie-policy-section-title">What are cookies?</h2>
        <p>
          Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
        </p>
        <p>
          Cookies set by the website owner (in this case, Unione) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.
        </p>
      </section>

      <section className="cookie-policy-section">
        <h2 className="cookie-policy-section-title">Why do we use cookies?</h2>
        <p>
          We use first- and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Website for advertising, analytics and other purposes. This is described in more detail below.
        </p>
      </section>

      <section className="cookie-policy-section">
        <h2 className="cookie-policy-section-title">How can I control cookies?</h2>
        <p>
          You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.
        </p>
        <p>
          The Cookie Consent Manager can be found in the notification banner and on our website. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. You may also set or amend your web browser controls to accept or refuse cookies.
        </p>
      </section>

      <section className="cookie-policy-section">
        <h2 className="cookie-policy-section-title">What about other tracking technologies, like web beacons?</h2>
        <p>
          Cookies are not the only way to recognize or track visitors to a website. We may use other, similar technologies from time to time, like web beacons (sometimes called "tracking pixels" or "clear gifs"). These are tiny graphics files that contain a unique identifier that enable us to recognize when someone has visited our Website or opened an e-mail including them. This allows us, for example, to monitor the traffic patterns of users from one page within our Website to another, to deliver or communicate with cookies, to understand whether you have come to our Website from an online advertisement displayed on a third-party website, to improve site performance, and to measure the success of e-mail marketing campaigns. In many instances, these technologies are reliant on cookies to function properly, and so declining cookies will impair their functioning.
        </p>
      </section>

      <section className="cookie-policy-section">
        <h2 className="cookie-policy-section-title">How often will you update this Cookie Policy?</h2>
        <p>
          We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
        </p>
      </section>

      <section className="cookie-policy-section">
        <h2 className="cookie-policy-section-title">Where can I get further information?</h2>
        <p>
          If you have any questions about our use of cookies or other technologies, please email us at <a href="mailto:privacy@unione.com">privacy@unione.com</a>.
        </p>
      </section>
    </div>
  );
};

export default CookiePolicy;
