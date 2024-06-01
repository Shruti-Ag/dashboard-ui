import React from 'react'
import Button from 'react-bootstrap/Button';
import { Dropdown } from 'react-bootstrap';
import axios from 'axios';
import { baseurl } from '../constant';

const Filters = ({ setMainData }) => {
    const handleSelect = (eventKey, event) => {
        getDataFromDB(event.target.innerText)
    };

    const getDataFromDB = async(year) => {
        try{
            const response = await axios.get(`${baseurl}filter_by_year.php?year=${year}`);
            if (response.data.success && response.data.data.length > 0) {
                setMainData(response.data.data);
            } else {
                alert(`No data found for the selected year ${year}`); 
            }
        }
        catch(e){
            console.log(e)
        }
    }

    const handleReset = async() => {
        try{
            const response = await axios.get(`${baseurl}get_all_data.php`);
            setMainData(response.data.data)
        }
        catch(e){
            console.log(e)
        }
       
    }

    return (
        <div className='filter-section' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>

            <Dropdown onSelect={handleSelect}>

                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Filter By Year
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item>2018</Dropdown.Item>
                    <Dropdown.Item>2019</Dropdown.Item>
                    <Dropdown.Item>2020</Dropdown.Item>
                    <Dropdown.Item>2021</Dropdown.Item>
                    <Dropdown.Item>2022</Dropdown.Item>
                    <Dropdown.Item>2023</Dropdown.Item>
                    <Dropdown.Item>2024</Dropdown.Item>
                    <Dropdown.Item>2025</Dropdown.Item>
                    <Dropdown.Item>2026</Dropdown.Item>
                    <Dropdown.Item>2027</Dropdown.Item>
                    <Dropdown.Item>2028</Dropdown.Item>
                    <Dropdown.Item>2029</Dropdown.Item>
                    <Dropdown.Item>2030</Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>

            <Button variant="danger" onClick={handleReset} style={{ marginLeft: '1vw', width: '10rem' }}>Reset</Button>
        </div>
    )
}

export default Filters