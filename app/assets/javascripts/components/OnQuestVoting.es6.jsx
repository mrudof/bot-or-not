class OnQuestVoting extends React.Component {

  render () {
    const currentUser = this.props.currentUser
    function isCurrentUser(member) {return member.user_id == currentUser.id}
    const currentUserIsQuestMembersArray = this.props.members.filter(isCurrentUser)

    let succedQuest
    if (currentUserIsQuestMembersArray.length) {
      succedQuest =
      <div>

        <YouAreOnAQuest memberID={currentUserIsQuestMembersArray[0].id} currentGame={this.props.currentGame} currentQuest={this.props.currentQuest} members={this.props.members} currentUser={this.props.currentUser} users={this.props.users} countRounds={this.props.countRounds} />
      </div>
    } else {
      succedQuest =
      <div>

        <WaitingForQuestResult currentGame={this.props.currentGame} currentQuest={this.props.currentQuest} members={this.props.members} currentUser={this.props.currentUser} users={this.props.users} countRounds={this.props.countRounds} />
      </div>
    }

    return(
      <div>
        {/* <h2>The proposed mission was approved!</h2> */}
        {succedQuest}
      </div>
    )
  }
}
