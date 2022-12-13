import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState('');
  const [newPlayer, setNewPlayer] = useState('');
  const [players, setPlayers] = useState([]);
  const [competition, setCompetition] = useState([]);
  const [bids, setBids] = useState([]);
  const [users, setUsers] = useState([]);
  const [lineup, setLineup] = useState([]);

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
        lineup,
        setLineup,
        currentPlayer,
        setCurrentPlayer,
        newPlayer,
        setNewPlayer,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
