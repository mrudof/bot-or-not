class QuestVote extends React.Component {
  constructor() {
    super()
    this.state = {
    show_button: true,
    members: []
    }
  }

  componentDidMount(){
    this.state({
      members: this.props.members
    })
  }

  handleSubmit(event){
    event.preventDefault;
    $.ajax({
      url: `/quests/${questID}/quest_votes`,
      method: 'POST',
      data: { vote: this.refs.vote.value}
    }).done((response) => {
      this.setState({button: false})
    })
  }

  render () {

    let voteComplete;
      if (this.state.show_button === true){
        voteComplete = (
        <div>
          <h1>Vote for quest</h1>
            <ul>
              {
                this.state.members.map((member, idx) => {
                  return (<QuestMember key={idx} data={member}/>)
                })
              }
            </ul>
          <section>
            <form onSubmit={this.handleSubmit}>
              <label for="approve">Approve</label>
              <input ref="vote" type="submit" value="Approve" name="vote"/>
              <label for="reject">Reject</label>
              <input ref="vote" type="submit" value="Reject" name="vote"/>
            </form>
          </section>
        </div>
        )
      } else {
        voteComplete = (
          <h3>Please wait while others complete their voting!</h3>
        )
      }

      return(
        <div>
          // {voteComplete}
        </div>
    )
  }
}
