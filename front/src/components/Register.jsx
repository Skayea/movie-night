import { useState } from 'react';
import { useLocalStorage } from '../hook/useLocalStorage';

const emptyCurrentUser = {
  username: '',
  password: '',
  email: '',
};

const Register = () => {
  const [currentUser, setCurrentUser] = useLocalStorage(
    'USER-INFO',
    emptyCurrentUser
  );

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [message, setMessage] = useState('');

  const checkCurrentUser = () => {
    return currentUser && currentUser.username !== '';
  };

  const checkUsername = (value) => {
    if (!value) {
      setMessage('Поле "Username" обязательное');
      return false;
    } else if (value.length <= 5) {
      setMessage('Имя пользователя должно быть 5 или более символов');
      return false;
    }
    return true;
  };

  const checkPassword = (value) => {
    if (!value) {
      setMessage('Поле "Password" обязательное');
      return false;
    } else if (value.length <= 8) {
      setMessage('Пароль должно быть 8 или более символов');
      return false;
    }
    return true;
  };

  const checkEmail = (value) => {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!value) {
      setMessage('Поле "Email" обязательное');
      return false;
    } else if (!value.match(validRegex)) {
      setMessage('Неверный формат Email');
      return false;
    }
    return true;
  };

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setMessage('');
    let check = checkUsername(username);
    if (check) {
      check = checkEmail(email);
    }

    if (check) {
      check = checkPassword(password);
    }

    if (check) {
      const newCurrentUser = {
        username: username,
        password: password,
        email: email,
      };
      setCurrentUser(newCurrentUser);
    }
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <form onSubmit={handleRegister}>
          {!checkCurrentUser() ? (
            <div>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-group"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                />
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-block">Sing Up</button>
              </div>
            </div>
          ) : (
            <div>Добро пожаловать, {username}!</div>
          )}

          {message && (
            <div className="form-group">
              <div className={'alert alert-danger'} role="alert">
                {message}
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
