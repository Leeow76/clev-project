// Just copy - paste content to DevTools console and run

const initialArray = [
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

const func = (array) => {
  // Create blank object
  const newObject = {};
  // Iterate through array items and assign new key-value pairs to empty object
  array.forEach((item, index) => {
    newObject[array[index].id] = {
      name: array[index].name,
      description: array[index].description,
    };
  });
  return newObject;
};
func(initialArray);
