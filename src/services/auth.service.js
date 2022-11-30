import axios from 'axios';

const API_URL = 'https://incidentnode-back.onrender.com/api/v1/users';

export const login = (nickname, gmail, password) => {
  return axios
    .post(API_URL, {
      nickname,
      gmail,
      password,
    })
    .then((res) => {
      if (res.body.accessToken) {
        //data o body
        localStorage.setItem('user', JSON.stringify(res.body));
      }

      return res.body;
    });
};

export const logout = () => localStorage.removeItem('user');

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};
