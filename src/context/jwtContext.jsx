import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [jwt, setJwt] = useState(() => {
    const savedJwt = localStorage.getItem('token');
    return savedJwt || null;
  });

  const [user, setUser] = useState({});
  const [currentPlayer, setCurrentPlayer] = useState('');
  const [newPlayer, setNewPlayer] = useState('');
  const [players, setPlayers] = useState([]);
  const [competition, setCompetition] = useState([]);
  const [bids, setBids] = useState([]);
  const [users, setUsers] = useState([]);
  const [lineup, setLineup] = useState([]);

  const logout = () => {
    setUser(null);
    setJwt(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  return (
    <UserContext.Provider
      value={{
        jwt,
        setJwt,
        user,
        setUser,
        players,
        setPlayers,
        competition,
        setCompetition,
        bids,
        setBids,
        users,
        currentPlayer,
        setCurrentPlayer,
        newPlayer,
        setNewPlayer,
        setUsers,
        setLineup,
        lineup,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
