class QuestVote extends React.Component {
  constructor() {
    super()
    this.state = {
      show_button: true
    }
    this.handleVoteSubmit = this.handleVoteSubmit.bind(this)
  }

  handleVoteSubmit(event){
    event.preventDefault;
    var questID = this.props.currentQuest.id
    $.ajax({
      url: `/quests/${questID}/quest_votes`,
      method: 'POST',
      data: { vote: this.refs.vote.value}
    }).done((response) => {
      this.props.updateGameStage("questVoteDone")
      this.setState({
        show_button: false
      })
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
                  debugger
                  return (<QuestMember key={idx} data={member}/>)
                })
              }
            </ul>
          <section>
            <form onSubmit={this.handleVoteSubmit}>
              <label for="approve">Approve</label>
              <input ref="vote" type="submit" value="Approve" name="vote"/>
              <label for="reject">Reject</label>
              <input ref="vote" type="submit" value="Reject" name="vote"/>
            </form>
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
