(() => {
    // DECLARANDO AS VARIÁVEIS RELACIONADAS À INTERFACE
    const ui = {
        fields: document.querySelectorAll("input"),
        inputs: {
            name: document.querySelector(".name"),
            email: document.querySelector(".email"),
            phone: document.querySelector(".phone")
        },
        button: document.querySelector(".pure-button"),
        table: document.querySelector("tbody")
    };

    // VARIÁVEIS DE ATALHO PROS INPUTS E BUTTON
    const name = ui.inputs.name;
    const email = ui.inputs.email;
    const phone = ui.inputs.phone;
    const button = ui.button;


    // FUNÇÃO DE VALIDAÇÃO DOS CAMPOS
    const validateFields = () => {
        let erros = 0;

        // VARIÁVEIS DAS EXPRESSÕES REGULARES
        const nameRegex = /[a-zA-Z\-'\s]+/;
        const emailRegex = /^[A-z0-9\.\-]{1,}\@\w+\.[A-z]{2,3}(\.[a-z]{2})?$/;
        const phoneRegex = /^(?:\()?[0-9]{2}(?:\))?\s?[0-9]{4,5}(?:-)?[0-9]{4}$/;

        // FUNÇÃO DE VALIDAÇÃO DOS CAMPOS BASEADO NAS EXPRESSÕES REGULARES
        const regexValidation = (regexValue, inputValue, input, inputId) => {
            if (regexValue.test(inputValue)) {
                input.classList.remove("error");
            } else {
                input.classList.add("error");
                erros++;
            }
        }

        regexValidation(nameRegex, name.value, name, name.id);
        regexValidation(emailRegex, email.value, email, email.id);
        regexValidation(phoneRegex, phone.value, phone, phone.id);

        // VERIFICA SE EXISTE ALGUM ERRO, CASO NÃO EXISTA, HABILITA O BOTÃO
        erros === 0 ? button.disabled = false : '';

    };

    // FUNÇÃO RESPONSÁVEL POR SALVAR AS INFORMAÇÕES E ENVIAR PARA O BANCO DE DADOS
    const saveData = (e) => {
        e.preventDefault();

        data = [];
        ui.fields.forEach(field => {
            data[field.id] = field.value;
        });

        console.log(data);
        cleanFields();
        button.disabled = true;
    }

    //FUNÇÃO QUE LIMPA OS CAMPOS
    const cleanFields = () => ui.fields.forEach(field => field.value = "");

    // CRIANDO FUNÇÃO DE INICIAÇÃO
    const initialize = function() {
        // INICIANDO A FUNÇÃO DE VALIDAÇÃO DOS CAMPOS
        ui.fields.forEach(field => {
            field.addEventListener("input", validateFields);
        });

        // INICIANDO A FUNCAO DE ENVIO DAS INFORMAÇÕES PARA  BANCO DE DADOS
        ui.button.addEventListener("click", saveData);
    }();

})();