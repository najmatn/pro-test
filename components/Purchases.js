import React from 'react';
const Purchases=(props)=>{
    return(
        <section>
            <section>
                <h1 className="y">My Purchases</h1>
                <p className="z">You had</p>
                <p className="zz">{props.moneyy}</p>
            </section>
        </section>
    )
}
export default Purchases;