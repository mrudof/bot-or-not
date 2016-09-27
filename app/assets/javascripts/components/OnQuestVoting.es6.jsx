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

  render(){
    console.log("the props for the OneQuestVoting are:", this.props)
    let succedQuest
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
       succedQuest = <h3>Please wait while the quest members decide whether the quest succeeds or fails!</h3>
    }

    return(
      <div>
        <h3>On quest voting: did the quest succeed or fail?!?</h3>
        {succedQuest}
      </div>
    )
  }
}
