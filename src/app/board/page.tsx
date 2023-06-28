"use client";

/* @client-component */
import React, { useState } from "react";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { Calendar } from "@progress/kendo-react-dateinputs";

const IndexPage = () => {
  const [gridData, setGridData] = useState([
    {
      ProductID: 1,
      ProductName: "Product1",
      UnitPrice: 20.0,
      UnitsInStock: 10,
    },
    {
      ProductID: 2,
      ProductName: "Product2",
      UnitPrice: 25.0,
      UnitsInStock: 20,
    },
    {
      ProductID: 3,
      ProductName: "Product3",
      UnitPrice: 30.0,
      UnitsInStock: 30,
    },
    {
      ProductID: 4,
      ProductName: "Product4",
      UnitPrice: 35.0,
      UnitsInStock: 40,
    },
  ]);

  return (
    <div>
      <Grid style={{ height: "400px" }} data={gridData}>
        <GridColumn field="ProductID" title="ID" />
        <GridColumn field="ProductName" title="Name" />
        <GridColumn field="UnitPrice" title="Price" />
        <GridColumn field="UnitsInStock" title="In stock" />
      </Grid>

      <div className="App">
        <h1>Hello KendoReact!</h1>
        <Calendar />
      </div>
    </div>
  );
};

export default IndexPage;
