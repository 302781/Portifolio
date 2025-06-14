function enviarWhats(events) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5561984036278'

    const texto = `Ola! Me chamo ${nome}, ${mensagem}`
    const mgFormatada = encodeURIComponent(texto);

    const url = `https://whatsa.me/${telefone}/?t=${mgFormatada}`;

    console.log(url);

    window.open(url, '_blank')

}
