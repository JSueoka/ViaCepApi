// CONSULTANDO ENDEREÇO
function buscarEndereco(){

    let cep = document.querySelector('#cep').value;

    if(cep.length != 8){
       document.querySelector('.invalid').classList.add('show');
    }

    let url = "https://viacep.com.br/ws/" + cep + "/json/";
    
    fetch(url).then(function(response){
        response.json().then(apresentaEndereco);
    })
}

// EXIBINDO DADOS ENCONTRADOS
function apresentaEndereco(dados){
    let resposta = document.querySelector('.resposta');

    if(dados.erro){
        document.querySelector('.invalid').classList.remove('show');
        resposta.innerHTML = "<p>Endereço não localizado!</p>";
    }
    else{
        document.querySelector('.resposta').classList.add('show');
        document.querySelector('.invalid').classList.remove('show');
        resposta.innerHTML =`<p><strong>CEP:</strong> ${dados.logradouro}</p>
                            <p><strong>Complemento:</strong> ${dados.complemento}</p>
                            <p><strong>Bairro:</strong> ${dados.bairro}</p>
                            <p><strong>Localidade:</strong> ${dados.localidade}</p>
                            <p><strong>UF:</strong> ${dados.uf}</p>
                            <p><strong>Siafi:</strong> ${dados.siafi}</p>
                            <p><strong>DDD:</strong> ${dados.ddd}</p>
                            <p><strong>GIA:</strong> ${dados.gia}</p>
                            <p><strong>IBGE:</strong> ${dados.ibge}</p>`
    }
}