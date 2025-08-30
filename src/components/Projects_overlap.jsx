export default function Projects() {
  const projects = [
    {
      title: "Fine-tuning Large Language Models",
      description: "Line-tuning LLM with LoRA",
      technologies: ["LLM", "Transformers", "LoRA"],
      link: "https://github.com/josephyan123/Fine-tuning-LLM",
      image: "/src/assets/images/finetuning.png"
    },
    // Add more projects
  ]

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="relative group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 min-h-[400px]"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              {/* Gradient Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70"></div>
            </div>

            {/* Content - Positioned at bottom with padding */}
            <div className="relative z-10 p-6 flex flex-col justify-end h-full">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg -mb-2">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="mb-3 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 text-center w-full"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
