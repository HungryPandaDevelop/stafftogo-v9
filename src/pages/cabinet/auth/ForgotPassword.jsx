import { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

import { toast } from 'react-toastify';


const ForgotPassword = () => {

  const [formData, setFormData] = useState({
    email: '',
  });

  const { email } = formData;

  const onChange = (e) => {

    setFormData(
      (prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value
      })
    )
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);

      toast.success('Письма сброса пароля отправлено на почту');

    } catch (error) {
      toast.error('Ошибка сброса пароля');
    }

  }

  return (
    <>
      <div className="stub"></div>
      <div className="content">
        <div className="main-grid">
          <div className="col-5 col-sm-12 col-xs-12">
            <h1>Восстановить пароль</h1>
            <form
              className="form-default"
              onSubmit={onSubmit}>
              <div className="form-line">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={onChange}
                  placeholder="email"
                  className="input-decorate "
                />
              </div>
              <div className="form-line">
                <button
                  className="btn btn--orange"
                >
                  Отправить пароль
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword