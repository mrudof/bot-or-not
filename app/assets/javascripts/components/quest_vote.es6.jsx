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
  }

  render () {
    let voteComplete;
      if (this.state.show_button === true){
        voteComplete = (
        <div className="white_text">
          <h2 className="welcome start_game_text">Do you approve the mission with these members?</h2>
            <p>
              {
                this.props.members.map((member, idx) => {
                  return (<QuestMember key={idx} data={member}/>)
                })
              }
            </p>
            <br/>
          <section>
            {/*<form onSubmit={this.handleVoteSubmit}>*/}
              <input className='btn btn-success btn-blue' ref="Approve" type="submit" value="Approve" name="vote" onClick={this.handleVoteSubmit.bind(this, {action: "Approve"})}/>
              <input className='btn btn-danger btn-robot' ref="Reject" type="submit" value="Reject" name="vote" onClick={this.handleVoteSubmit.bind(this, {action: "Reject"})}/>
            {/*}</form>*/}
          </section>
        </div>
        )
      } else {
         voteComplete = <WaitingForVoteResults currentGame={this.props.currentGame} currentQuest={this.props.currentQuest} members={this.props.members} currentUser={this.props.currentUser} users={this.props.users} countRounds={this.props.countRounds}/>
      }

      return(
        <div>
          {voteComplete}
        </div>
    )
  }
}
