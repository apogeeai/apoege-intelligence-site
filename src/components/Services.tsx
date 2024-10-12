import React from 'react';
import { Cpu, BarChart, Lightbulb } from 'lucide-react';

const services = [
  { icon: Cpu, title: 'AI Integration', description: 'Seamlessly integrate AI into your existing systems' },
  { icon: BarChart, title: 'Data Analytics', description: 'Unlock insights from your data with advanced AI analytics' },
  { icon: Lightbulb, title: 'AI Strategy', description: 'Develop a comprehensive AI strategy for your business' },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg">
              <service.icon className="text-accent mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;