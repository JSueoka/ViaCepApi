// document.addEventListener("DOMContentLoaded", function(e){

//     // setCepMask();

    
// })

// // function setCepMask() {
//     //     const cepInput = [
//     //         document.querySelector('input[name="cep"]')
//     //     ];
//     //     for(input of cepInput)
//     //     if (input.length > 0) input.mask("00000-000");
//     // }

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
function apresentaEndereco(dados){
    let resposta = document.querySelector('.resposta');

    if(dados.erro){
        resposta.innerHTML = "<p>Endereço não localizado!</p>";
    }
    else{
        resposta.innerHTML =`<p>Endereço: ${dados.logradouro}</p>
                            <p>Complemento: ${dados.complemento}</p>
                            <p>Bairro:${dados.bairro}</p>
                            <p>UF:${dados.uf}</p>`
    }
}