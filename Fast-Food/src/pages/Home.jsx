import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import { food_items } from "../food";
import Categories from "../categories";
import Card from "../components/Card";
import { dataContext } from "../context/userContext";
import { RxCross2 } from "react-icons/rx";
import Card2 from "../components/Card2";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { IoIosArrowBack } from "react-icons/io";

function Home() {
  let { category, setCategory, input, showcart, setshowcart } =
    useContext(dataContext);

  // New state to manage the visibility of categories
  const [showCategories, setShowCategories] = useState(true);

  function filter(categoryTitle) {
    if (categoryTitle === "All") {
      setCategory(food_items);
      setShowCategories(true); // show categories for "All"
    } else {
      let updatedList = food_items.filter((x) => x.food_category === categoryTitle);
      setCategory(updatedList);
      setShowCategories(false); // hide categories when a specific one is selected
    }
  }

  // New function to handle the "Back" action
  const handleBack = () => {
    setShowCategories(true); // show categories again
    setCategory(food_items); // reset food items to "All"
  };

  let items = useSelector((state) => state.cart);
  let subTotal = items.reduce((total, item) => (total += item.price * item.quantity), 0);
  let deliveryFee = 20;
  let tax = Math.round(subTotal * 0.05);
  let total = Math.floor(subTotal + deliveryFee + tax);

  return (
    <div className="bg-slate-300 w-full min-h-screen">
      <Nav />

      {/* --- Category Section --- */}
      {/* Conditionally render categories based on the new 'showCategories' state */}
      {!input && showCategories ? (
        <div className="flex flex-wrap justify-center items-center gap-5 w-full">
          {Categories.map((item) => {
            return (
           <div
  key={item.title}
  className="w-[100px] h-[100px] gap-5 bg-white flex flex-col justify-center items-center p-3 text-base md:text-sm font-semibold text-gray-500 rounded-lg text-wrap hover:bg-green-200 cursor-pointer transition-all duration-200 hover:shadow-2xl"
  onClick={() => filter(item.title)}
>
  {item.image}
  {item.title}
</div>
            );
          })}
        </div>
      ) : null}

      {/* --- Back Button --- */}
      {/* Show the "Back" button on mobile only when categories are hidden */}
      {!showCategories && (
        <div className="flex items-center gap-2 p-4 text-green-500 font-semibold cursor-pointer" onClick={handleBack}>
          <IoIosArrowBack />
          <span>Back to Categories</span>
        </div>
      )}

      {/* --- Food Items Section --- */}
      <div className="flex flex-wrap justify-center items-center gap-5 w-full px-5 pt-8 pb-8">
        {category.length > 0 ? (
          category.map((item) => {
            return (
              <div key={item.id}>
                <Card
                  name={item.food_name}
                  price={item.price}
                  id={item.id}
                  image={item.food_image}
                  type={item.food_type}
                />
              </div>
            );
          })
        ) : (
          <div className="font-bold text-gray-600 text-xl ">No Items Found</div>
        )}
      </div>

      {/* --- Cart Sidebar --- */}
      <div
        className={`w-full md:w-[40vw] h-full fixed top-0 right-0 bg-white shadow-xl p-4 transform duration-300 ease-in-out flex flex-col ${
          showcart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="w-full flex items-center justify-between px-5 md:px-8 text-green-500 text-[18px]">
          <span className="font-semibold">Order Items</span>
          <RxCross2
            className="w-[30px] h-[30px] cursor-pointer hover:text-gray-500"
            onClick={() => setshowcart(false)}
          />
        </header>

        {items.length > 0 ? (
          <>

            <div className="w-full overflow-y-scroll flex-grow mt-4 gap-2 flex flex-col">
              {items.map((item) => {
                return (
                  <div key={item.id}>
                    <Card2
                      name={item.name}
                      price={item.price}
                      id={item.id}
                      image={item.image}
                      type={item.type}
                      quantity={item.quantity}
                    />
                  </div>
                );
              })}
            </div>

            <div className="w-full text-xl font-semibold border-t-2 border-b-2 border-gray-500 mt-1 flex flex-col gap-2 p-3">
              <div className="w-full flex justify-between items-center">
                <span className="text-gray-700">Sub Total</span>
                <span className="font-semibold">Rs {subTotal}/-</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Delivery Fee</span>
                <span className="font-semibold">Rs {deliveryFee}/-</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Tax</span>
                <span className="font-semibold">Rs {tax}/-</span>
              </div>
            </div>
            <div className="w-full border-gray-500 mt-1 flex flex-col gap-2 p-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Total</span>
                <span className="font-semibold">Rs {total}/-</span>
              </div>
            </div>
            <button
              className="w-full p-2 rounded-lg bg-green-500 hover:bg-green-200 transition-all duration-200 hover:shadow-lg text-white"
              onClick={() => toast.success("Order Placed Successfully")}
            >
              Place Order
            </button>
          </>
        ) : (
          <div>
            <h1 className="text-2xl font-semibold text-green-400 flex items-center justify-center p-8">
              Cart is Empty
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;