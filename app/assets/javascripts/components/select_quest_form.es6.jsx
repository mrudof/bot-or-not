class SelectQuestForm extends React.Component {
  constructor() {
    super()
    this.state = {
      displayForm: true,
      members: []
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
        var currentUserID = this.props.currentUser.id;
          $.ajax({
            url: `/quests/${questID}/quest_members`,
            method: 'Post',
            data: {
              quest: votes,
              userID: currentUserID
            }
          }).done((response) => {
            this.setState ({
              displayForm: false,
              members: response
            })
          })
        }
  }

  render () {
    let showForm
      if (this.state.displayForm) {
        showForm =
          <section>
          <h3>Select {this.props.numberOnQuest} player(s) to go the quest.</h3>
            <form onSubmit={this.handleSubmit}>
              {this.props.users.map((user) =>
                <div key={user.id} className="checkbox">
                  <label>
                    <input ref={(self) => this.boxes.push(self)} type='checkbox' name={user.name} />
                    {user.name}
                  </label>
                </div>
              )}
            <input className='btn btn-success' value='Submit' type='submit'/>
            </form>
          </section>
      } else {
        showForm =
        // <p> you voted </p>

        <QuestVote updateGameStage={this.props.updateGameStage} currentGame= {this.props.currentGame} currentQuest={this.props.currentQuest} currentUser={this.props.currentUser} users={this.props.users} members={this.state.members}/>
      }
    return (
      <div className="create-quest">

        {showForm}
      </div>
      )
  }
}
