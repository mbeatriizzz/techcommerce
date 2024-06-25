import React from "react";

interface ProductProps {
  name: string;
  image: string;
}

const CategoryAComponent = () => (
  <div className="flex flex-wrap">
    <ProductComponent name="Produto 1" image="/assets/products/smart1.png" />
    <ProductComponent name="Produto 2" image="/assets/products/smart1.png" />
    <ProductComponent name="Produto 3" image="/assets/products/smart1.png" />
    <ProductComponent name="Produto 4" image="/assets/products/smart1.png" />
    <ProductComponent name="Produto 5" image="/assets/products/smart1.png" />
  </div>
);

const CategoryBComponent = () => (
  <div className="flex flex-wrap">
    <ProductComponent name="Produto X" image="/assets/products/smart1.png" />
    <ProductComponent name="Produto Y" image="/assets/products/smart1.png" />
    <ProductComponent name="Produto Z" image="/assets/products/smart1.png" />
    <ProductComponent name="Produto T" image="/assets/products/smart1.png" />
    <ProductComponent name="Produto U" image="/assets/products/smart1.png" />
  </div>
);

const CategoryCComponent = () => (
  <div className="flex flex-wrap">
    <ProductComponent
      name="Produto Alpha"
      image="/assets/products/smart1.png"
    />
    <ProductComponent name="Produto Beta" image="/assets/products/smart1.png" />
    <ProductComponent name="Produto Gama" image="/assets/products/smart1.png" />
    <ProductComponent
      name="Produto Ninja"
      image="/assets/products/smart1.png"
    />
    <ProductComponent
      name="Produto Jungkoki do bitiesi"
      image="/assets/products/smart1.png"
    />
  </div>
);

const ProductComponent: React.FC<ProductProps> = ({ name, image }) => (
  <div className="m-2 p-4 bg-gray-200 rounded-lg shadow-md">
    <img src={image} className="w-full h-auto mb-2 rounded" />
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
