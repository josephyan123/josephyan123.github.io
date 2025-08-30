import finetuningImage from '../assets/images/finetuning.png';

export default function Projects() {
  const projects = [
    {
      title: "Fine-tuning Large Language Models",
      description: "Line-tuning LLM with LoRA",
      technologies: ["LLM", "Transformers", "LoRA"],
      link: "https://github.com/josephyan123/Fine-tuning-LLM",
      image: finetuningImage
    },
    // Add more projects
  ]

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="flex items-start gap-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
            
            {/* Image - Left Side (Compact) */}
            <div className="flex-shrink-8">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-32 h-auto object-cover "
              />
            </div>

            {/* Content - Right Side */}
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white line-clamp-1">
                {project.title}
              </h3>
              <p className="mb-3 text-gray-600 dark:text-gray-300 text-sm leading-tight">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={project.link} 
                className="inline-flex items-center px-4 py-2 bg-grey-500 text-blue rounded-md hover:bg-yellow-600 transition-colors duration-200 text-sm font-medium"
              >
                View Project
                <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
