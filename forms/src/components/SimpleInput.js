import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');

  return (
    <form>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' />
      </div>
      <div className='form-control'>
        <label htmlFor='email'>Your Email</label>
        <input type='email' id='email' />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
