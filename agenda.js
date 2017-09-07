(function() {
    const ui = {
        inputs: document.querySelectorAll("input"),
        fields: {
            name: document.querySelector(".name"),
            email: document.querySelector(".email"),
            phone: document.querySelector(".phone")
        },
        button: document.querySelector(".pure-button"),
        table: document.querySelector("tbody")
    };


    const name = ui.fields.name;
    const email = ui.fields.email;
    const phone = ui.fields.phone;

    // FUNÇÃO DE VALIDAÇÃO DOS CAMPOS
    const validateFields = () => {
        const data = {};
        let erros = 0;


        const nameRegex = /[a-zA-Z\-'\s]+/;
        const emailRegex = /^[A-z0-9\.\-]{1,}\@\w+\.[A-z]{2,3}(\.[a-z]{2})?$/;
        const phoneRegex = /^(?:\()?[0-9]{2}(?:\))?\s?[0-9]{4,5}(?:-)?[0-9]{4}$/;

        const regexValidation = (regexValue, inputValue, input, inputId) => {
            if (regexValue.test(inputValue)) {
                input.classList.remove("error");
                data[input.id] = input.value;
            } else {
                input.classList.add("error");
                erros++;
            }
        }

        regexValidation(nameRegex, name.value, name, name.id);
        regexValidation(emailRegex, email.value, email, email.id);
        regexValidation(phoneRegex, phone.value, phone, phone.id);


        //SE TIVER ERRO, DA FOCUS NO CAMPO QUE PRECISA SER PREENCHIDO
        if (erros === 0) {
            ui.button.disabled = false;
        }

    };

    const saveData = (e) => {
        e.preventDefault();
        console.log(name.value, phone.value, email.value);
        cleanFields();
        ui.button.disabled = true;
    }

    //FUNÇÃO QUE LIMPA OS CAMPOS
    const cleanFields = () => ui.inputs.forEach(field => field.value = "");

    // CRIANDO FUNÇÃO DE INICIAÇÃO
    const initialize = function() {
        //MAPEANDO OS EVENTOS

        ui.inputs.forEach(field => {
            field.addEventListener("input", validateFields);
        });

        ui.button.addEventListener("click", saveData);
    }();

})();