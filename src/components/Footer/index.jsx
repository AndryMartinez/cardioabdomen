import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <footer className="text-center text-lg-start bg-light text-muted mt-5 ">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                <div className="row w-100 ">
                    <p className="col-9"></p>
                    <p className="col">
                        <Link to={'/nosotros'} className="text-reset">
                        <a className="text-reset">Acerca de nosotros</a>
                        </Link>
                    </p>
                    <p className="col">
                    <Link to={'/politicas'} className="text-reset">
                        <a className="text-reset">Politicas de privacidad</a>
                    </Link>
                    </p>
                </div>
            </section>


            <div className="text-center p-4" style={{ background: 'rgba(0, 0, 0, 0.05)' }}>
                © 2022 Copyright:
                <a className="text-reset fw-bold" href="https://cardioabdomens.es/">www.cardioabdomens.es</a>
            </div>
        </footer>
    )
}

export default Footer