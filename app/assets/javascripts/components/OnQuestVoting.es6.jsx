class OnQuestVoting extends React.Component {
  constructor(){
    super()
    this.state = {
      show_button: true
    }
  }

  handleQuestVoteSubmit(event){
    event.preventDefault;
    const questID = this.props.currentQuest.id
    const memberID = this.props.member.id
    $.ajax({
      url: `/quests/${questID}/quest_members/${id}`,
      method: 'PUT',
      data: { vote: event.action }
    }).done((response) => {
      // this.props.updateGameStage("questVoteDone")
      this.setState({
        show_button: false
      })
    })

    // const gameID = this.props.currentGame.id
    // $.ajax({
    //   url: `/game/${gameID}/status`,
    //   method: 'PUT',
    //   data: { response: 'questVoteDone' }
    // })

  }

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



  render(){
    console.log("the props for the OneQuestVoting are:", this.props)
    const currentUser = this.props.currentUser
    function isCurrentUser(member) {return member.user_id == currentUser.id}
    const currentUserIsQuestMembersArray = this.props.members.filter(isCurrentUser)
    // const CurrentUserIsMember = this.props.members.filter(isCurrentUser)
    // debugger
    let succedQuest
    if (this.state.show_button === true && currentUserIsQuestMembersArray.length) {
      succedQuest = (
      <div>
        <h4>Succeed or Fail Quest!</h4>
        <section>
            <input ref="Succeed" type="submit" value="Succeed" name="vote" onClick={this.handleQuestVoteSubmit.bind(this, {action: "Succeed"})}/>
            <input ref="Failed" type="submit" value="Fail" name="vote" onClick={this.handleQuestVoteSubmit.bind(this, {action: "Failed"})}/>
        </section>
      </div>
      )
    } else {
       succedQuest = <h4>Please wait while the quest members decide whether the quest succeeds or fails!</h4>
    }

    return(
      <div>
        <h3>On quest voting: did the quest succeed or fail?!?</h3>
        {succedQuest}
      </div>
    )
  }
}
