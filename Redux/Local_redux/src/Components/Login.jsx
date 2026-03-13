import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../Redux/Action";
import axios from "axios";

export const Login = () => {

  const dispatch = useDispatch();

  const value = useSelector((store) => store);

  const [userValue, setUserValue] = React.useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserValue((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {

    e.preventDefault();

    dispatch({ type: LOGIN_REQUEST });

    axios.post(
      "https://reqres.in/api/login",
      userValue,
      {
        headers: {
          "x-api-key": "reqres-free-v1"
        }
      }
    )
    .then((res) => {

      dispatch({
        type: LOGIN_SUCCESS,
        payload: { users: userValue, token: res.data.token }
      });

    })
    .catch((err) => {

      console.log(err);

      dispatch({ type: LOGIN_FAILURE });

    });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          height: "30vh",
          gap: "1rem"
        }}
      >

        <div>
          <label>email</label>
          <input
            type="text"
            name="email"
            onChange={handleChange}
          />
        </div>

        <div>
          <label>password</label>
          <input
            type="text"
            name="password"
            onChange={handleChange}
          />
        </div>

        <button type="submit">submit</button>

      </form>
    </div>
  );
};