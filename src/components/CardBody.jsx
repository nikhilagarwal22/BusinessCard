const CardBody = () => {
    return (
      <div className="card-body">

        <div className="card-body-item">
            <div className="item-logo"></div>
            <div className="item-description">
                <h2>Hi ;)</h2>
            </div>
        </div>
        
        <div className="card-body-item">
            <div className="item-logo">
                <span className="material-symbols-outlined">phone</span>
            </div>
            <div className="item-description">
                <h3>+91 760700000</h3>
                <p>Mobile</p>
            </div>
        </div>

        <div className="card-body-item">
            <div className="item-logo">
                <span className="material-symbols-outlined">email</span>
            </div>
            <div className="item-description">
                <h3>knmill1991@gmail.com</h3>
                <p>Email</p>
            </div>
        </div>

        <div className="card-body-item">
            <div className="item-logo">
                <span className="material-symbols-outlined">work</span>
            </div>
            <div className="item-description">
                <h3>Kedar Nath Roller Flour Mills Private Limited</h3>
                <p>Director</p>
                <h3>KSN Agro Foods</h3>
                <p>Partner</p>
            </div>
        </div>

        <div className="card-body-item">
            <div className="item-logo">
                <span className="material-symbols-outlined">location_on</span>
            </div>
            <div className="item-description">
                <h3>Kedar Nath Roller Flour Mills Private Limited<br />Hardoi Road, Kachhauna, Hardoi, Uttar Pradesh 241126</h3>
                <p>Director</p>
            </div>
        </div>

        <div className="card-body-item">
            <div className="item-logo">
                <span className="material-symbols-outlined">language</span>
            </div>
            <div className="item-description">
                <h3>
                    <a href="https://maps.app.goo.gl/HvMkwEYdCNstaaJA9">https://maps.app.goo.gl/HvMkwEYdCNstaaJA9</a>
                </h3>
                <p>Website</p>
            </div>
        </div>

      </div>
    );
  }
  
  export default CardBody;