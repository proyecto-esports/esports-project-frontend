import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
