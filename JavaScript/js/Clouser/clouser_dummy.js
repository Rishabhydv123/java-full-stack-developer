const parentFunc = () => {
  let name = "Rishabh";

  let childFunc = () => {
    let name = 'Yadav';

    let subChildFunc = () => {
      return name;
    };

    return subChildFunc;
  };

  return childFunc;
};

console.log(parentFunc()()());
