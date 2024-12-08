import React from 'react';
import { Lightbulb, TrendingUp } from 'lucide-react';

export function Ideas() {
  const ideas = [
    {
      id: 1,
      title: "EcoTech Solutions",
      description: "A revolutionary platform combining IoT sensors with AI to optimize energy consumption in commercial buildings, reducing carbon footprint by up to 40%.",
      status: "In Development",
      icon: <Lightbulb className="h-6 w-6 text-blue-500" />,
    },
    {
      id: 2,
      title: "HealthAI Assistant",
      description: "AI-powered healthcare companion that provides personalized wellness recommendations and connects users with healthcare providers in real-time.",
      status: "Seeking Investment",
      icon: <TrendingUp className="h-6 w-6 text-green-500" />,
    }
  ];

  return (
    <section id="ideas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-16">Our Latest Ideas</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {ideas.map((idea) => (
            <div key={idea.id} className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                {idea.icon}
                <h3 className="ml-2 text-xl font-semibold text-gray-900">{idea.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{idea.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-blue-600">Status: {idea.status}</span>
                <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}