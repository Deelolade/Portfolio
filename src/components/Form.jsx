import Swal from 'sweetalert2'
import { MdArrowRightAlt } from "react-icons/md";
import { useEffect } from 'react';

const Form = () => {
  const handleFocus = (e) => {
    if (e.target.value) {
        e.target.style.backgroundColor = '#6e44ff';
    }
};

  useEffect(() => {
    const handleAutofill = (e) => {
        e.target.style.backgroundColor = '#6E44FF';
    };

    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('animationstart', handleAutofill);
    });

    return () => {
        inputs.forEach(input => {
            input.removeEventListener('animationstart', handleAutofill);
        });
    };
}, []);

const onSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  formData.append("access_key", "85cf8651-749a-4242-8b84-f07bfef4cc4e");

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  }).then((res) => res.json());

  if (res.success) {
    Swal.fire({
      title: 'Successful',
      text: "I would surely get back to you as soon as I can ",
      icon: "success",
      customClass: {
        popup: 'custom-swal', 
    },
    });
  }
};
  return (
    <div>
      <div className="Form-container  pt-5 pb-5">
        <div className="Form-header pt-5 mt-5">
            <h1 className='fw-bolder Form-heading'>Send me a message!</h1>
            <p className='mt-3'>Got questions or proposal, or just want <br /> to say hello? Go ahead</p>
        </div>
        <form  className='form' onSubmit={onSubmit}>
        <div className="form-main d-flex mx-auto ">
        <div className=' form-input mb-2 d-grid me-5 '>
        <label htmlFor="name" className="form-label mt-2">Your Name</label>
        <input type="text" name="Name" id="name" placeholder='Enter Your Name'className='py-2 form-type ' required  onFocus={handleFocus}/>
        <hr className='form-rule' />
        </div>
        <div className=' form-input mb-2 d-grid ms-5 '>
        <label htmlFor="email" className="form-label mt-2">Email Address</label>
        <input type="text" name="Email" id="email" placeholder='Enter Your Email Address'required className='pt-2 form-type' />
        <hr className='form-rule '/>
        </div>
        </div>
        <div className="form-message  pt-5 d-grid">
          <label htmlFor="message" className='form-label me-auto'>Your Message</label>
          <textarea id="message" rows="4" placeholder="Type your message here..." className='form-type-message' name='Message'></textarea>
          <hr />
        <button className=" Form-button mx-auto pt-1  lh-base mt-5" type='submit' >Get In Touch<MdArrowRightAlt className='mb-2 fs-3 form-icon' /></button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Form
