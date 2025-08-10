export default function About() {
  return (
    <section id="about" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3">
          <img 
            src="/placeholder-profile.jpg" 
            alt="Profile" 
            className="rounded-full w-64 h-64 object-cover mx-auto"
          />
        </div>
        <div className="md:w-2/3">
          <p className="mb-4">
            Detailed information about yourself, your background, education, and professional journey.
          </p>
          <p className="mb-4">
            Your passions, interests, and what drives you in your field.
          </p>
          <p>
            Any other relevant information that showcases your personality and expertise.
          </p>
        </div>
      </div>
    </section>
  )
}
