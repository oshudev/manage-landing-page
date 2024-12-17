import { useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const emailRegex =
    /^[A-Za-z0-9._%+-]{1,64}@(?:[A-Za-z0-9-]{1,63}\.){1,125}[A-Za-z]{2,63}$/;

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValidEmail = emailRegex.test(email);

    if (!email || !isValidEmail) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
      setEmail('');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={!isEmailValid ? 'error' : ''}>
        <input
          type="text"
          placeholder="Updates in your inbox…"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="button button--primary">
          Go
        </button>
      </form>
      {!isEmailValid && (
        <span className="error-msg">Please insert a valid email</span>
      )}
    </>
  );
}
