document.addEventListener("DOMContentLoaded", function(e){

    // function setCepMask() {
    //     const cepInput = [
    //         document.querySelector('input[name="cep"]')
    //     ];
    //     for(input of cepInput)
    //     if (input.length > 0) input.mask("00000-000");
    // }

    // setCepMask();

    function buscarEndereco(){

        let cep = document.querySelector('#cep').value;
    
        if(cep.length != 8){
            console.log("Digite um CEP válido.");
        }
    
        let url = "viacep.com.br/ws/" + cep + "/json/";

        console.log(cep);
    
    }
})



