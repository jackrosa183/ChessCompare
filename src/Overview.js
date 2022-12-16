const Overview = ({user1Stats, user2Stats}) => {
  const user1name = user1Stats.id;
  const user2name = user2Stats.id;

  const findExperiencedPlayer = (user1Total, user2Total) => {
    const moreExperienced = Math.max(user1Total, user2Total)
    if (moreExperienced === user1Total) {
      return [user1Stats,user2Stats]
    } else {
      return [user2Stats,user1Stats]
    }
  }
  const moreExperienced = findExperiencedPlayer(user1Stats.count?.all, user2Stats.count?.all);
  const gameDifferential = () => {
    return ((moreExperienced[0].count?.all - moreExperienced[1].count?.all) || "???");
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
      console.log("🥳");
      return {user1: {cat: "???", rating: "???"},
      user2: {cat: "???", rating: "???"}};
    }
    return {user1: {cat: user1HighestCat, rating: user1HighestRating},
    user2: {cat: user2HighestCat, rating: user2HighestRating}};
  }
  let bestCats = (bestRatingCats(user1Stats, user2Stats));
  return (
    <div>
      <p>{moreExperienced[0].id} is the more experienced player.</p>
      <p>{moreExperienced[0].id} has played <strong>{gameDifferential()}</strong> more games than {moreExperienced[1].id}.</p>
      <p>{user1name}'s best category is {bestCats.user1.cat} where their rating is <strong>{bestCats.user1.rating}.</strong> 
      </p>
      <p>{user2name}'s best category is {bestCats.user2.cat} where their rating is <strong>{bestCats.user2.rating}.</strong> 
      </p>

    </div>
  );
}
export default Overview;