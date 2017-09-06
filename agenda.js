(function(){  
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
  


    // FUNÇÃO DE VALIDAÇÃO DOS CAMPOS
    const validateFields = function(e){
      e.preventDefault();

      const data = {};
      var erros = 0;
  

      // FUNÇÃO DE VALIDAÇÃO DO NOME
        const name = ui.fields.name;
        var nameRegex = new RegExp("[a-zA-Z\-'\s]+");

        if (nameRegex.test(name.value)){
          name.classList.remove("error");
          data[name.id]=name.value;
        }else{
          name.classList.add("error");
          erros++;
        }


        const email = ui.fields.email;
        var emailRegex = new RegExp("[a-zA-Z\-'\s]+");
        if (emailRegex.test(email.value)){
          email.classList.remove("error");
          data[email.id]=email.value;
        }else{
          email.classList.add("error");
          erros++;
        }
      

        const phone = ui.fields.phone;
        var phoneRegex = new RegExp("[a-zA-Z\-'\s]+");
        if (phoneRegex.test(phone.value)){
          phone.classList.remove("error");
          data[phone.id]=phone.value;
        }else{
          phone.classList.add("error");
          erros++;
        }


            //SE TIVER ERRO, DA FOCUS NO CAMPO QUE PRECISA SER PREENCHIDO
            if(erros > 0){
              document.querySelector(".error").focus();
            }
            //SE NÃO TIVER, ENVIA AS INFORMAÇÕES PARA A FUNÇÃO QUE SALVA INFORMAÇÕES
            else{
              console.log(data);
              cleanFields();
            }


    };



    //FUNÇÃO QUE LIMPA OS CAMPOS
  const cleanFields = ()=> ui.inputs.forEach(field => field.value="");





    
      // CRIANDO FUNÇÃO DE INICIAÇÃO
      const initialize = function(){
        //MAPEANDO OS EVENTOS
        ui.button.addEventListener("click", validateFields);
      }();
  
  })();




  