import React from 'react';
import image from './cree.png';
import image2 from './master.png';

const creditCard = () =>{
    return (
        <div class="credit-card">
            <div className="bank-name">Tunisian Bank</div>
            <img className="puce" src={image}></img>
            <div className="card-number">7253 XXXX XXXX XXX</div>
            <div className="baya"><h2>5247</h2></div>
            <div className="expiration">
               <div className="achraf"><p>MONTH/YEAR</p></div> 
                <span className="valid-thru">Valid Thru</span> <span className="date"><strong>'11/50'</strong></span>
               </div>
               
               <img className="master" src={image2}></img>
               
            <div className="name">ACHRAF  BEN kADAA</div>


        </div>
    );
}

export default creditCard;