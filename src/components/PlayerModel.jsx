const PlayerModel = ({ item }) => {
  return (
    <div>
      <h1>{item.nickname}</h1>
      <p>{item.id}</p>
    </div>
  );
};

export default PlayerModel;
