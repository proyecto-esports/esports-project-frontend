import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState('');
  const [players, setPlayers] = useState([]);
  const [competition, setCompetition] = useState([]);
  const [bids, setBids] = useState([]);
  const [users, setUsers] = useState([]);

  return (
    <UserContext.Provider
      value={{
        players,
        setPlayers,
        competition,
        setCompetition,
        bids,
        setBids,
        users,
        setUsers,
        currentPlayer,
        setCurrentPlayer,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
