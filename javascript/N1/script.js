function calcularAlunos(valor){{
    return valor * 0.1;
}
const media =[];
let tabela = index.getElementById("tabela");

function preencherVetor(){
    let Alunos = index.getElementById("Alunos");
    let Turmas = indext.getElementById("turmas");
    let Valor = index.getElementById("valor");
    media.push({
Alunos,
Turmas,
Valor
    });
    exibirTabela(media);
}

function exibirTabela(){
    let innerTabela ="";
    for (i = 0; i< media.length; i++){
        console.log(media[i])
        innerTabela =
        <tr>
<td>${i +1}
</td>
<td>
    ${media[i].Alunos}
</td>
<td>
${media[i].Turmas}
</td>
<td>
${media[i].valor}
</td>
        </tr>
    }
    function excluirDado(){
        media.pop();
        tablela.innerHTML += innerTabela;
    }
    function excluirDado(){
        media.pop();
        tabela.innerHTML =
        <tr>
            <th>Alunos</th>
            <th>Turmas</th>
            <th>valor</th>
        </tr>
    }
exibirTabela();
}
}
