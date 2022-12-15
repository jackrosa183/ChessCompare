const Stats = ({user1Stats, user2Stats}) => {
  return (
    <table className="stat-table">
      <thead>
        <tr>
          <th>Statistic</th>
          <th>{user1Stats.id}</th>
          <th>{user2Stats.id}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Blitz Rating</td>
          <td>{user1Stats.perfs.blitz.rating}</td>
          <td>{user2Stats.perfs.blitz.rating}</td>
        </tr>
        <tr>
          <td>Classical Rating</td>
          <td>{user1Stats.perfs.classical.rating}</td>
          <td>{user2Stats.perfs.classical.rating}</td>
        </tr>
        <tr>
          <td>Rapid Rating</td>
          <td>{user1Stats.perfs.rapid.rating}</td>
          <td>{user2Stats.perfs.rapid.rating}</td>
        </tr>
        <tr>
          <td>Total Games played</td>
          <td>{user1Stats.count.all}</td>
          <td>{user2Stats.count.all}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Stats;