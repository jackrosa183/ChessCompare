import Overview from './Overview'
import { playerTotals } from './playerTotals';

const Stats = ({user1, user2, user1Stats, user2Stats}) => {

  const {data: user1Data} = user1Stats;
  const {data: user2Data} = user2Stats;
  //todo get gamesum for chess.com users
  const chessSum = (record) => {
  }
  return (
    <div className="container">
      <h2>♖Overview♖</h2>
        <p><strong>Comparing {user1.name} and {user2.name}</strong></p>
        <Overview user1={user1} user1Stats={user1Stats} user2={user2} user2Stats={user2Stats}/>
      <div className='stat-table'>
        <h2>♘Breakdown♘</h2>
      </div>
      <table>
          <thead>
            <tr>
              <th>Statistic</th>
              <th>{user1Data.id || user1.name}</th>
              <th>{user2Data.id || user2.name}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Classical/Daily Rating</td>
              <td>{user1Data.perfs?.classical?.rating || user1Data.chess_daily?.last?.rating || "???"}</td>
              <td>{user2Data.perfs?.classical?.rating || user2Data.chess_daily?.last?.rating || "???"}</td>
            </tr>
            <tr>
              <td>Rapid Rating</td>
              <td>{user1Data.perfs?.rapid?.rating || user1Data.chess_rapid?.last?.rating || "???"}</td>
              <td>{user2Data.perfs?.rapid?.rating || user2Data.chess_rapid?.last?.rating || "???"}</td>
            </tr>
            <tr>
              <td>Blitz Rating</td>
              <td>{user1Data.perfs?.blitz?.rating || user1Data.chess_blitz?.last?.rating || "???"}</td>
              <td>{user2Data.perfs?.blitz?.rating || user2Data.chess_blitz?.last?.rating || "???"}</td>
            </tr>
            <tr>
              <td>Bullet Rating</td>
              <td>{user1Data.perfs?.bullet?.rating || user1Data.chess_bullet?.last?.rating || "???"}</td>
              <td>{user2Data.perfs?.bullet?.rating || user2Data.chess_bullet?.last?.rating || "???"}</td>
            </tr>
            <tr>
              <td>Puzzle Rating</td>
              <td>{user1Data.perfs?.puzzle?.rating || user1Data.tactics?.highest?.rating || "???"}</td>
              <td>{user2Data.perfs?.puzzle?.rating || user2Data.tactics?.highest?.rating || "???"}</td>
            </tr>
            <tr className="total">
              <td>Total Games played</td>
              <td>{playerTotals(user1Stats) || "???"}</td>
              <td>{playerTotals(user2Stats) || "???"}</td>
            </tr>
          </tbody>
        </table>
    </div>
  );
};

export default Stats;