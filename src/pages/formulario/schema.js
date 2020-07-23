import * as Yup from 'yup'

export default Yup.object().shape({
    nome: Yup
        .string()
        .min(3, 'Nome deve conter pelo menos 3 letras')
        .required('Este campo é obrigatório!'),
    email: Yup
        .string()
        .email('Email invalido!')
        .required('Este campo é obrigatório!'),
    cpf: Yup
        .string()
        .matches(
            /^([0-9]{3}\.?){3}-?[0-9]{2}$/,
            "CPF invalido!"
        )
        .required('Este campo é obrigatório!'),
    tel: Yup
        .string()
        .matches(
            // /^(\(\d{2}\)\s)(\d{4,5}-\d{4})$/,
            /(\d{2})?\s*\d{4,5}-?\d{4}$/g, 
            'Telefone invalido'
        )
    .required('Este campo é obrigatório!'),
    senha: Yup
        .string()
        .required('Este campo é obrigatório!')
        .matches(
            /^.*(?=.{8,})(?=.*\d)((?=.*[a-z]){1}).*$/,
            "Deve conter letras, numeros e um minimo de 8 caracteres!"
        ),
    confsenha: Yup
        .string()
        .required('Este campo é obrigatório!')
        .oneOf([Yup.ref("senha"), null], "A senha deve ser a mesma!"),
    cep: Yup
        .string()
        .matches(
            /^\d{5}-\d{3}$/,
            'CEP invalido'
        )
        .required('Este campo é obrigatório!'),
    rua: Yup
        .string()
        .required('Este campo é obrigatório!'),
    numero: Yup
        .number()
        .required('Este campo é obrigatório!'),
    comp: Yup
        .string()
        .required('Este campo é obrigatório!'),
    bairro: Yup
        .string()
        .required('Este campo é obrigatório!'),
    cidade: Yup
        .string()
        .required('Este campo é obrigatório!'),
    estado: Yup
        .string()
        .required('Este campo é obrigatório!')
})