import React from 'react';

const CategoriaAComponente = () => <div>Componente para Categoria A</div>;
const CategoriaBComponente = () => <div>Componente para Categoria B</div>;
const CategoriaCComponente = () => <div>Componente para Categoria C</div>;

const Content = () => {
  const categorias = [
    { title: 'Aproveite a melhor oferta em', category: 'Smartphones' },
    { title: 'Compre das', category: 'principais Categorias' },
    { title: 'Top', category: 'Marcas de Eletrônicos' }
  ];

  return (
    <div>
      {categorias.map((c, index) => (
        <div key={index} className="w-fit font-semibold text-gray-500 border-b-2 border-solid border-blueMarine-700">
          <h2>{c.title} <span className="text-blueMarine-700">{c.category}</span></h2>

          {c.category === 'Categoria A' && <CategoriaAComponente />}
          {c.category === 'Categoria B' && <CategoriaBComponente />}
          {c.category === 'Categoria C' && <CategoriaCComponente />}
        </div>
      ))}
    </div>
  );
};

export default Content;
