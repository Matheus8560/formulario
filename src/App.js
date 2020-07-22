import React from 'react';
import './App.css';

import Formulario from './pages/formulario/index'

const initialValues = {
  nome: '',
  email: '',
  cpf: '', 
  tel: '',
  cep: '',
  bairro: '',
  rua: '',
  numero: '',
  comp: '', 
  cidade: '',
  estado: '',
  senha: '',
  conf_senha: ''
}

const onSubmit = values =>{
  console.log(values);
}

export default function App() {
  return(
    Formulario(initialValues, onSubmit)
  )
}


/*
 return (
    <div className="App">
      <h1>Cadastre-se</h1>
      <Formik
        validationSchema={schema}
        onSubmit={onSubmit}
        initialValues={initialValues}>
          {formik => {
            return(
              <Form>
                  <div className='formControl'>                   
                    <Field 
                      className='input'
                      id='nome'
                      name="nome" 
                      type="text" 
                      placeHolder="nome"
                    />
                    <ErrorMessage component='div' className='erro' name="nome" />
                  </div>

                  <div className='formControl'>                          
                    <Field
                      className='input'
                      placeHolder='Email'
                      id='email'
                      name="email" 
                      type="email" 
                    />
                    <ErrorMessage component='div' className='erro' name="email" />
                  </div>

                  <div className="formControl">                    
                    <Field 
                      className='input'
                      placeHolder='CPF'
                      name="cpf" 
                      type="text"
                      onChange={(ev) => Masks.maskCpf(ev, formik)}
                      maxLength={14}
                    />
                    <ErrorMessage component='div' className='erro' name="cpf" />
                  </div>
                  
                  <div className="formControl">                 
                    <Field 
                      className='input'
                      placeHolder='Telefone'
                      name="tel"
                      type="text"
                      onChange={(ev) => Masks.maskTel(ev, formik)}
                      maxLength={15}   
                    />
                    <ErrorMessage component='div' className='erro' name="tel" />
                  </div>

                  <div className='formControl'>
                    
                    <Field 
                      className='input'
                      placeHolder='Senha'
                      name="senha"
                      type="password" 
                    />
                    <ErrorMessage component='div' className='erro' name="senha" />
                  </div>

                  <div className='formControl'>
                    
                    <Field 
                      className='input'
                      placeHolder='Confirmar senha'
                      name="confsenha" 
                      type="password" />
                    <ErrorMessage component='div' className='erro' name="confsenha" />
                  </div> 
              
                <div className="formControl">                
                  
                  <Field 
                    className='input'
                    placeHolder='CEP'
                    name="cep"
                    type="text"
                    onChange={(ev) => Masks.maskCep(ev, formik)}
                    onBlur={(ev) => viaCep(ev, formik)}
                    maxLength={9}
                  />
                  <ErrorMessage component='div' className='erro' name="cep" />    
                </div>

                <div className='formControl'>
                  <Field
                    className='input'
                    placeHolder='Rua' 
                    name="rua" 
                    type="text" />
                </div>

                <div className='formControl'>
                  <Field 
                    className='input'
                    placeHolder='Nº'
                    name="numero" 
                    type="number" />
                </div>

                <div className='formControl'> 
                  <Field 
                    className='input'
                    placeHolder='Complemento'
                    name="comp" 
                    type="text" />
                </div>

                <div className='formControl'>                  
                  <Field 
                    className='input'
                    placeHolder='Bairro'
                    name="bairro" 
                    type="text" 
                  />
                </div>

                <div className='formControl'> 
                  <Field 
                    className='input'
                    placeHolder='Cidade'
                    name="cidade" 
                    type="text" />
                </div>

                <div className='formControl'>
                  <Field 
                    className='input'
                    placeHolder='Estado'
                    name="estado" 
                    type="text" />
                </div>

                <button id='btn' type="submit" disabled={!formik.dirty || !formik.isValid}>Cadastrar</button>
              </Form>
            )
          }}
      </Formik>
    </div>
  );
*/