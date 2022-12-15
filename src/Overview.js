const Overview = ({user1Stats, user2Stats}) => {
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
  return (
    <div>
      <p>{moreExperienced[0].id} is the more experienced player.</p>
      <p>{moreExperienced[0].id} has played <strong>{gameDifferential()}</strong> more games than {moreExperienced[1].id}.</p>
    </div>
  );
}
export default Overview;