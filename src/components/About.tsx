import React from 'react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-16">Meet the Innovators</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-center">
            <img
              className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              src="/images/Ansh.JPG"
              alt="Ansh Porwal"
            />
            <h3 className="text-xl font-semibold text-gray-900">Ansh Porwal</h3>
            <p className="text-gray-600 mt-2">Technology Innovator</p>
            <p className="mt-4 text-gray-500 max-w-md mx-auto">
              With 1+ years in tech innovation, Ansh brings expertise in AI and sustainable technology.
              His vision drives our most ambitious projects.
            </p>
          </div>
          <div className="text-center">
            <img
              className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              src="/images/Siya.JPG"
              alt="Siya Pareek"
            />
            <h3 className="text-xl font-semibold text-gray-900">Siya Pareek</h3>
            <p className="text-gray-600 mt-2">Business Strategist</p>
            <p className="mt-4 text-gray-500 max-w-md mx-auto">
              Siya's strategic mindset and market insight have helped launch successful ventures.
              She specializes in turning innovative ideas into viable businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}