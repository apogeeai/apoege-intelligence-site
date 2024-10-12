import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-4">
            At Apogee Intelligence, we're passionate about harnessing the power of artificial intelligence to drive business success. Our team of expert consultants brings years of experience in AI implementation, strategy, and optimization across various industries.
          </p>
          <p>
            We believe that AI has the potential to revolutionize every aspect of business operations, from customer service to product development. Our mission is to help companies of all sizes leverage AI technologies to stay competitive in the rapidly evolving digital landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;