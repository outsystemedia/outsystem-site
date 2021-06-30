import emailjs from "emailjs-com";
import React from 'react';
import { GlobalStyle, StyledFormWrapper, StyledForm, StyledInput, StyledTextArea, StyledButton } from '../components/contactFormElements'

function ContactUs() {
    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_ktuxk2i', 'contatoid', e.target, 'user_MzBzpbUY9O4zKnTnaKweM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }
    return(
        <>
            <GlobalStyle />
                <StyledFormWrapper id="email">
                    <StyledForm onSubmit={sendEmail}>
                        <h2> Faça contato via e-mail. </h2>
                        <div className="row pt-5 mx-auto">
                            <label htmlFor="name" className="col-8 form-group pt-2 mx-auto">
                                <StyledInput type="text" className="form-control" placeholder="Nome" name="name"/>
                            </label>
                            <label htmlFor="email" className="col-8 form-group pt-2 mx-auto">
                                <StyledInput type="email" className="form-control" placeholder="Endereço de E-mail" name="email"/>
                            </label>
                            <label htmlFor="subject" className="col-8 form-group pt-2 mx-auto">
                                <StyledInput type="text" className="form-control" placeholder="Título" name="subject"/>
                            </label>
                            <label htmlFor="message" className="col-8 form-group pt-2 mx-auto">
                                <StyledTextArea className="form-control" id="" cols="30" rows="8" placeholder="Sua Mensagem" name="message"/>
                            </label>
                            <StyledButton type="submit" className="btn btn-info">Enviar E-mail</StyledButton>
                        </div>
                    </StyledForm>
                </StyledFormWrapper>
        </>
    )
}
export default ContactUs;
