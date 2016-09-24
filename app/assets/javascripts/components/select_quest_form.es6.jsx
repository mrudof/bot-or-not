class SelectQuestForm extends React.Component {
  constructor() {
    super()
    this.state = {
      displayForm: true,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.boxes = []
  }

  handleSubmit(event) {
    event.preventDefault()
    $('.error-message').remove();
    //fiter out nulls and repeats that are happening
    this.boxes = this.boxes.filter(function(n){ return n != undefined });
    votes = this.boxes.filter((box) => box.checked).map((box) => box.name)
    votes = votes.filter(function(item, pos) { return votes.indexOf(item) == pos; })
    if (votes.length < this.props.numberOnQuest) {
      $('.create-quest').append(`<p class="error-message">Please select ${this.props.numberOnQuest}</p>`)
    } else if (votes.length > this.props.numberOnQuest) {
      $('.create-quest').append(`<p class="error-message">Please select ${this.props.numberOnQuest}</p>`)
    } else {
    var questID = this.props.currentQuest.id;
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
    currentUser = this.props.currentUser;
    return (
      <div className="create-quest">
       <section>
        {this.state.displayForm ? <form onSubmit={this.handleSubmit}>
          {this.props.users.map((user) =>
            <label key={user.id}>{user.name}
            <input key={user.id} ref={(self) => this.boxes.push(self)} type="checkbox" name={user.name} />
            <br/>
            </label>
          )}
        <input value="submit" type="submit"/>
        </form> : <p>Now let's vote!</p>}
      </section>
      </div>

      )
  }
}

