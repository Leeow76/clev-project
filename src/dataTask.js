export const initialArray = [
  {
    id: 1,
    name: "one",
    description: "number one",
  },
  {
    id: 4,
    name: "four",
    description: "number four",
  },
  {
    id: 6,
    name: "six",
    description: "number six",
  },
  {
    id: 9,
    name: "nine",
    description: "number nine",
  },
];

export const func = (array) => {
  const newArray = array.map((el) => {
    const { id, name, description } = el;
    return {
      id: {
        name: name,
        description: description,
      },
    };
  });
  let newObject = { ...newArray };
  let replacedItems = Object.keys(newObject).map((key) => {
    const newValue = newObject[key].id || key;
    const newKey = newObject[key].id || key;
    console.log(newValue);
    console.log(newKey);
    newValue = newObject[key].id || key;
    console.log(newValue);
    return { [newKey]: newObject[key] };
  });

  return newObject;
};
