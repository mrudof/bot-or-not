class SelectQuestForm extends React.Component {
  constructor() {
    super()
    this.state = {
      displayForm: true
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.boxes = []
  }

  handleSubmit(event) {
    event.preventDefault()
    votes = this.boxes.filter((box) => box.checked).map((box) => box.name)
    if (votes.length < this.props.numberOnQuest) {
      $('.form-thingy').append(`<p>Please select ${this.props.numberOnQuest}</p>`)
    } else if (votes.length > this.props.numberOnQuest) {
      $('.form-thingy').append(`<p>Please select ${this.props.numberOnQuest}</p>`)
    } else {
    var questID = this.props.currentQuestID;
      $.ajax({
        url: `/quests/${questID}/quest_members`,
        method: 'Post',
        data: {quest: votes}
      }).done((response) => {
        this.setState({
        displayForm: false
        })
      })
    }
  }


  render () {
    var currentRound = this.props.currentRound,
    currentUser = this.props.currentUser,
    users = this.props.users;
    return (
      <div className="form-thingy">
       <section>
        { this.state.displayForm ? <form onSubmit={this.handleSubmit}>
        <h1>Please select {this.props.numberOnQuest} players to go on the quest!</h1>
          {this.props.users.map((user) => <label key={user.id}>{user.name}<input key={user.id} ref={(self) => this.boxes.push(self)} type="checkbox" name={user.name} /><br/></label>)}
        <input value="submit" type="submit"/>
        </form> : <p>Now let's vote!</p>}
      </section>

      </div>

      )
  }
}

