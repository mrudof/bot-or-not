class OnQuestVoting extends React.Component {

    // const gameID = this.props.currentGame.id
    // $.ajax({
    //   url: `/game/${gameID}/status`,
    //   method: 'PUT',
    //   data: { response: 'questVoteDone' }
    // })


  // && this.props.members.find(this.props.currentUser.id)


  // function sameUser(element, index, array) {
  //   var start = 2;
  //   while (start <= Math.sqrt(element)) {
  //     if (element % start++ < 1) {
  //       return false;
  //     }
  //   }
  //   return element > 1;
  // }
  //


  render () {
    console.log("the props for the OnQuestVoting are:", this.props)
    const currentUser = this.props.currentUser
    function isCurrentUser(member) {return member.user_id == currentUser.id}
    const currentUserIsQuestMembersArray = this.props.members.filter(isCurrentUser)

    let succedQuest
    if (currentUserIsQuestMembersArray.length) {
      succedQuest =
      <div>
        <p>Yes, you are on a quest</p>
        <YouAreOnAQuest memberID={currentUserIsQuestMembersArray[0].id} currentGame={this.props.currentGame} currentQuest={this.props.currentQuest} members={this.props.members} currentUser={this.props.currentUser} users={this.props.users} />
      </div>
    } else {
      succedQuest =
      <div>
        <p>You are not on a quest</p>
        <YourFriendsLeftYouToQuest/>
      </div>
    }

    return(
      <div>
        <h3>On quest voting: did the quest succeed or fail?!?</h3>
        {succedQuest}
      </div>
    )

  }
}
