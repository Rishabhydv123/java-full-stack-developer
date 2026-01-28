const searchParams = (url, params) => {
  const defineURL = new URL(url);
//   console.log('🚀 ~ defineURL:', defineURL);
const searchParamsData = new URLSearchParams(defineURL.search);
let data = searchParamsData.get(params);
return +data;

//   const searchParamsData = new URLSearchParams(params);

//   const value = defineURL.search.split('&');

//   let valueNumber = value.map((el) => {
//     let valuess = el.split('=');
//     let data = valuess.filter((els) => els !== params);
//     return +data;
//   });

//   return valueNumber[1];
};

module.exports = searchParams;
