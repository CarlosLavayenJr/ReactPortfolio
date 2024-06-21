import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    if (!formState[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: 'This field is required' });
    } else {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formState.name) newErrors.name = 'This field is required';
    if (!formState.email) newErrors.email = 'This field is required';
    if (formState.email && !validateEmail(formState.email)) newErrors.email = 'Invalid email address';
    if (!formState.message) newErrors.message = 'This field is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Log form data before sending
      console.log('Form data:', formState);
      try {
        const response = await fetch('http://localhost:3001/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formState)
        });

        if (response.ok) {
          setSubmitted(true);
        } else {
          const errorText = await response.text(); // Get error details
          throw new Error(`Network response was not ok: ${errorText}`);
        }
      } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
      }
    }
  };

  return (
    <section>
      <h2>Contact</h2>
      {submitted ? (
        <p>Thank you for your message! I'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input 
              type="text" 
              name="name" 
              value={formState.name} 
              onChange={handleChange} 
              onBlur={handleBlur} 
            />
            {errors.name && <span>{errors.name}</span>}
          </label>
          <label>
            Email:
            <input 
              type="email" 
              name="email" 
              value={formState.email} 
              onChange={handleChange} 
              onBlur={handleBlur} 
            />
            {errors.email && <span>{errors.email}</span>}
          </label>
          <label>
            Message:
            <textarea 
              name="message" 
              value={formState.message} 
              onChange={handleChange} 
              onBlur={handleBlur} 
            />
            {errors.message && <span>{errors.message}</span>}
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </section>
  );
};

export default Contact;
