import React from "react";

function Secaoproduto () {
    return (
        <section>
            <div>
                <h2>NOSSOS PRODUTOS </h2>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino,
                    feminino e infantil.
                </p>
                <p>Todos os nossos preços são acessiveis e contam com a melhor qualidade do mercado.</p>

                <section>

                    <div>
                        <h2>Óculos de grau</h2>
                        <img src="./img/oculos01.png" alt="oculos01"/>
                        <p>R$ 500,00</p>
                    </div>

                    <div>
                        <h2>Óculos transition</h2>
                        <img src="./img/oculos02.png" alt="oculos02"/>
                        <p>R$ 750,00</p>
                    </div>

                    <div>
                        <h2>Óculos de sol</h2>
                        <img src="./img/oculos03.png" alt="oculos03"/>
                        <p>R$ 700,00</p>
                    </div>

                    <div>
                        <h2>Óculos infantil</h2>
                        <img src="./img/oculos04.png" alt="oculos04"/>
                        <p>R$ 500,00</p>
                    </div>
                </section>
            </div>
            <section>
                <p>Todos os nossos produtos incluem:</p>
                <ul>
                    <li> Garantia de 1 ano</li>
                    <li> Manutenção Preventiva</li>
                    <li> Descontos especiais na compra da segunda unidade</li>
                    <li> Flexibilidade de pagamento</li>
                </ul>
            </section>
        </section>
    )
}

export default Secaoproduto 