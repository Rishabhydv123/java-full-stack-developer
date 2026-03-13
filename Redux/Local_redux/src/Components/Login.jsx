import React from "react";
import { userSelector, useDispatch } from 'react-redux';
import { LOGIN_FAILUER, LOGIN_REQUEST, LOGIN_SUCCESS } from '../Redux/Action';

import axios from 'axios';

export const login = () => {
    const dispatch = useDispatch();

    const value = userSelector((store) => store);

    const [userValue, setUserValue] = React.useState({
        email:'',
        password:'',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUserValue((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };
};