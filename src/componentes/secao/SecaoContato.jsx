import React from "react";
import './secaocontato.css'

function SecaoContato () {
    return (
        <section id="contato">
            <div className="container-contato">
                <div className="faleconosco">
                <h2>FALE CONOSCO</h2>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato atráves de nossas redes sociais
                    ou central de atendimento.
                </p>
                </div>

                <div className="container-contato-rede">
                    <div className="contato">
                        <h3>Contato</h3>
                        <a href=""><img src="./img/local.png" alt="local"/>Boituva , SP</a>
                        <a href="tel:+551599999999"><img src="./img/telefone.png" alt="telefone"/>(15) 9999-9999</a>
                        <a href="mailto:contato@oticaolharmisterioso.com"><img src="./img/email.png" alt="email"/>contato@oticaolharmisterioso.com</a>
                    </div>

                    <div className="redes-sociais">
                        <h3>Nossas Redes Sociais</h3>
                        <a href="https://www.facebook.com/login"><img src="./img/fb.png" alt="Facebook"/>/OticaOlharMisterioso</a>
                        <a href="https://www.instagram.com/"><img src="./img/ig.png" alt="Instagram"/>@oticaolharmisteriososp</a>
                        <a href="https://twitter.com/"><img src="./img/tt.png" alt="Twitter"/>@oticaolharmisteriososp</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SecaoContato