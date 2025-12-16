// export const sumOfTwoNumber = (a, b) => {
//   return a + b;
// };

// export const subOfTwoNumber = (a, b) => {
//   return a - b;
// };

// export { sumOfTwoNumber, subOfTwoNumber };

// name export

//=============================================//

// const sumOfTwoNumber = (a, b) => {
//   return a + b;
// };

// const subOfTwoNumber = (a, b) => {
//   return a - b;
// };

// export default { sumOfTwoNumber, subOfTwoNumber };

// default export



   
export const navbar = () => {
  return `
  
    <div class="logo">
      <img src="https://fakestoreapi.com/icons/logo.png" height="60" width="60" alt="Logo">
    </div>

    <ul>
      <li>Home</li>
      <li>Product</li>
      <li>Contact</li>
    </ul>

    <ul>
      <li onclick="window.location='/local storage/page/cart.html'">Cart 🛒</li>
      <li onclick="window.location='/local storage/page/Login.html'">Login</li>
      <li onclick="window.location='/local storage/page/Signup.html'">Signup</li>
    </ul>
  `;
};




