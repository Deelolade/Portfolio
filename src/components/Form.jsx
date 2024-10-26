import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const Form = () => {
  const ValidationSchema = yup.object().shape({
    name: yup.string().required("fill in the space"),
    email: yup.string().email().required("Please fill out this field"),
})
const { register,handleSubmit, formState:{ errors }} = useForm({
    resolver: yupResolver(ValidationSchema)
})
const onSubmit = (data) => {
    console.log(data)
}
  return (
    <div>
      <div className="Form-container mt-5 pt-5 mb-5">
        <div className="Form-header pt-5 mt-5">
            <h1 className='fw-bolder Form-heading'>Send me a message!</h1>
            <p className='mt-3'>Got questions or proposal, or just want <br /> to say hello? Go ahead</p>
        </div>
        <form action="" onSubmit = {handleSubmit(onSubmit)} className='form'>
        <div className="form-main d-flex ">
        <div className=' form-input mb-2 d-grid me-5'>
        <label htmlFor="name" className="form-label mt-2">Your Name</label>
        <input type="text" name="" id="name" placeholder='Enter Your Name'{...register('name')} className='py-2 form-type' />
        {errors.name && <span className='errors'>*{errors.name?.message}</span>}
        <hr className='form-rule' />
        </div>
        <div className=' form-input mb-2 d-grid ms-5'>
        <label htmlFor="email" className="form-label mt-2">Email Address</label>
        <input type="text" name="" id="email" placeholder='Enter Your Email Address'{...register('email')} className='pt-2 form-type' />
        {errors.email && <span className='errors'>*{errors.email?.message}</span>}
        <hr className='form-rule '/>
        </div>
        </div>
        <div className="form-message  pt-5 d-grid">
          <label htmlFor="message" className='form-label me-auto'>Your Message</label>
          <textarea id="message" rows="4" placeholder="Type your message here..." className='form-type-message'></textarea>
          <hr />
        <button className="btn btn-success mx-auto submit-button mt-5 py-1 rounded-1 " type='submit' style={{width:"21.5rem"}} >hol </button>
        </div>
        </form>

      </div>
    </div>
  )
}

export default Form
