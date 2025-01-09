import React from 'react';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-5">
      <div className="container-fluid px-5">
        {/* Main Footer Content */}
        <div className="row g-5 mb-5">
          {/* Brand Column */}
          <div className="col-lg-3 col-md-12">
            <h3 className="text-danger mb-4">IMOVIE.CO</h3>
            <p className="mb-4">Discover the latest movies and TV shows with our comprehensive entertainment platform. Your one-stop destination for all things cinema.</p>
            <div className="d-flex gap-3">
              <a href="https://github.com/idincodingweb" className="btn btn-dark rounded-circle p-2 d-flex align-items-center hover-danger">
                <Github size={20} />
              </a>
              <a href="https://id.linkedin.com/in/idin-iskandar-163773271" className="btn btn-dark rounded-circle p-2 d-flex align-items-center hover-danger">
                <Linkedin size={20} />
              </a>
              <a href="#" className="btn btn-dark rounded-circle p-2 d-flex align-items-center hover-danger">
                <Twitter size={20} />
              </a>
              <a href="idincode@gmail.com" className="btn btn-dark rounded-circle p-2 d-flex align-items-center hover-danger">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links - Pushed right with offset */}
          <div className="col-lg-2 col-md-4">
            <h5 className="text-white mb-4">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-3">
                <a href="#" className="text-secondary text-decoration-none hover-text-danger">Home</a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-secondary text-decoration-none hover-text-danger">Movies</a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-secondary text-decoration-none hover-text-danger">TV Shows</a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-secondary text-decoration-none hover-text-danger">About Us</a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-secondary text-decoration-none hover-text-danger">Contact</a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-lg-2 col-md-4">
            <h5 className="text-white mb-4">Categories</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-3">
                <a href="#" className="text-secondary text-decoration-none hover-text-danger">Action</a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-secondary text-decoration-none hover-text-danger">Comedy</a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-secondary text-decoration-none hover-text-danger">Drama</a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-secondary text-decoration-none hover-text-danger">Horror</a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-secondary text-decoration-none hover-text-danger">Documentary</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-2 col-md-4">
            <h5 className="text-white mb-4">Contact Info</h5>
            <ul className="list-unstyled">
              <li className="mb-4 d-flex gap-3">
                <MapPin className="text-danger flex-shrink-0" size={24} />
                <span className="text-secondary">Desa Cipondoh, Kota Karawang</span>
              </li>
              <li className="mb-4 d-flex gap-3">
                <Phone className="text-danger flex-shrink-0" size={24} />
                <span className="text-secondary">+6282295274521</span>
              </li>
              <li className="mb-4 d-flex gap-3">
                <Mail className="text-danger flex-shrink-0" size={24} />
                <span className="text-secondary">idincode@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-8 text-center">
            <h5 className="text-white mb-4">Subscribe to Our Newsletter</h5>
            <div className="input-group">
              <input 
                type="email" 
                className="form-control bg-dark border-dark text-white" 
                placeholder="Enter your email"
                aria-label="Enter your email"
              />
              <button className="btn btn-danger px-4" type="button">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-top border-secondary pt-4">
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0 text-secondary">
                © 2024 IMOVIE.CO. Made with <Heart size={16} className="text-danger mx-1" /> by Idin Iskandar
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <a href="/privacy" className="text-secondary text-decoration-none hover-text-danger me-4">Privacy Policy</a>
              <a href="termofservices" className="text-secondary text-decoration-none hover-text-danger me-4">Terms of Service</a>
              <a href="#" className="text-secondary text-decoration-none hover-text-danger">FAQ</a>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style>
        {`
          .hover-danger:hover {
            background-color: #dc3545 !important;
            color: white !important;
          }

          .hover-text-danger:hover {
            color: #dc3545 !important;
            transition: color 0.3s ease;
          }

          .footer-links li a {
            transition: color 0.3s ease;
          }

          .form-control:focus {
            border-color: #dc3545;
            box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
