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

    // FUNÇÃO RESPONSÁVEL POR SALVAR AS INFORMAÇÕES
    const saveData = (e) => {
        e.preventDefault();

        data = {};
        ui.fields.forEach(field => {
            data[field.id] = field.value;
        });

        sendData(data);
    }

    // FUNÇÃO QUE ENVIA AS INFORMAÇÕES PARA O BANCO DE DADOS
    const sendData = contact => {

        // HEADER
        const headers = new Headers();
        headers.append("Content-type", "application/json");
        //CONFIGURATION
        const conf = {
                method: "POST",
                body: JSON.stringify(contact),
                headers //headers = headers
            }
            // REQUISIÇÃO
        fetch("http://localhost:3000/contacts", conf)

        .then(res => {
            if (res.ok) {
                cleanFields();
                button.disabled = true;
                // listAll();
            }
        })

        .catch(err => console.error(err, "O banco não esta respondendo :/"));
        console.log(contact);


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
        button.addEventListener("click", saveData);
    }();

})();
