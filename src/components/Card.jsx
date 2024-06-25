import React from "react";
import igames from "../assets/images/LogoGE.jpg";

const Card = () => {
    return (
        <>
            <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]" style={{marginLeft:33, marginRight:33,}}>
                <div className="container" >
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" >
                        <SingleCard
                            image={igames}
                            CardTitle="Estás a punto de iniciar un viaje hacia el universo de la educación digital"
                            CardDescription="educación digital"
                            titleHref="/#"
                            btnHref="/#"
                            Button="View Details"

                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Card;

const SingleCard = ({
    image,
    CardDescription,
    CardTitle,
}) => {
    return (
        <>
            {/*  */}
            <div className="mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3"
                style={{
                    backgroundImage: 'linear-gradient(180deg, #D5E6F7 0%, #D5ADFB 100%)',

                }}>
                <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                    <h3 className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                        style={{ color: "#133072" }}
                    >
                        {CardTitle}
                    </h3>
                    <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6"
                        style={{ backgroundColor: "#133072" }}
                    >
                        {CardDescription}
                    </p>
                </div>
                <img src={image} alt="Logo" className="w-full" />
            </div>
            {/*  */}
        </>
    );
};
