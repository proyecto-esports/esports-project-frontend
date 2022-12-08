import React from 'react';

import { API } from '../services/API';
import DatosCartaMercado from './DatosCartaMercado';
let dataPlayers = [];
const players = () => {
  API.patch('/competitions/6391e02c30ac54065e9c1661/market').then((res) => {
    let playersID = res.data.info.data.market;
    playersID.forEach((player) => {
      console.log(player);
      API.get(`/players/${player}`).then((res) => {
        dataPlayers.push(res.data.info.data);
      });
    });
  });
};
players();

const CartaMercado = () => {
  console.log(dataPlayers);
  return <DatosCartaMercado players={dataPlayers} />;
};

export default CartaMercado;
