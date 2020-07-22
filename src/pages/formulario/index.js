import React from 'react';
import * as Masks from './mask';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import schema from './schema';
import viaCep from '../../services/viacep';
import './style.css';


  function Formulario(initialValues, onSubmit) {
    
    return (
      <div className="Formulario">
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
                        placeholder="nome"
                      />
                      <ErrorMessage component='div' className='erro' name="nome" />
                    </div>
  
                    <div className='formControl'>                          
                      <Field
                        className='input'
                        placeholder='Email'
                        id='email'
                        name="email" 
                        type="email" 
                      />
                      <ErrorMessage component='div' className='erro' name="email" />
                    </div>

                    <div className='grid'>
                      <div className="formControl">                    
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
                      
                      <div className="formControl">                 
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

                    <div className='formControl'>
                      
                      <Field 
                        className='input'
                        placeholder='Senha'
                        name="senha"
                        type="password" 
                      />
                      <ErrorMessage component='div' className='erro' name="senha" />
                    </div>
  
                    <div className='formControl'>
                      
                      <Field 
                        className='input'
                        placeholder='Confirmar senha'
                        name="confsenha" 
                        type="password" />
                      <ErrorMessage component='div' className='erro' name="confsenha" />
                    </div> 
                
                  <div className="formControl">                
                    
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
  
                  <div className='formControl'>
                    <Field
                      className='input'
                      placeholder='Rua' 
                      name="rua" 
                      type="text" />
                  </div>
  
                  <div className='formControl'>
                    <Field 
                      className='input'
                      placeholder='Nº'
                      name="numero" 
                      type="number" />
                  </div>
  
                  <div className='formControl'> 
                    <Field 
                      className='input'
                      placeholder='Complemento'
                      name="comp" 
                      type="text" />
                  </div>
  
                  <div className='formControl'>                  
                    <Field 
                      className='input'
                      placeholder='Bairro'
                      name="bairro" 
                      type="text" 
                    />
                  </div>
  
                  <div className='formControl'> 
                    <Field 
                      className='input'
                      placeholder='Cidade'
                      name="cidade" 
                      type="text" />
                  </div>
  
                  <div className='formControl'>
                    <Field 
                      className='input'
                      placeholder='Estado'
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
  }
  
  export default Formulario;