import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp, FaTiktok, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons library


const Contact = () => {


    const iconStyle = {
        width: '16px',
        height: '16px',
        marginRight: '8px', // Adding a bit of spacing between label and icon
    };

    const linkStyle = {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        cursor: 'pointer', // Add pointer cursor
      };

  return (
    <main>
      <div className='navBar'>
        <div className='navBar__tortuLogoContainer'>
          <img
            src='/logoTortu.png'
            onClick={() => window.scrollTo(0, 0)}
            alt='Tortu Logo'
          />
        </div>
        <Link to='/' className='navBar__Button'>
          Volver
        </Link>
      </div>
      
      <div style={{ paddingTop: '100px', display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems:'center', gap:'30px'}}>

          <h1 style={{fontSize:'40px', paddingBottom: '40px'}}>Contacto</h1>

          <a href='https://www.instagram.com/marlimsorbetes/' target='_blank' rel='noopener noreferrer' style={linkStyle}>
          <FaInstagram className='socialIcon' style={{ ...iconStyle, cursor: 'pointer' }} />
          <label style={{ marginRight: '8px', cursor: 'pointer' }}>Instagram</label>
          </a>

          <a href='https://api.whatsapp.com/send?phone=5473663259' target='_blank' rel='noopener noreferrer' style={linkStyle}>
          <FaWhatsapp className='socialIcon' style={{ ...iconStyle, cursor: 'pointer' }} />
          <label style={{ marginRight: '8px', cursor: 'pointer' }}>WhatsApp</label>
          </a>

          <a href='https://www.tiktok.com/@marlimsorbetes' target='_blank' rel='noopener noreferrer' style={linkStyle}>
          <FaTiktok className='socialIcon' style={{ ...iconStyle, cursor: 'pointer' }} />
          <label style={{ marginRight: '8px', cursor: 'pointer' }}>TikTok</label>
          </a>

          <a href='mailto:contactomarlim@gmail.com' style={linkStyle}>
          <FaEnvelope className='socialIcon' style={{ ...iconStyle, cursor: 'pointer' }} />
          <label style={{ marginRight: '8px', cursor: 'pointer' }}>Email</label>
          </a>

      </div>
    </main>
  );
};

export default Contact;
