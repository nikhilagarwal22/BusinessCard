const CardPay = () => {

    const toggleItems = (e) => {
        const items = document.querySelector('.card-pay-items');
        items.classList.toggle('show');
        e.target.closest('.card-pay').querySelector('.card-pay-title .fa-chevron-down').classList.toggle('rotate');
    }

    const toggleItemBody = (e) => {
        const itemBody = e.target.closest('.card-pay-item').querySelector('.card-pay-item-body');
        itemBody.classList.toggle('show');
        e.target.closest('.card-pay-item').querySelector('.card-pay-item .fa-chevron-down').classList.toggle('rotate');

        const allItems = document.querySelectorAll('.card-pay-item-body');
        allItems.forEach(item => {
            if (item !== itemBody) {
                item.classList.remove('show');
                item.closest('.card-pay-item').querySelector('.card-pay-item .fa-chevron-down').classList.remove('rotate');
            }
        });
    }

    async function copyToClipBoard(e) {
        const text = document.querySelector('.bank-details table').innerText;
        try {
            await navigator.clipboard.writeText(text);
        } catch (error) {
            var dummy = document.createElement("textarea");
            document.body.appendChild(dummy);
            dummy.value = text;
            dummy.select();
            document.execCommand("copy");
            document.body.removeChild(dummy);
        }
        finally {
            e.target.innerText = "Copied";
        }
    }

    const downloadQR = (e) => {
        const qr = e.target.closest('.card-pay-item-body').querySelector('.qr-details img');
        const a = document.createElement('a');
        a.href = qr.src;
        a.download = e.target.closest('.card-pay-item').querySelector('.card-pay-item-header h3').innerText + '.png';
        a.click();
    }

        // const openInNewTab = url => {
        //   window.open(url, '_blank', 'noopener,noreferrer');
        // };

    return (
        <div className="card-pay">
            <div className="card-pay-title" onClick={toggleItems}>
                <h2>Pay Us</h2>
                <p>Pay us by clicking here</p>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div className="card-pay-items">
                <div className="card-pay-item">
                    <div className="card-pay-item-header" onClick={toggleItemBody}>
                        <img src="./assets/upi_logo.png" alt="" />
                        <div>
                            <h3>UPI Pay</h3>
                            <p>Click to get QR</p>
                        </div>
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className="card-pay-item-body">
                        <div className="qr-details">
                            <img src="./assets/upi_QR.png" alt="" />
                            <div className="card-utility-button">
                                <button className="btn btn-primary" onClick={downloadQR}><i class="fa-solid fa-download"></i>Download</button>
                            </div>
                            {/* <div className="card-utility-button">
                                <button className="btn btn-primary" onClick={() => openInNewTab('upi://pay?pa=paytmqr18e4crfuyr@paytm&pn=Paytm')}><i class="fa-solid fa-money-bill"></i>Pay</button>
                            </div> */}
                        </div>
                    </div>
                </div>


                <div className="card-pay-item">
                    <div className="card-pay-item-header" onClick={toggleItemBody}>
                        <img src="./assets/pnb.png" alt="Avatar" class="circle-image" />
                        <div>
                            <h3>Bank Details</h3>
                            <p>Click to get details</p>
                        </div>
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className="card-pay-item-body">
                        <div className="bank-details">
                            <table>
                            <thead>
                                <tr>
                                    <th colspan="3">Punjab National Bank</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Account Holder</th>
                                    <td>:</td>
                                    <td>Kedar Nath Roller Flour Mills Private Limited</td>
                                </tr>
                                <tr>
                                    <th>Account Number</th>
                                    <td>:</td>
                                    <td>7531008700000748</td>
                                </tr>
                                <tr>
                                    <th>IFS Code</th>
                                    <td>:</td>
                                    <td>PUNB0753100</td>
                                </tr>
                                <tr>
                                    <th>Branch</th>
                                    <td>:</td>
                                    <td>Kachhauna Patseni, Hardoi</td>
                                </tr>
                                <tr>
                                    <th>Account Type</th>
                                    <td>:</td>
                                    <td>Cash Credit</td>
                                </tr>
                            </tbody>
                            </table>
                            <div className="card-utility-button">
                                <button className="btn btn-primary" onClick={copyToClipBoard}><i class="fa-solid fa-copy"></i>Copy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardPay;