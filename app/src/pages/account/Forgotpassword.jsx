import React, { useState } from 'react';
import { Col, Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function Forgotpassword() {
  const history = useHistory();
  const [message, setmessage] = useState('');

  const handleForgotPassword = () => {
    setmessage('E-posta adresiniz gönderildi..');
    setTimeout(() => {
      history.push('/');
    }, 2000);
  };

  return (
    <Col lg="12">
      <div className="forgotpassword">
        <div className="title">
          {message ? (
            <p className="message"> {message} </p>
          ) : (
            <p>
              E-Posta Adresinizi Girerek Size Göndereceğimiz Bağlantı İle
              Şifrenizi Sıfırlayabilirsiniz.
            </p>
          )}
        </div>
        <Form onSubmit={handleForgotPassword}>
          <Form.Group>
            <Form.Label>E posta</Form.Label>
            <Form.Control type="email" required />
          </Form.Group>
          <Form.Group>
            <Button type="submit" className="forgotpasswordbtn">
              Gönder
            </Button>
          </Form.Group>
        </Form>
      </div>
    </Col>
  );
}

export default Forgotpassword;
