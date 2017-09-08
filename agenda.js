(function() {
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


    const name = ui.inputs.name;
    const email = ui.inputs.email;
    const phone = ui.inputs.phone;

    // FUNÇÃO DE VALIDAÇÃO DOS CAMPOS
    const validateFields = () => {
        let erros = 0;

        const nameRegex = /[a-zA-Z\-'\s]+/;
        const emailRegex = /^[A-z0-9\.\-]{1,}\@\w+\.[A-z]{2,3}(\.[a-z]{2})?$/;
        const phoneRegex = /^(?:\()?[0-9]{2}(?:\))?\s?[0-9]{4,5}(?:-)?[0-9]{4}$/;

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


        //SE TIVER ERRO, DA FOCUS NO CAMPO QUE PRECISA SER PREENCHIDO
        if (erros === 0) {
            ui.button.disabled = false;
        }

    };

    const saveData = (e) => {
        e.preventDefault();

        data = [];
        ui.fields.forEach(field => {
            data[field.id] = field.value;
        });

        console.log(data);
        cleanFields();
        ui.button.disabled = true;
    }

    //FUNÇÃO QUE LIMPA OS CAMPOS
    const cleanFields = () => ui.fields.forEach(field => field.value = "");

    // CRIANDO FUNÇÃO DE INICIAÇÃO
    const initialize = function() {
        //MAPEANDO OS EVENTOS

        ui.fields.forEach(field => {
            field.addEventListener("input", validateFields);
        });

        ui.button.addEventListener("click", saveData);
    }();

})();