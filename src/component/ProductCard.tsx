import Image from "./Image";
import Button from "./ui/Button";
import { Iproduct } from "../interfaces/index.ts";

import { txtSlice } from "../utils/function.ts";
import CircleColor from "./CircleColor.tsx";
import {  Trash2, Pencil } from "lucide-react";

interface Iprops {
  product: Iproduct;
  setproducttoedit: (product: Iproduct) => void;
  openEditModal: () => void;
  idx: number;
  setproducttoeditidx: (value: number) => void;
  openDeleteModal: () => void;
}

function ProductCard({
  product,
  setproducttoedit,
  openEditModal,
  setproducttoeditidx,
  idx,
  openDeleteModal,
}: Iprops) {
  const { title, description, imageURL, category, price, colors } = product;

  /*------------Handler--------- */
  const onEdit = () => {
    openEditModal();
    setproducttoedit(product);
    setproducttoeditidx(idx);
  };

  const onRemove = () => {
    setproducttoedit(product);
    setproducttoeditidx(idx);
    openDeleteModal();
  };

  /*-------- Render----------- */
  const renderProductColor = colors.map((color) => (
    <CircleColor key={color} color={color} />
  ));

  return (
    <div className="w-full mx-auto bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 flex flex-col h-[480px]">
      <div className="relative">
        <Image
          imageURL={imageURL}
          alt={title}
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-md">
          <Image
            imageURL={category.imageURL}
            alt={category.name}
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-gray-800 truncate">
          {title}
        </h3>
        <p className="text-gray-500 text-sm mt-1 min-h-[40px]">
          {txtSlice(description, 50)}
        </p>

        <div className="flex-grow" />

        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-indigo-600">${price}</span>
          <div className="flex items-center space-x-2">
            {renderProductColor}
          </div>
        </div>

        <div className="flex items-center space-x-3 mt-5">
          <Button
            className="flex-1 flex items-center justify-center gap-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
            onClick={onEdit}
          >
            <Pencil size={18} /> Edit
          </Button>
          <Button
            className="flex-1 flex items-center justify-center gap-x-2 bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition-colors"
            onClick={onRemove}
          >
            <Trash2 size={18} /> Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
