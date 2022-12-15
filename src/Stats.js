import Overview from './Overview'

const Stats = ({user1Stats, user2Stats}) => {
  return (
    <div className="container">
      <h2>
        Overview
      </h2>
      <Overview user1Stats={user1Stats} user2Stats={user2Stats}/>
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
            <td>Puzzle Rating</td>
            <td>{user1Stats.perfs.puzzle.rating}</td>
            <td>{user2Stats.perfs.puzzle.rating}</td>
          </tr>
          <tr className="total">
            <td>Total Games played</td>
            <td>{user1Stats.count.all}</td>
            <td>{user2Stats.count.all}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Stats;