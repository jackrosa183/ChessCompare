import { playerTotals } from "./playerTotals";

const Overview = ({user1, user2, user1Stats, user2Stats}) => {
  const user1Name = user1.name;
  const user2Name = user2.name;

  const user1Total = playerTotals(user1Stats);
  const user2Total = playerTotals(user2Stats);

  const findExperiencedPlayer = (user1Total, user2Total) => {
    const moreExperienced = Math.max(user1Total, user2Total);
    return moreExperienced === user1Total
    ? [{name: user1Name, total: user1Total}, {name: user2Name, total: user2Total}]
    : [{name: user2Name, total: user2Total}, {name: user1Name, total: user1Total}];
  };
  const moreExperienced = findExperiencedPlayer(user1Total, user2Total);
  
  const gameDifferential = () => {
    return ((moreExperienced[0].total - moreExperienced[1].total) || "???");
  }

  const bestRatingCats = (user1Stats, user2Stats) => {
    let user1HighestCat;
    let user2HighestCat;
    let user1HighestRating = 0;
    let user2HighestRating = 0;
    
    try {
      for (const [category, rating] of Object.entries(user1Stats.perfs)) {
        if (rating.rating > user1HighestRating) {
          user1HighestCat = category;
          user1HighestRating = rating.rating;
        }
      }
      for (const [category, rating] of Object.entries(user2Stats.perfs)) {
        if (rating.rating > user2HighestRating) {
          user2HighestCat = category;
          user2HighestRating = rating.rating;
        }
      }
    } catch {
      return {user1: {cat: "???", rating: "???"},
      user2: {cat: "???", rating: "???"}};
    }
    return {user1: {cat: user1HighestCat, rating: user1HighestRating},
    user2: {cat: user2HighestCat, rating: user2HighestRating}};
  }
  let bestCats = (bestRatingCats(user1Stats, user2Stats));
  return (
    <div>
      <p>{moreExperienced[0].name} is the more experienced player.</p>
      <p>{moreExperienced[0].name} has played <strong>{gameDifferential()}</strong> more games than {moreExperienced[1].name}.</p>
      {/* <p>{user1Name}'s best category is {bestCats.user1.cat} where their rating is <strong>{bestCats.user1.rating}.</strong> 
      </p>
      <p>{user2Name}'s best category is {bestCats.user2.cat} where their rating is <strong>{bestCats.user2.rating}.</strong> 
      </p> */}

    </div>
  );
}
export default Overview;