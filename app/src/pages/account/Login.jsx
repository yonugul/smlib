import React, { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';

function Login() {
  const history = useHistory();
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [message, setmessage] = useState('');

  const userdetails = {
    username,
    password,
    grant_type: 'password',
  };

  const formBody = [];
  for (const property in userdetails) {
    const encodedKey = encodeURIComponent(property);
    const encodedValue = encodeURIComponent(userdetails[property]);
    const encodeitem = `${encodedKey}=${encodedValue}`;
    formBody.push(encodeitem);
  }
  const textFormBody = formBody.join('&');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://advdijital.com/api/login', {
      method: 'POST',
      body: textFormBody,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
    }).then((response) => {
      response.json().then((result) => {
        if (response.status === 200) {
          setmessage('Giriş başarılı yönlendiriliyorsunuz...');
          setTimeout(() => {
            history.push('/books');
          }, 2000);
          console.log(result);
          localStorage.setItem('userinfo', JSON.stringify(result));
          localStorage.setItem('user', 'true');
        } else if (response.status === 400) {
          setmessage('Bu kullanıcıya ait bir hesap bulunamadı...');
          setTimeout(() => {
            setmessage('');
          }, 2000);
        }
      });
    });
  };

  return (
    <Col lg="12">
      <div className="login">
        {message ? (
          <div className="warningmessage">
            <div className="loader-login" title="0">
              <svg
                version="1.1"
                id="loader-1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40px"
                height="40px"
                viewBox="0 0 40 40"
                enableBackground="new 0 0 40 40"
              >
                <path
                  opacity="0.2"
                  fill="#000"
                  d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
                          s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
                          c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
                />
                <path
                  fill="#000"
                  d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
                          C22.32,8.481,24.301,9.057,26.013,10.047z"
                >
                  <animateTransform
                    attributeType="xml"
                    attributeName="transform"
                    type="rotate"
                    from="0 20 20"
                    to="360 20 20"
                    dur="0.5s"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>
            </div>
            <span>{message}</span>
          </div>
        ) : (
          <div className="logintitle">
            <p>Hoşgeldiniz</p>
            <p>
              Giriş yaparak soru çözümlerini kaydetmeye başlayabilirsiniz...
            </p>
          </div>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>E-Posta</Form.Label>
            <Form.Control
              name="username"
              onChange={(e) => setusername(e.target.value)}
              value={username}
              type="email"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Şifre</Form.Label>
            <Form.Control
              name="password"
              onChange={(e) => setpassword(e.target.value)}
              value={password}
              type="password"
              required
            />
          </Form.Group>
          <Form.Group>
            <Button type="submit" className="btn btn-block loginbtn">
              Giriş Yap
            </Button>
          </Form.Group>
          {/* <Col lg="12">
            <Link to="/forgotpassword"> Şifremi Unuttum</Link>
          </Col> */}
        </Form>
      </div>
    </Col>
  );
}

export default Login;
