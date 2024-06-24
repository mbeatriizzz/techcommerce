import React from "react";

interface ProductProps {
  name: string;
}

const CategoryAComponent = () => (
  <div className="flex flex-wrap">
    <ProductComponent name="Produto 1" />
    <ProductComponent name="Produto 2" />
    <ProductComponent name="Produto 3" />
    <ProductComponent name="Produto 4" />
    <ProductComponent name="Produto 5" />
  </div>
);

const CategoryBComponent = () => (
  <div className="flex flex-wrap">
    <ProductComponent name="Produto X" />
    <ProductComponent name="Produto Y" />
    <ProductComponent name="Produto Z" />
    <ProductComponent name="Produto T" />
    <ProductComponent name="Produto U" />
  </div>
);

const CategoryCComponent = () => (
  <div className="flex flex-wrap">
    <ProductComponent name="Produto Alpha" />
    <ProductComponent name="Produto Beta" />
    <ProductComponent name="Produto Gama" />
    <ProductComponent name="Produto Ninja" />
    <ProductComponent name="Produto Jungkoki do bitiesi" />
  </div>
);

const ProductComponent: React.FC<ProductProps> = ({ name }) => (
  <div className="m-2 p-4 bg-gray-200 rounded-lg shadow-md">
    <p>{name}</p>
  </div>
);

const Content = () => {
  const categories = [
    { title: "Aproveite a melhor oferta em", category: "Smarthphones" },
    { title: "Compre das", category: "Principais Categorias" },
    { title: "Top", category: "Marcas de Eletronicos" },
  ];

  return (
    <div>
      {categories.map((c, index) => (
        <div key={index} className="mb-4">
          <h2 className="font-semibold text-gray-500 border-b-2 border-solid border-blueMarine-700">
            {c.title} <span className="text-blueMarine-700">{c.category}</span>
          </h2>

          {c.category === "Smarthphones" && <CategoryAComponent />}
          {c.category === "Principais Categorias" && <CategoryBComponent />}
          {c.category === "Marcas de Eletronicos" && <CategoryCComponent />}
        </div>
      ))}
    </div>
  );
};

export default Content;
