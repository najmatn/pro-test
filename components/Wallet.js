import React from 'react';
const Wallet=(props)=>{
    return(
        <section>
            <section>
                <h1 className="v">My Wallet</h1>
                <p className="w">You have</p>
                <p className="x">{props.money}</p>
            </section>
        </section>
    )
}
export default Wallet;