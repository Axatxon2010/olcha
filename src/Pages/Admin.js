import React, { useContext } from 'react'
import { UserContextApi } from '../Components/context/UseContext';
import { useISADMIN } from "../hooks/isAdminHook"

function Admin() {
  const { currentUser } = useContext(UserContextApi)
  const { isAdmin } = useISADMIN(currentUser)
  const AddProduct = (e) => {
    e.preventDefault()
    console.log(e);
    let title = e.target[0].value
    let price = e.target[1].value
    let instock = e.target[2].value
    let description = e.target[3].value
    let content = e.target[4].value
    let allproducts = e.target[5].value
    let image = e.target[7].value
    let sale = e.target[8].value
    console.log(title, price, instock, description, content, allproducts, image, sale)
    console.log(price)
    console.log(instock)
    console.log(description)
    console.log(content)
    console.log(allproducts)
    console.log(image)
    console.log(sale)
  }
  let stl = {
    size: "w-full h-[100vh]",
    container: "mx-auto w-[90%] h-[85vh] mt-[20px] flex justify-between",
    left: "w-[49%] h-full flex flex-col justify-between",
    title: "w-full h-[45px] border border-black indent-2",
    quantity: "w-full h-fit flex justify-between",
    price: "w-[48%]  mt-[15px]",
    input_price_stock: "indent-2 mt-[10px] w-full h-[45px] border border-black",
    textArea: "indent-2 w-full border border-black",
    all: "w-full h-[40px] border border-black indent-2 rounded-4",
    btn: "w-[140px] h-[40px] text-[18px] rounded-[7px] text-white font-semibold bg-gradient-to-r from-[#E66346] to-[#98508E]",

    right: "w-[49%] h-full flex flex-col",
  };
  return (
    <div className={stl.size}>
      {

        isAdmin ?
          <form className={stl.container} onSubmit={AddProduct}>
            <div className={stl.left} >
              <input type="text" placeholder="Title" className={stl.title} />
              <div className={stl.quantity}>
                <div className={stl.price}>
                  <label htmlFor="price">Price</label>
                  <input type="number" className={stl.input_price_stock} />
                </div>

                <div className={stl.price}>
                  <label htmlFor="In_Stock">In Stock</label>
                  <input type="number" className={stl.input_price_stock} />
                </div>
              </div>

              <textarea
                cols="30"
                rows="5"
                placeholder="Description"
                className={stl.textArea}
              ></textarea>

              <textarea
                cols="30"
                rows="8"
                placeholder="Content"
                className={stl.textArea}
              ></textarea>

              <input type="number" placeholder="All products" className={stl.all} />

              <button className={stl.btn}>Create</button>
            </div>

            <div className={stl.right}>
              <label for="files" className="w-full h-[45px] border border-black ">
                <div className="w-[100px] bg-gray-100 h-full flex justify-center items-center">
                  Upload
                </div>
              </label>
              <input id="files" className="hidden" type="file"></input>

              <div className={stl.price}>
                <label htmlFor="price">Sale</label>
                <input
                  type="text"
                  placeholder="sale product"
                  className={stl.input_price_stock}
                />
              </div>
            </div>
          </form>
          : <h1>siZ ADMIN EMASSIZ</h1>
      }


    </div >
  );
}

export default Admin;
