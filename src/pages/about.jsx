import React from 'react';

export const About = () => {
      return (
        <div className=" bg-white">
          <section className="p-5">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 p-2 gap-8 items-center justify-center">
                <img 
                  src="/src/assets/images/20250228_230705.png" alt="JF" className="rounded-3xl"
                />
                <div>
                  <h2 className="text-gray-800 pb-4 text-3xl font-bold">Acerca de:</h2>
                  <p className="text-gray-700">
                  Soy Jared Ferrera de la carrera de Ciencias de la Computacion de la Universidad Catolica.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
};

