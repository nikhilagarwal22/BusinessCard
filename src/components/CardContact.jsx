const CardContact = () => {
    return (
      <div className="card-contact-us">
        <div className="card-contact-title">
            <i class="fa-solid fa-mobile-screen"></i>
            <h2>Contact Us</h2>
        </div>
        <div className="contact-details-item">
            <h3>Call Us</h3>
            <p><a href={`tel:+917607700000`} target="_blank" rel="noreferrer">+917607700000</a></p>
            <p><a href={`tel:+917753955555`} target="_blank" rel="noreferrer">+917753955555</a></p>
        </div>
        <div className="contact-details-item">
            <h3>Mail Us</h3>
            <p><a href="mailto:knmill1991@gmail.com" target="_blank" rel="noreferrer">knmill1991@gmail.com</a></p>
        </div>
        <div className="contact-details-item">
            <h3>Factory Address</h3>
            <p><a href="https://maps.app.goo.gl/gkAr4mzMaYdPyPNR8" target="_blank" rel="noreferrer">A-10, Industrial Area Phase ll<br />Sandila, Distt- Hardoi, 241127, U.P.</a></p><br />
            <h3>Head Office Address</h3>
            <p><a href="https://maps.app.goo.gl/opvEMZomDjLutb6h7" target="_blank" rel="noreferrer">Kachhauna, Distt-Hardoi, 241126, U.P.</a></p><br />
            
            
        </div>
      </div>
    );
}
  
export default CardContact;