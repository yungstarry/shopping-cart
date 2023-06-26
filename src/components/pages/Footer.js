import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content   w-full">
        <div>
          <span className="footer-title">Join the Adornare Family</span>
          <div className="form-control w-60 sm:w-80">
            <label className="label">
              <span className="label-text">
                Get your weekly Fashionify newsletter straight to your mailbox.
              </span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your email"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div>
          <span className="footer-title">Adornare</span>
          <p>
            <Link to="/about">About Us</Link>
          </p>
          <a className="link link-hover">FAQ</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Contact</span>
          <a className="link link-hover">Email</a>
          <a href="http://github.com/yungstarry" className="link link-hover">
            Github
          </a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
