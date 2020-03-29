import React from 'react';
import bincita from './bincita.jpeg';
import fipet from './fipet.jpeg';



function Work() {
    return (

        <div class="bigHeader" id="projects">

            <div className="projects"><h5>Featured Projects</h5></div>
                

            <div class="container">
                <div class="productLists">
                    <div class="productImage">
                        <img src={bincita} alt="Bincita logo" />
                    </div>
                    <div class="productDescription">
                        <div>
                            <div>
                                <h1 class="heading">Bincita Travels</h1>
                            </div>
                            <div>
                                <p class="descriptionText">
                                A local road transport startup in Lagos, Nigeria. With the aim of smoothening the experience of cross-country road users within the region. We simplified the digital experience by creating a survey to understand the pain points and developed ways to solve these problems which resulted in a marginal reduction in the physical presence in ticketing centers and more digital advantages over competition.
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="productLists2">
                        <div class="order2 productImage">
                            <img src={fipet} alt="echo web" />
                        </div>
                        <div class="order1 productDescription2">
                            <div>
                                <div>
                                    <h1 class="heading">I-Note</h1>
                                </div>
                                <div>
                                    <p class="descriptionText">
                                    iNote is an application developed to offer optimum flexibility at taking notes. It has numerous functionalities amongst which are Cloud Storage, In-App Note Sharing and many more. 
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            


            <div class="container">
                <div class="productLists">
                    <div class="productImage">
                        <img src={bincita} alt="Bincita logo" />
                    </div>
                    <div class="productDescription">
                        <div>
                            <div>
                                <h1 class="heading">IrisLens Photography</h1>
                            </div>
                            <div>
                                <p class="descriptionText">
                                IrisLens is an art studio located in the United States, it engages in Image manipulation, Photography(Weddings, Conferences, Balls, Modelling and Campaigns) and Art Direction. Echo designed and developed a measurable and scalable brand identity and system to further connect with their clients. 
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>


                
    
    );
}

export default Work;