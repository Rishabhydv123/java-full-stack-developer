// https://api-server-o2u1.onrender.com/user

/*
data we want in this format
{
  email: xyz@gmail.com
  pass: 283ddby!@#$
  gender: male / female
  country: xyz
}
*/

// this is gender value

// const handleMale = () => {
//   const getMale = document.querySelector('#male').checked;
//   console.log('🚀 ~ getMale:', getMale);
// };

// const handleFemale = () => {
//   const getFemale = document.querySelector('#female').value;
//   console.log('🚀 ~ getFemale:', getFemale);
// };

// gender func end


const btnSubmit = document.querySelector('#btn');
btnSubmit.disabled = true;

const watchmanFunc = () => {
  const watchman = document.querySelector('#watchman').checked;

  if (watchman === true) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
};

/*
email
pass
male female
country
*/

const handelForm = (e) => {
  e.preventDefault();

  const getEmail = document.querySelector('#email').value;
  const getPass = document.querySelector('#pass').value;
  const getCountry = document.querySelector('#country').value;
  const getGender = document.querySelectorAll('#gender');

  for (let i = 0; i < getGender.length; i++) {
    if (getGender[i].checked === true) {
      console.log(getGender[i].value);
    }
  }

  // console.log('🚀 ~ getGender:', getGender[0].checked);
  // console.log('🚀 ~ getGender:', getGender[1].checked);

  // console.log('🚀 ~ getEmail:', getEmail);
  // console.log('🚀 ~ getPass:', getPass);
  // console.log('🚀 ~ getCountry:', getCountry);
};
