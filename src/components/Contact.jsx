import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitMessage('Thank you for your message! I will get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitMessage('There was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
	<h2 className="text-3xl font-bold mb-12 text-center">Leave Me a Message</h2>
	  
	<div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                ></textarea>
              </div>
              
              
		<button
		  type="submit"
		  disabled={isSubmitting}
		  className="
		    px-6 py-3 
		    bg-blue-800       // Darker blue for better contrast
		    text-grey-100 
		    font-medium       // Ensures text isn't light
		    rounded-lg 
		    hover:bg-blue-900 
		    transition-colors 
		    disabled:opacity-75
		    shadow-md         // Adds depth
		    min-w-[120px]     // Ensures consistent width
		  "
		>
		  <span className="inline-flex items-center justify-center gap-2">
		    {isSubmitting ? (
		      <>
			<svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
			  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
			  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
			</svg>
			Sending...
		      </>
		    ) : 'Send Message'}
		  </span>
		</button>

              
              {submitMessage && (
                <p className={`mt-4 ${submitMessage.includes('error') ? 'text-red-500' : 'text-green-500'}`}>
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
