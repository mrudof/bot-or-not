class CreateQuest extends React.Component {
  constructor () {
    super ()
    this.state = {
      quest: ""
    }
     this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
    //creates the quest
    const gameID = this.props.currentGame.id
    const roundID = this.props.currentRound.id
    $.ajax({
      url: `/games/${gameID}/rounds/${roundID}/quests`,
      method: 'POST'
    }).done((response) => {
      this.setState({
        quest: response
      })
    })
   }

  render () {
    let showButton
      if (this.state.quest === "") {
        showButton =
        <form onSubmit={this.handleSubmit}>
          <input value="Create Quest" type="submit"/>
        </form>
      } else {
        showButton =
        <SelectQuestForm currentQuest={this.state.quest} numberOnQuest={1} currentRound={this.props.currentRound} currentUser= {this.props.currentUser} users={this.props.users}/>

      }
    return (
      <div>
        {showButton}
      </div>
      )
  }
}

