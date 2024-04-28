import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <div className="text-white absolute inset-0 -z-10 h-fit items-center px-5 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <Navbar />
        <div className="flex flex-col justify-center container mx-auto gap-5">
          <h1 className="font-bold text-2xl">About Password Manager</h1>
          <p className="font-semibold text-xl">
            Welcome to Password Manager, your trusted companion in safeguarding
            your digital credentials. Developed with precision and care using
            React and styled with Tailwind CSS, Password Manager offers a
            seamless experience for managing your passwords securely.
          </p>
          <h1 className="font-bold text-2xl">Our Mission</h1>
          <p className="font-semibold text-xl">
            At Password Manager, we understand the critical importance of
            protecting your online identity. Our mission is to provide you with
            a user-friendly, yet robust solution that ensures your passwords
            remain safe from prying eyes while being easily accessible whenever
            you need them.
          </p>
          <h1 className="font-bold text-2xl">Features</h1>
          <p className="font-semibold text-xl">
            Secure Storage: Your passwords are encrypted and stored locally
            using modern encryption standards, ensuring only you have access to
            them.
            <br />
            Effortless Management: Easily save, delete, and edit your passwords
            with intuitive controls designed to streamline your experience.
            <br />
            Convenience: Access your passwords anytime, anywhere, without the
            need for an internet connection. Your data stays with you, always.
          </p>
          <h1 className="font-bold text-2xl">Why Choose Password Manager?</h1>
          <p className="font-semibold text-xl">
            Privacy First: We prioritize your privacy above all else. Your data
            is yours alone, and we never compromise on security.
            <br />
            User-Centric Design: Our interface is crafted with your convenience
            in mind, making password management a breeze.
            <br />
            Reliability: Built on robust technologies and tested rigorously,
            Password Manager ensures stability and dependability..
          </p>
          <h1 className="font-bold text-2xl">About the Developer</h1>
          <p className="font-semibold text-xl">
            Aarav Agarwal, the mind behind Password Manager, is passionate about
            empowering users with tools that enhance their digital security.
            With a background in software engineering and a commitment to
            excellence, Aarav strives to deliver solutions that make a
            difference.
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
