import React from 'react';
import '../assets/style/About.css';

const About = () => {
  const teamMembers = [
    { name: "Idin Iskandar", role: "Web Developer", image: "https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/netflic/idincuy.jpg" },
    { name: "Zaskia Zenab", role: "System Analyst", image: "https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/netflic/_.sulqime._-20241230-0001.jpg" },
    { name: "Delia Aryu", role: "IT Consultant", image: "https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/netflic/_aryuuu_mn-20241230-0001.jpg" },
    { name: "Fiska Reviani", role: "Designer", image: "https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/netflic/_prissqnq.q-20241230-0001.jpg" },
    { name: "Dina Devina", role: "Business Analyst", image: "https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/netflic/IMG_20241230_145957.jpg" },
    { name: "Felya Fr", role: "Assistant", image: "https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/netflic/IMG_20241230_150012.jpg" },
    { name: "Sara Fiani", role: "Digital Marketing", image: "https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/netflic/__saaaara.__-20241230-0001.jpg" },
    { name: "Fika Iskandar", role: "Virtual Assistant", image: "https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/netflic/fiqqbtt-20241230-0002.jpg" },
  ];

  const frameworks = [
    { name: "Javascript", description: "A JavaScript library for building user interfaces", icon: "https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/iconjavascript.png" },
    { name: "Data Analyst", description: "A platform for building mobile and desktop web applications", icon: "https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/iconasisdata.png" },
    { name: "Ngoding", description: "The Progressive JavaScript Framework", icon: "https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/icon%20coding%20ungu.png" },
    { name: "Computing", description: "Cybernetically enhanced web apps", icon: "https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/icondataanalist.png" },
  ];
  return (
    <div className="about-container">
      <div className="profile-card">
        <img src="https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/netflic/logo2.png" alt="Profile" className="profile-image" />
        <div className="profile-text">
          <h2>About Us</h2>
          <p>Hello, my name is Idin Iskandar. Welcome to our website! We are dedicated to providing the best services to our clients. Our team is composed of highly skilled professionals who are passionate about their work. We strive to innovate and improve continuously to meet the needs of our customers. Thank you for visiting our site!</p>
        </div>
      </div>

      <div className="team-section">
        <h2>Our Team</h2>
        <p>Meet the amazing people who make everything possible. Our team is our greatest asset, and we are proud to showcase their talents and dedication.</p>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.image} alt={member.name} className="team-image" />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="frameworks-section">
        <h2>Frameworks We Use</h2>
        <p>We utilize a variety of frameworks to build robust and scalable applications. Here are some of the main frameworks we use:</p>
        <div className="frameworks-grid">
          {frameworks.map((framework, index) => (
            <div key={index} className="framework-card">
              <img src={framework.icon} alt={framework.name} className="framework-icon" />
              <h3>{framework.name}</h3>
              <p>{framework.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="contact-section">
        <div className="contact-card">
          <img src="https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/netflic/logo2.png" alt="Contact" className="contact-image" />
          <div className="contact-form">
            <h2>Contact Us</h2>
            <p>If you have any questions or inquiries, feel free to reach out to us through the contact form below. We are here to help you and look forward to hearing from you!</p>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;