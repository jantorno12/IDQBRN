import React,  { useState }  from "react";
import Papa from "papaparse";

import {
  Row,
  Button,
  Col,
} from "reactstrap";

const axios = require('axios').default;

function Dado (){
    
    // State to store parsed data
  const [parsedData, setParsedData] = useState([]);

  //State to store table Column name
  const [tableRows, setTableRows] = useState([]);

  //State to store the values
  const [values, setValues] = useState([]);

  const changeHandler = (event) => {
    // Passing file data (event.target.files[0]) to parse using Papa.parse
    Papa.parse(event.target.files[0], {
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
            console.log(results.data)
            const rowsArray = [];
            const valuesArray = [];
    
        axios.post('http://localhost:5000/admin/data-doenca', results.data, {
            
            })
            .catch(function (error) {
            console.log(error);
            });

        // Iterating data to get column name and their values
            results.data.map((d) => {
            rowsArray.push(Object.keys(d));
            valuesArray.push(Object.values(d));
            });

        // Parsed Data Response in array format
        setParsedData(results.data);

        // Filtered Column Names
        setTableRows(rowsArray[0]);

        // Filtered Values
        setValues(valuesArray);
        console.log(parsedData)
        console.log(tableRows)
        console.log(values)
      },
    });

    console.log()
};

    return(
        <div className="content">
            <Col md="12">
                <form method="post" id = "myForm">
                            <div className="form-group files">
                                <h4>Insira seus arquivos</h4>
                                <input type="file" className="form-control" onChange={changeHandler}></input>
                            </div>
                        <Row>    
                        <div className="update ml-auto mr-auto">
                            <Button
                                className="btn-round"
                                color="primary"
                                type="submit"  
                            >
                            Submeter
                            </Button>
                        </div>                        
                        </Row> 
                </form>
            </Col>
        </div>
    )
}


export default Dado;