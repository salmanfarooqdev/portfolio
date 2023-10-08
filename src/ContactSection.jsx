import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react'; // Import useState

export default function ContactSection() {
  const [state, handleSubmit] = useForm("mnqkokje");
  const [formData, setFormData] = useState({ name: '', email: '', message: '' }); // Initialize form data state

  const handleInputChange = (e) => {
    // Update the form data state whenever an input field changes
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (state.submitting) {
      return;
    }

    // Your form submission logic here (e.g., sending data to Formspree)

    // Clear the form fields upon successful submission
    setFormData({ name: '', email: '', message: '' });

    // Trigger the Formspree form submission
    handleSubmit(e);
  };

  return (
    <div className="contact-section">
      <div className="contact-title">Contact Me</div>

      <div className="contact-subtitle">
        Send me an email or a message, and I will get back to you!
      </div>

      <form onSubmit={handleFormSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  name="name"
                  placeholder="Name.."
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="email"
                  name="email"
                  placeholder="Email.."
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <textarea
                  name="message"
                  cols="90"
                  rows="10"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <button className="btn" type="submit" disabled={state.submitting}>
                  Submit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
