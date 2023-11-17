function getAllData() {
  const data = [
    {
      id: 1,
      name: "sleep",
    },
    {
      id: 2,
      name: "eat",
    },
    {
      id: 3,
      name: "code",
    },
  ];

  return data;
}

function createData(newData = "sleep") {
  const result = {
    id: "4",
    name: "newData",
  };

  return result;
}

export { getAllData, createData };
