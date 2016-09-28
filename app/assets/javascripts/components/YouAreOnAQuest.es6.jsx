class YouAreOnAQuest extends React.Component {

  constructor(){
    super()
    this.state = {
      show_button: true,
      member: ""
    }
    // this.handleOnQuestVote = this.handleOnQuestVote.bind(this)
  }

  handleOnQuestVote(event){
    event.preventDefault
    const questID = this.props.currentQuest.id
    const memberID = this.props.memberID
    $.ajax({
      url: `/quests/${questID}/quest_members/${memberID}`,
      method: 'PUT',
      data: { vote: event.action }
    }).done((response) => {
    // debugger 
      // this.props.updateGameStage("questVoteDone")
      this.setState({
        show_button: false,
        member: response
      })
    })
  }

  render () {
    // debugger
    // in order to hide button, check for this in whatever is returned:
    // if (this.state.show_button === true
    let questComplete
    if (this.state.show_button === true){
      questComplete =
        <div>
          <h4>Succeed or Fail Quest!</h4>
          <section>
              <input ref="Succeed" type="submit" value="Succeed" name="vote" onClick={this.handleOnQuestVote.bind(this, {action: "Succeed"})}/>
              <input ref="Failed" type="submit" value="Fail" name="vote" onClick={this.handleOnQuestVote.bind(this, {action: "Fail"})}/>
          </section>
        </div>
    } else {
      questComplete =
       <WaitingForQuestResult memberID={this.state.member.id} currentGame={this.props.currentGame} currentQuest={this.props.currentQuest} members={this.props.members} currentUser={this.props.currentUser} users={this.props.users}/>
    }

    return(
      <div>
        {questComplete}
      </div>
    )
  }
}
