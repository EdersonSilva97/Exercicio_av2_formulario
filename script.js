/**
 1. Nenhuma informação pode ficar em branco;

 2. O nome tem que ter pelo menos 5 cararacteres;

 3. A data de registro não pode ser anterior ao ano de 2021 e não pode ser posterior a data atual;

 4. Se a idade for menor que 18 anos, não permitir o envio;

 5. Envie o código do HTML, JavaScript e CSS. E se conseguir public no GitHUB e envie o link.*/
const formulario = document.getElementById('formulario');
const campo_nome = document.getElementById('nome');
const campo_email = document.getElementById('email');
const campo_sexoM = document.getElementById('sexoM');
const campo_sexoF = document.getElementById('sexoF');
const campo_idade = document.getElementById('idade');
const campo_formaR = document.getElementById('forma_registrado');
const campo_formaC = document.getElementById('forma_contratado');
const campo_cargoselecionado = document.getElementById('cargo');
const campo_setor = document.getElementById('setor');
const campo_registro = document.getElementById('registro')
let regExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/



function verificar_nome() {
    if (verificar_espaco_branco(campo_nome.value).length < 5) {
        alert("O nome precisa de pelo menos 5 caracteres!");
        return true;
    }
}

function verificar_email(email) {
    if (regExp.test(email)){
        return false;
    }else{
        alert("E-mail inválido.")
        return true;
    }
}

function verificar_idade() {
    let idade = parseInt(campo_idade.value);

    if (!isNaN(idade)){
        if (idade < 18){
            alert("Idade menor que 18")
            return true;
        }else{
            console.log("Maior de idade: "+idade)
        }
        return false;
    }else{
        alert("Entre com um valor numérico inteiro no campo idade.");
        return true;
    }

}


function verificar_registro() {
    /*A data de registro não pode ser anterior ao ano de 2021 e não pode ser posterior a data atual;*/
    // Formato: 2022-05-01      AAAA-MM-DD
    data = campo_registro.value;
    dataArray = data.split("-");
    console.log(dataArray)
    let ano = dataArray[0];
    let mes = dataArray[1];
    let dia = dataArray[2];

    const objData = new Date();
    let a = objData.getFullYear();
    let m = (objData.getMonth())+1;
    let d = objData.getDate();

    if ((parseInt(ano)) < 2021){
        alert("Ano selecionado é anterior a 2021");
        return true;
    }
    let date1 = new Date(a, m, d);
    let date2 = new Date(ano, mes, dia);
    /*
    console.log(Number(date1) === Number(date2));
    console.log(Number(date1) < Number(date2));
    */
    //Verifica se a data do formulário é mais recente do que a data atual
    if (Number(date2) > Number(date1)){
        alert("Data selecionada é posterior a data atual");
        return true;
    }
    console.log(Number(date2) > Number(date1) );

    console.log("Ano: " + ano);
    console.log("Mês: "+ mes);
    console.log("Dia: " + dia);

    console.log("Ano atual: " + a);
    console.log("Mês atual: "+ m);
    console.log("Dia atual: " + d);

    return false;
}

function verificar_espaco_branco(n) {
    let palavra = n;

    while (palavra.indexOf("  ") !== -1) {
        palavra = palavra.replace("  ", " ")
    }
    if (palavra[(palavra.length)-1] === " ") {
        palavra = palavra.slice(0, palavra.length-1);
    }

    return palavra;
}

formulario.addEventListener('submit', function (e) {
    if (((campo_nome.value === "") || (campo_email.value === "") || (campo_idade.value === "")) || (campo_registro.value === "")) {
        alert("Existe campo não preenchido!");
        e.preventDefault(); // Previne envio do formulário
    }else{
        if (verificar_registro()){
            console.log("Erro com registro.");
            e.preventDefault();
        }else {
            if (verificar_nome()){
                console.log("Erro com nome.");
                e.preventDefault();
            }else{
                if (verificar_idade()){
                    console.log("Erro com idade");
                    e.preventDefault();
                }else {
                    if (verificar_email(campo_email.value)){
                        console.log("Erro com e-mail");
                        e.preventDefault();
                    }else{
                        alert("Tudo certo!");
                    }
                }
            }
        }
    }

    console.log(campo_nome.value);
    console.log(campo_email.value);
    console.log(campo_sexoM.checked);
    console.log(campo_sexoF.checked);
    console.log(campo_idade.value);
    console.log(campo_formaR.checked);
    console.log(campo_formaC.checked);
    console.log(campo_cargoselecionado.options[campo_cargoselecionado.selectedIndex].text);
    console.log(campo_setor.value);
    console.log(campo_registro.value);
    console.log("Tamanho do nome: " + campo_nome.value.length);
    console.log(typeof (campo_idade.value) + " Tipo de idade");
    console.log((nome.value[nome.value.length - 1] === " "));
    console.log(verificar_espaco_branco(campo_nome.value));

})
