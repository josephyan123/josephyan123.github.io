import React from 'react';

// Create a reusable Highlight component
const Highlight = ({ children }) => (
  <span className="bg-yellow-200 dark:bg-yellow-700 text-gray-900 dark:text-yellow-100 px-1 rounded font-medium">
    {children}
  </span>
);

// Create a component to automatically highlight keywords
const HighlightedDescription = ({ text }) => {
  const keywords = ['LoRA', '4-bit quantization', 'gradient checkpointing', 'consumer hardware'];
  const regex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi');
  const parts = text.split(regex);
  
  return (
    <>
      {parts.map((part, index) =>
        keywords.includes(part) ? (
          <Highlight key={index}>{part}</Highlight>
        ) : (
          part
        )
      )}
    </>
  );
};

export default function Articles() {
  const articles = [
    {
      title: "Practical Fine-Tuning of Large Language Models: ",
      subtitle: "From Traditional Approaches to Efficient Techniques",
      description: "Learn practical LLM fine-tuning using LoRA, 4-bit quantization, gradient checkpointing, and smart resumption strategies for consumer hardware. Complete code examples included.",
      link: "https://medium.com/@josephyan123/practical-fine-tuning-llms-lora-quantization-efficient-techniques-a5ee28760c7a",
      image: "/src/assets/images/article1_image1.png"
    },
    // Add more articles
  ]

  return (
    <section id="Articles" className="py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">My Writings</h2>
      <div className="space-y-8">
        {articles.map((article, index) => (
          <div key={index} className="flex items-start gap-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
            
            {/* Image - Left Side (Compact) */}
            <div className="flex-shrink-0">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-32 h-auto object-cover rounded-lg border border-gray-200 dark:border-gray-600"
              />
            </div>

            {/* Content - Right Side */}
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                {article.title}
              </h3>
              <p className="mb-3 font-bold text-gray-600 dark:text-gray-300 text-md leading-tight">
                {article.subtitle}
              </p>
              <p className="mb-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed max-w-128">
                <HighlightedDescription text={article.description} />
              </p>
              <a 
                href={article.link} 
                className="inline-flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 text-sm font-medium"
              >
                Read Article
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
