import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div>
      <div className="backtoup">
        <div>Back to top</div>
      </div>

      <footer>
        <div class="footer-container">
          <div class="footer-section">
            <h3>Get to Know Us</h3>
            <ul>
              <li>About Amazon</li>
              <li>Careers</li>
              <li>Press Releases</li>
              <li>Amazon Science</li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Connect with Us</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Make Money with Us</h3>
            <ul>
              <li>Sell on Amazon</li>
              <li>Sell under Amazon Accelerator</li>
              <li>Protect and Build Your Brand</li>
              <li>Amazon Global Selling</li>
              <li>Supply to Amazon</li>
              <li>Become an Affiliate</li>
              <li>Fulfilment by Amazon</li>
              <li>Advertise Your Products</li>
              <li>Amazon Pay on Merchants</li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Let Us Help You</h3>
            <ul>
              <li>Your Account</li>
              <li>Returns Centre</li>
              <li>Recalls and Product Safety Alerts</li>
              <li>100% Purchase Protection</li>
              <li>Amazon App Download</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-logo">
            <img src="/assets/logo.png" alt="" />
          </div>
          <div class="footer-region">
            <button>English</button>
            <button>India</button>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Footer