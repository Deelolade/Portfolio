import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Swal from 'sweetalert2'

const Form = () => {
  const ValidationSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
})
const { register, formState:{ errors }} = useForm({
    resolver: yupResolver(ValidationSchema)
})
const onSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  formData.append("access_key", "047dbc54-958b-4a84-997a-2aecb4fb4fce");

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
      title: 'Custom Styled Popup',
      text: "Message sent succesfully",
      icon: "success",
      customClass: {
        popup: 'custom-swal', // Apply the custom class here
    },
    });
  }
};
  return (
    <div>
      <div className="Form-container mt-5 pt-5 mb-5">
        <div className="Form-header pt-5 mt-5">
            <h1 className='fw-bolder Form-heading'>Send me a message!</h1>
            <p className='mt-3'>Got questions or proposal, or just want <br /> to say hello? Go ahead</p>
        </div>
        <form  className='form' onSubmit={onSubmit}>
        <div className="form-main d-flex ">
        <div className=' form-input mb-2 d-grid me-5'>
        <label htmlFor="name" className="form-label mt-2">Your Name</label>
        <input type="text" name="userName" id="name" placeholder='Enter Your Name'className='py-2 form-type' required/>
        <hr className='form-rule' />
        </div>
        <div className=' form-input mb-2 d-grid ms-5'>
        <label htmlFor="email" className="form-label mt-2">Email Address</label>
        <input type="text" name="userEmail" id="email" placeholder='Enter Your Email Address'required className='pt-2 form-type' />
        <hr className='form-rule '/>
        </div>
        </div>
        <div className="form-message  pt-5 d-grid">
          <label htmlFor="message" className='form-label me-auto'>Your Message</label>
          <textarea id="message" rows="4" placeholder="Type your message here..." className='form-type-message' name='userMessage'></textarea>
          <hr />
        <button className="btn btn-success mx-auto submit-button mt-5 py-1 rounded-1 " type='submit' style={{width:"21.5rem"}}>Click here</button>
        </div>
        </form>
      </div>

    </div>
  )
}

export default Form
