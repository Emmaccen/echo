import React from 'react';


import sigh from './sigh.png';
import brac from './brac.png';
import envato from './envato.png';






function Client() {
    return (


        <div class="container">

                <hr />
                    <p className="clients">Some of our friends</p>


                    <div className="clientLogo">
                        <img src={sigh} alt="logo" />
                        <img src={brac} alt="logo" />
                        <img src={envato} alt="logo" />
                    </div>
                

        </div>
        

        //Fix the clients' logos
    );
}

export default Client;
