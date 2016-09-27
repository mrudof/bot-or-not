class OnQuestVoting extends React.Component(){
  constructor(){
    super()
    this.state = {
      show_button: true
    }
  }

  handleQuestVoteSubmit(event){
    event.preventDefault;
    const questID = this.props.currentQuest.id
    const userID = this.props.currentUser.id
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

    const gameID = this.props.currentGame.id
    $.ajax({
      url: `/game/${gameID}/status`,
      method: 'put',
      data: { response: 'questVoteDone' }
    })
 
  }

  render(){
    let succedQuest;
      if (this.state.show_button === true){
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
         succedQuest = <SucceededQuest currentGame={this.props.currentGame} currentUser={this.props.currentUser} users={this.props.users} members={this.state.members}/>
      }
    return(
      <div>
        <h3>The Quest is happening!</h3>
        {succedQuest}
      </div>
    )
  }
}
