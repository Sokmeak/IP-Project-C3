<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Categories</h3>
        <ul>
          <li><a href="#men">Men</a></li>
          <li><a href="#women">Women</a></li>
          <li><a href="#children">Children</a></li>
          <li><a href="#promotion">Promotions</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Contact</h3>

        <ul class="contact-info">
          <li>
            <i class="fa-solid fa-location-dot fa-xl"></i>
            <a href="149 Eo Preah Ang Yukanthor Street (19), Phnom Penh"
              >149 Eo Preah Ang Yukanthor Street (19), Phnom Penh</a
            >
          </li>
          <li>
            <i class="fa-solid fa-phone fa-xl"></i>
            <a href="tel:+85517546798">(+855) 17546798</a>
          </li>
          <li>
            <i class="fa-solid fa-envelope fa-xl"></i>
            <a href="mailto:angkorapparel@gmail.com">angkorapparel@gmail.com</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-links">
        <a ref="#">Copyright 2024 Angkor Apparel. All Rights Reserved.</a>
      </div>

      <div class="social-icons">
        <div class="linkedin">
          <a
            href="https://www.linkedin.com/in/sokmeak-saren-940a3123a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2B%2F93v%2BNHThu8%2FeuYsD0s2A%3D%3D"
            aria-label="LinkedIn"
            target="_blank"
            ><i class="fa-brands fa-linkedin-in fa-xl"></i
          ></a>
        </div>
        <div class="facebook">
          <a
            href="https://www.facebook.com/profile.php?id=100075852311589"
            target="_blank"
            aria-label="Facebook"
            ><i class="fa-brands fa-facebook-f fa-xl"></i
          ></a>
        </div>
        <div class="instagram">
          <a
            href="https://www.instagram.com/nokorkhmersilk?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            aria-label="Instagram"
            target="_blank"
            ><i class="fa-brands fa-square-instagram fa-xl"></i
          ></a>
        </div>
        <div class="twitter">
          <a
            href="https://x.com/SokmeakSaren"
            aria-label="Twitter"
            target="_blank"
            ><i class="fa-brands fa-twitter fa-xl"></i
          ></a>
        </div>
      </div>
      <div class="footer-links">
        <a href="#terms" target="_blank">Terms and Conditions</a>
        <a href="#privacy" target="_blank">Privacy Policy</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background-color: #1f2b57;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* padding: 0 0; */
  padding-top: 2rem;
}

.footer-container {
  display: flex;
  justify-content: space-around;
  /* padding: 20px 10px; */
  padding: 0 9rem 1rem 9rem;
}

.footer-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  margin: 0 10px;
}

.footer-section h3 {
  color: white;
  margin-bottom: 10px;
}

.footer-section ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  height: 9rem;
}
.contact-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* row-gap:10rem; */
}

.footer-section ul li {
  margin: 5px 0;
}

.footer-section ul li a {
  color: #aaa;
  text-decoration: none;
}

.footer-section ul li i {
  color: #fdb813;
  margin-right: 10px;
}
.footer-section ul li a:hover {
  color: rgb(101, 99, 99);
  text-decoration: underline;
  transition: color 0.3s, text-decoration 0.3s;
}

/* .contact-info{
  display: flex;
  flex-direction: column;
  row-gap:30px;
  background-color: purple;
} */
.contact-info li {
  margin-right: 10px;
  color: #aaa;
}

.footer-bottom {
  background-color: #0c1b37;
  color: #aaa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10%;
  font-size: 1rem;
  flex-wrap: wrap;
}

.social-icons {
  display: flex;
  color: #fdb813;
  justify-content: center;
  gap: 10px;
}

.social-icons div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #3b4a6b;
  color: white;
  margin: 0 5px;
  cursor: pointer;
  padding: 0;
  transition: background-color 0.3s, color 0.3s;
}

/* only icon */
.social-icons div i {
  color: white;
}

.social-icons div:hover {
  background-color: #fdb813;
  color: #e8e9ea;
}
.footer-links a {
  color: #aaa;
  margin: 0 5px;
  text-decoration: none;
}

.footer-links a:hover {
  color: #fdb813;
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    align-items: center;
  }
  .footer-section {
    margin-bottom: 20px;
  }
  .footer-bottom {
    flex-direction: column;
    align-items: center;
  }
}
</style>
