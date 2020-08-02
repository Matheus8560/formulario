import React from 'react';
import './App.css';
import * as Masks from './components/Mask/';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import schema from './schema/schema';
import viaCep from './services/viacep';
import Button from './components/Button';

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
  
  return (

    <div className="App">

      <h1>Cadastre-se</h1>
      
      <Formik
        validationSchema={schema}
        onSubmit={onSubmit}
        initialValues={initialValues}
      >
        {formik => {

          return(

            <Form>

              <div className='formControl'>                   
                <Field 
                  className='input'
                  name="nome" 
                  type="text" 
                  placeholder="Nome"
                />
                <ErrorMessage component='div' className='erro' name="nome" />
              </div>

              <div className='formControl'>                          
                <Field
                  className='input'
                  placeholder='Email'
                  name="email" 
                  type="email" 
                />
                <ErrorMessage component='div' className='erro' name="email" />
              </div>
              
              <div className="formgroup">
                <div className="formItem">                    
                  <Field 
                    className='input'
                    placeholder='CPF'
                    name="cpf" 
                    type="text"
                    onChange={(ev) => Masks.maskCpf(ev, formik)}
                    maxLength={14}
                  />
                  <ErrorMessage component='div' className='erro' name="cpf" />
                </div>
                
                <div className="formItem">                 
                  <Field 
                    className='input'
                    placeholder='Telefone'
                    name="tel"
                    type="text"
                    onChange={(ev) => Masks.maskTel(ev, formik)}
                    maxLength={15}   
                  />
                  <ErrorMessage component='div' className='erro' name="tel" />
                </div>
              </div>

              <div className="formgroup">
                <div className='formItem'>
                  <Field 
                    className='input'
                    placeholder='Senha'
                    name="senha"
                    type="password" 
                  />
                  <ErrorMessage component='div' className='erro' name="senha" />
                </div>

                <div className='formItem'>                  
                  <Field 
                    className='input'
                    placeholder='Confirmar senha'
                    name="conf_senha" 
                    type="password" 
                  />
                  <ErrorMessage component='div' className='erro' name="conf_senha" />
                </div> 
              </div>

              <div className='formgroup'>
                <div id="cep">                
                  <Field 
                    className='input'
                    placeholder='CEP'
                    name="cep"
                    type="text"
                    onChange={(ev) => Masks.maskCep(ev, formik)}
                    onBlur={(ev) => viaCep(ev, formik)}
                    maxLength={9}
                  />
                  <ErrorMessage component='div' className='erro' name="cep" />    
                </div>

                <div id='rua'>
                  <Field
                    className='input'
                    placeholder='Rua' 
                    name="rua" 
                    type="text"
                  />
                  <ErrorMessage component='div' className='erro' name="rua" />
                </div>

                <div id='num'>
                  <Field 
                    className='input'
                    placeholder='Nº'
                    name="numero" 
                    type="number" 
                  />
                </div>
              </div>

              <div className='formControl'> 
                <Field 
                  className='input'
                  placeholder='Complemento'
                  name="comp" 
                  type="text" 
                />
                <ErrorMessage component='div' className='erro' name="comp" />   
              </div>

              <div className='formgroup'>
                <div id='bairro'>                  
                  <Field 
                    className='input'
                    placeholder='Bairro'
                    name="bairro" 
                    type="text"   
                  />
                  <ErrorMessage component='div' className='erro' name="bairro" />
                </div>

                <div id='cidade'> 
                  <Field 
                    className='input'
                    placeholder='Cidade'
                    name="cidade" 
                    type="text" 
                  />
                  <ErrorMessage component='div' className='erro' name="cidade" />
                </div>

                <div id='estado'>
                  <Field 
                    className='input'
                    placeholder='Estado'
                    name="estado" 
                    type="text" 
                  />
                  <ErrorMessage component='div' className='erro' name="estado" />
                </div>
              </div>

              <Button type="submit" disabled={!formik.dirty || !formik.isValid}>Cadastrar</Button>

            </Form>
          )
        }}

      </Formik>
      
    </div>
  );
}