import React from 'react';
import ProfileHeader from './ProfileHeader';
import NavLinks from './NavLinks';

const CardHeader = () => {
  return (
    <div className="card-header">
      <ProfileHeader 
        image="./profile/profile_photo.jpg"
        name="Nikhil Agarwal"
        title="Director"
        locate="Kedar Nath Roller Flour Mills Private Limited"
        part="Partner"
        comp="KSN Agro Foods"
      />
      
      <NavLinks
        phone="7607700000"
        whatsapp="https://wa.me/7607700000"
        email="knmill1991@gmail.com"
        directions="https://maps.app.goo.gl/gkAr4mzMaYdPyPNR8"
      />
    </div>
  );
}

export default CardHeader;