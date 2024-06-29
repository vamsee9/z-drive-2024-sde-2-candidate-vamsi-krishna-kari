import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Table from 'react-bootstrap/Table';

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
      fetchData()
  }, [])

  async function fetchData() {
    let api = await axios.get('https://restcountries.com/v3.1/all').then((res) => { 
      setData(res.data)
    })
    // let apiJson = api.json()
    // console.log(apiJson)
    // setData(apiJson)
  }

  return (
      <div>

      <Table responsive>
      <thead>
          <tr>
            <th scope="col">
              area
            </th>
            <th scope="col">
              capital
            </th>
            <th scope="col">
              continents
            </th>
            <th scope="col">
              fifa
            </th>
            <th scope="col">
              name
            </th>
          </tr>
        </thead>
        { 
      data.map((item) => {
        return(
          
        <tbody>
          <tr>
            <td>
              {item.area}
            </td>
            <td>
              {item.capital}
            </td>
            <td>
              {item.continents}
            </td>
          </tr>
        </tbody>
          
        )
      })
    }
      </Table>
    </div>
  );
}

export default App;
