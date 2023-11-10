const footer = document.querySelector(".footer");
const pPolicy = document.querySelector(".p-policy-credit");

if (footer) {
  footer.innerHTML = `
    <div class="footer-section">
        <h2>NATIONAL RESOLUTION FOR CHANGE</h2>
        <p>Breaking the old Malawi, Building a new one</p>
      </div>
      <div class="footer-section">
        <h2>Browse</h2>
        <ul>
          <li>
            <a href="">
              Youth Governance
            </a>
            </li>
          <li>
            <a href="">
              Philosophy
            </a>
            </li>
          <li>
            <a href="">
              Projects
            </a>
            </li>
          <li>
            <a href="">
              News
            </a>
            </li>
          <li>
            <a href="">
              Profile
            </a>
            </li>
        </ul>
      </div>
      <div class="footer-section">
        <h2>Work with us</h2>
        <a class="cta nav-cta" href="get involved.html">
          Get involved
          <img
            src="public/icons/tabler-icon-arrow-right-white.svg"
            alt="right-icon"
          />
        </a>
      </div>
      <div class="footer-section">
        <h2>Follow us</h2>

        <a href="" class="cta-2"> Subscribe </a>

        <span class="contact-links">
          <a href="" class="contact-link">
            <img src="./public/icons/tabler-icon-brand-facebook.svg" alt="" />
          </a>
          <a href="" class="contact-link">
            <img src="./public/icons/tabler-icon-brand-instagram.svg" alt="" />
          </a>
          <a href="" class="contact-link">
            <img src="./public/icons/tabler-icon-mail.svg" alt="" />
          </a>
        </span>
      </div>

`;
}

if (pPolicy) {
  pPolicy.innerHTML = `
    <a href="">Privacy Policy</a>
      <span>Copyright © 2023 NRC</span>
      <span class="dl">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <img src="./public/logos/DL.png" alt="" />
          <span>Powered by</span> <b>Digital Lake Malawi</b>
        </a>
      </span>

`;
}
