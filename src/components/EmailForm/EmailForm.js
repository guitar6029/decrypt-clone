import {useState} from 'react';
import ValidateEmail from '../ValidateEmail/ValidateEmail';

function EmailForm() {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const handleEmailInput = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordInput = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(previousState => !previousState);
    }

  return (
      <>
      { (submitted) ? <ValidateEmail /> :    
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__label">
            <label htmlFor="email">Email</label>
        </div>
        <div className="form__input">
            <input type='email' name='email' required placeholder="joe@example.com" onChange={handleEmailInput}/>
        </div>
        <div className="form__label">
            <label htmlFor="password">
                Password
            </label>
        </div>
        <div className="form__input">
            <input type="password" name="password" required onChange={handlePasswordInput}/>
        </div>
        <button>Sign up</button>
    </form>}
      </>
  )
}

export default EmailForm