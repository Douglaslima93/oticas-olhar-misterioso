import React from "react";
import SecaoCapa from "../secao/SecaoCapa";
import Secaoproduto from "../secao/Secaoprodutos";
import SecaoSobre from "../secao/SecaoSobre";
import SecaoContato from "../secao/SecaoContato";

function Conteudo () {
    return (
        <main>
            <SecaoCapa/>
            <Secaoproduto/>
            <SecaoSobre/>
            <SecaoContato/>
        </main>
    )
}

export default Conteudo