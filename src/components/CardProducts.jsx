const CardProducts = () => {
    const toggleItems = (e) => {
        const items = document.querySelector('.card-prod-items');
        items.classList.toggle('show');
        e.target.closest('.card-prod').querySelector('.card-prod-title .fa-chevron-down').classList.toggle('rotate');
    }
    
    return(
    <div className="card-prod">
        <div className="card-prod-title" onClick={toggleItems}>
            <h2>Products</h2>
            <p>Our Premium Quality Wheat Products</p>
            <i class="fa-solid fa-chevron-down"></i>
        </div>
        <div className="card-prod-items">
            <div className="card-prod-item">
                <h3 align="center">Fine Products</h3>
                <p>KN Suji</p>
                <p>KN Rawa</p>
                <p>KN Chakki Atta</p>
                <p>KN Tandoori Atta</p>
                <p>KN Refiend Wheat Flour (Maida) </p>
            
            </div>
            <div className="card-prod-item">
                <h3 align="center">Bran Products</h3>
                    <p>Dudhdhara Mota Choker</p>
                    <p>Dudhdhara Dealux Choker</p>
                    <p>KR Gold Mota Choker</p>
                
            </div>
        </div>
    </div>
    );
};

export default CardProducts;