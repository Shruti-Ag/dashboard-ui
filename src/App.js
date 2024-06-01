import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

import Header from './components/Header';
import Chartboard from './components/Chartboard';
import { baseurl } from './constant';


function App() {
    const [mainData, setMainData] = useState([]);    
    const getDataFromDB = async() => {
        try{
            const response = await axios.get(`${baseurl}get_all_data.php`);
            console.log(response.data.data ,"res")
            setMainData(response.data.data)
        }
        catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        getDataFromDB();
    },[])

    useEffect(()=>{
  
    },[mainData])

  return (
    <div>
      <Header/>
      <Chartboard data={mainData} setMainData={setMainData} />
    </div>
  );
}

export default App;
