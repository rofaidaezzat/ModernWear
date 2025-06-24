import "./App.css";
import ProductCard from "./component/ProductCard";
import Modal from "./component/ui/Modal";
import { ChangeEvent, FormEvent, useState } from "react";
import Button from "./component/ui/Button";
import { productlist, forminputlist, colors } from "./data/index.ts";
import Input from "./component/ui/Input.tsx";
import { Iproduct } from "./interfaces/index.ts";
import ErrorMsg from "./component/ErrorMsg.tsx";
import CircleColor from "./component/CircleColor.tsx";
import { v4 as uuid } from "uuid";

//import SelectMenu from "./component/ui/SelectMenu.tsx";
//import SelectMenu from "./component/ui/SelectMenu.tsx";

function App() {
  const defaultproductobl = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };
  /*-------- State----------- */
  const [products, setproducts] = useState<Iproduct[]>(productlist);
  const [product, setproduct] = useState<Iproduct>(defaultproductobl);
  const [producttoedit, setproducttoedit] =
    useState<Iproduct>(defaultproductobl);
  const [producttoeditidx, setproducttoeditidx] = useState<number>(0);
  const [tempColor, settempColor] = useState<string[]>([]);
  const [errors, seterrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEditModa, setisOpenEditModa] = useState(false);
  const [isOpenDeleteModal, setisOpenDeleteModal] = useState(false);
  //const [selectedCategory, setselectedCategory] = useState(categories[0]);
  /*-------- Handler----------- */
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const closeEditModal = () => setisOpenEditModa(false);
  const openEditModal = () => setisOpenEditModa(true);
  const closeDeleteModal = () => setisOpenDeleteModal(false);
  const openDeleteModal = () => setisOpenDeleteModal(true);

  const onchangehandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setproduct({
      ...product,
      [name]: value,
    });
    seterrors({
      ...errors,
      [name]: "",
    });
  };
  const onchangeEdithandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setproducttoedit({
      ...producttoedit,
      [name]: value,
    });
    seterrors({
      ...errors,
      [name]: "",
    });
  };

  const onCancel = () => {
    setproduct(defaultproductobl);
    closeModal();
  };
  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    setproducts((prev) => [
      {
        ...product,
        id: uuid(),
        colors: tempColor,
        // categories: selectedCategory,
      },
      ...prev,
    ]);
    setproduct(defaultproductobl);
    settempColor([]);
    closeModal();
  };
  const submitEditHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const updateproduct = [...products];
    updateproduct[producttoeditidx] = {
      ...producttoedit,
      colors: tempColor.concat(producttoedit.colors),
    };
    setproducts(updateproduct);
    setproducttoedit(defaultproductobl);
    settempColor([]);
    closeEditModal();
  };
  const removeProduct = () => {
    setproducts((prev) =>
      prev.filter((_, index) => index !== producttoeditidx)
    );
    closeDeleteModal(); // إغلاق المودال بعد الحذف
  };
  /*-------- Render----------- */

  const renderproductlist = products.map((product, idx) => (
    <ProductCard
      idx={idx}
      setproducttoeditidx={setproducttoeditidx}
      key={product.id}
      product={product}
      setproducttoedit={setproducttoedit}
      openEditModal={openEditModal}
      openDeleteModal={openDeleteModal}
    />
  ));
  const renderforminputlist = forminputlist.map((input) => (
    <div className="flex flex-col " key={input.id}>
      <label
        htmlFor={input.id}
        className="text-gray-700 text-sm font-medium mb-2"
      >
        {input.Label}
      </label>
      <Input
        placeholder={input.placeholder}
        type="text"
        id={input.id}
        name={input.name}
        value={product[input.name]}
        onChange={onchangehandler}
      />
      <ErrorMsg msg={errors[input.name]} />
    </div>
  ));
  const renderProductColor = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if (tempColor.includes(color)) {
          settempColor((prev) => prev.filter((item) => item !== color));
          return;
        }
        if (producttoedit.colors.includes(color)) {
          settempColor((prev) => prev.filter((item) => item !== color));
          return;
        }
        settempColor((prev) => [...prev, color]);
      }}
    />
  ));
  const renderProductEditWithErrorMsg = (
    id: string,
    name: "title" | "description" | "imageURL" | "price",
    label: string
  ) => {
    return (
      <div className="flex flex-col ">
        <label htmlFor={id} className="text-gray-700 text-sm font-medium mb-2">
          {label}
        </label>
        <Input
          type="text"
          id={"title"}
          name={"title"}
          value={producttoedit[name]}
          onChange={onchangeEdithandler}
        />
        <ErrorMsg msg={errors[name]} />
      </div>
    );
  };
  return (
    <>
      <main className=" m-6 ">
        <Button
          className="bg-indigo-700 hover:bg-indigo-800 mx-auto w-fit text-white"
          onClick={openModal}
        >
          Add
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 rounded-md items-stretch auto-rows-fr">
          {renderproductlist}
        </div>
        {/* add modal */}
        <Modal isOpen={isOpen} closeModal={closeModal} title="Add new product">
          <form className="space-y-3" onSubmit={submitHandler}>
            {renderforminputlist}
            <div className="flex items-center flex-wrap space-x-1">
              {renderProductColor}
            </div>

            <div className="flex items-center flex-wrap space-x-1">
              {tempColor.map((color) => (
                <span
                  key={color}
                  className="p-1 m-1 rounded-md text-white"
                  style={{ backgroundColor: color }}
                >
                  {color}
                </span>
              ))}
            </div>
            {/* <SelectMenu
              selected={selectedCategory}
              setSelected={setselectedCategory}
            /> */}
            <div className="flex items-center space-x-4">
              <Button className="bg-indigo-700 hover:bg-indigo-800 text-white">
                submit
              </Button>
              <Button
                className="bg-gray-400 hover:bg-gray-800 text-white"
                onClick={onCancel}
              >
                cancel
              </Button>
            </div>
          </form>
        </Modal>
        {/* edit modal */}
        <Modal
          isOpen={isOpenEditModa}
          closeModal={closeEditModal}
          title="EditThis Product"
        >
          <form className="space-y-3" onSubmit={submitEditHandler}>
            {renderProductEditWithErrorMsg("title", "title", "Peoduct title")}
            {renderProductEditWithErrorMsg(
              "description",
              "description",
              "Peoduct description"
            )}
            {renderProductEditWithErrorMsg(
              "imageURL",
              "imageURL",
              "Peoduct image"
            )}
            {renderProductEditWithErrorMsg("price", "price", "Peoduct price")}

            {/* {renderforminputlist} */}
            {/* <SelectMenu
              selected={producttoedit.category}
              setSelected={setselectedCategory}
            /> */}
            <div className="flex items-center flex-wrap space-x-1">
              {renderProductColor}
            </div>

            <div className="flex items-center flex-wrap space-x-1">
              {tempColor.concat(producttoedit.colors).map((color) => (
                <span
                  key={color}
                  className="p-1 m-1 rounded-md text-white"
                  style={{ backgroundColor: color }}
                >
                  {color}
                </span>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button className="bg-indigo-700 hover:bg-indigo-800 text-white">
                submit
              </Button>
              <Button
                className="bg-gray-400 hover:bg-gray-800 text-white"
                onClick={closeEditModal}
              >
                cancel
              </Button>
            </div>
          </form>
        </Modal>
        {/* delete modal */}
        <Modal
          isOpen={isOpenDeleteModal}
          closeModal={closeDeleteModal}
          title="Are you sure you want delete this product?"
          description="This message serves as a confirmation prompt to ensure that users do not accidentally delete a product. It warns the user that deleting the product may result in losing important data, such as product details, images, and inventory records"
        >
          <div className="flex items-center space-x-4">
            <Button
              className="bg-red-800 hover:bg-red-950 text-white"
              onClick={removeProduct}
            >
              Yes,Remove
            </Button>
            <Button
              className="bg-gray-400 hover:bg-gray-800 text-white"
              onClick={closeDeleteModal}
            >
              cancel
            </Button>
          </div>
        </Modal>
      </main>
    </>
  );
}

export default App;
