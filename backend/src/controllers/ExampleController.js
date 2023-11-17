import { getAllData, createData } from "../models/ExampleModel.js";

function index(req, res) {
  const result = getAllData();

  const response = {
    message: "Get example data",
    data: result,
  };

  res.status(200).json(response);
}

function store(req, res) {
  const newData = createData("pray");

  const response = {
    message: "Add example data",
    data: newData,
  };

  res.status(201).json(response);
}

export { index, store };
