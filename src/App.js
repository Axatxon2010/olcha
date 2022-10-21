import Navbar from "./Components/Navbar.js";
import New from "./Components/New Products/New.js";
import Payment from "./Components/Payment/Payment.js";
import Trending from "./Components/Trending Products/Trending.js";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContextApi } from "./Components/context/UseContext"
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebase/firbaseConfig"
function App() {
  const { value } = useContext(UserContextApi)
  // console.log(value)/
  const [document, setDocument] = useState([])
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      await axios
        .get("https://fakestoreapi.com/products")
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    };



    return () => {
      getData();
    };
  }, []);


  useEffect(() => {
    const getData = async () => {
      onSnapshot(
        collection(db, "products"),
        (snapshot) => {
          console.log(snapshot.docs)
          setDocument(snapshot.docs.map(doc => doc.data()))
        },
        (error) => {
          console.log(error);
        });
    }
    getData()
  }, []);
  return (
    <div className="App">
      <Navbar />
      {/* <TopSlider /> */}
      <Trending data={data} />
      <New data={data} />
      <Payment data={data} />
    </div>
  );
}

export default App;
