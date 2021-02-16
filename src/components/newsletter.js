import React, { useState } from 'react';
import { FaEnvelope, FaExclamationTriangle } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import Axios from 'axios';

import './style.scss';

const Newsletter = () => {
  const [resetKey, setResetKey] = useState(0);
  const [submitLabel, setSubmitLabel] = useState('Assinar');
  const [formMessage, setFormMessage] = useState('');
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async (data) => {
    console.log(data);

    setSubmitLabel('Processando...');

    const formId = 3;

    data = Object.entries({
      'mauticform[email]': data.emailInput,
      'mauticform[formId]': formId,
      'mauticform[return]': '',
      'mauticform[formName]': 'newsletternovidadestech',
      'mauticform[messenger]': '1',
    })
      .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
      .join('&');

    try {
      await Axios.post(
        `https://marketing.obrunogermano.com/index.php/form/submit?formId=${formId}`,
        data,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-Requested-With': 'XMLHttpRequest',
          },
        }
      );

      setFormMessage(
        <div className="notification is-success">
          Tudo certo! Agora você não vai perder nada. A próxima newsletter vai
          direto para a sua inbox.
        </div>
      );
      setResetKey(Math.random());
      setSubmitLabel('Assinar');
    } catch (error) {
      setFormMessage(
        <div className="notification is-danger">
          Houve algum problema, tente novamente mais tarde...
        </div>
      );
      setSubmitLabel('Assinar');
    }

    setTimeout(() => {
      setFormMessage('');
    }, 10000);
  };

  return (
    <section className="section">
      <div className="container">
        <h2 className="title has-text-centered">
          Receba Novidades Tech na sua inbox
        </h2>
        <div className="columns is-multiline is-centered">
          <div className="column is-8">
            <form
              key={resetKey}
              action=""
              className="form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="field">
                <label htmlFor="emailInput" className="label">
                  Seu melhor e-mail
                  <p className="help is-danger is-pulled-right">
                    {errors.emailInput && 'O e-mail é obriatório.'}
                  </p>
                </label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    className={`input ${errors.emailInput && 'is-danger'}`}
                    type="email"
                    placeholder="nome@email.com"
                    id="emailInput"
                    name="emailInput"
                    ref={register({ required: true })}
                  />
                  <span className="icon is-small is-left">
                    <FaEnvelope />
                  </span>

                  <span className="icon is-small is-right is-danger">
                    {errors.emailInput && <FaExclamationTriangle />}
                  </span>
                </div>
              </div>

              {formMessage}

              <div className="field is-grouped">
                <div className="control" style={{ width: '100%' }}>
                  <button
                    style={{ width: '100%' }}
                    className="button is-large is-primary"
                  >
                    {submitLabel}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
