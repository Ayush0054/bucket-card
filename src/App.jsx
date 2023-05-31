import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import BucketList from "./pages/bucketlist/bucketlist";
import { Route, Routes } from "react-router-dom";
import HistoryPage from "./pages/history/history-page";
import CreateCard from "./pages/createCard/createcard";
import CreateBucket from "./pages/createBucket/createBucket";
import { getBuckets } from "./redux/action/bucketActions";
import Login from "./pages/login/login";

function App() {
  const [login, setLogin] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* {login && ( */}
      {/* <div> */}
      <Routes>
        <Route path="/" element={<BucketList />} />

        <Route path="/history" element={<HistoryPage />} />
        <Route path="/createcard" element={<CreateCard />} />
        <Route path="/createbucket" element={<CreateBucket />} />
      </Routes>
      {/* </div> */}
      {/* )} */}
    </div>
  );
}

export default App;
