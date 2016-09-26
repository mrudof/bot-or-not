class QuestVote extends React.Component {
  constructor() {
    super()
    this.state = {
      show_button: true
    }
    // this.handleVoteSubmit = this.handleVoteSubmit.bind(this)
  }

  handleVoteSubmit(event){
    event.preventDefault;
    const questID = this.props.currentQuest.id
    $.ajax({
      url: `/quests/${questID}/quest_votes`,
      method: 'POST',
      data: { vote: event.action}
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

  render () {
    let voteComplete;
      if (this.state.show_button === true){
        voteComplete = (
        <div>
          <h4>Vote for quest</h4>
            <ul>
              {
                this.props.members.map((member, idx) => {
                  return (<QuestMember key={idx} data={member}/>)
                })
              }
            </ul>
          <section>
            {/*<form onSubmit={this.handleVoteSubmit}>*/}
              <input ref="Approve" type="submit" value="Approve" name="vote" onClick={this.handleVoteSubmit.bind(this, {action: "Approve"})}/>
              <input ref="Reject" type="submit" value="Reject" name="vote" onClick={this.handleVoteSubmit.bind(this, {action: "Reject"})}/>
            {/*}</form>*/}
          </section>
        </div>
        )
      } else {
         voteComplete = <h3>Please wait while others complete their voting!</h3>
      }

      return(
        <div>
          {voteComplete}
        </div>
        // render YourFriendsLeftYouToQuest
        // OR render OnQuestVoting
    )
  }
}
