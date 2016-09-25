class QuestWait extends React.Component {
  constructor () {
    super ()

      this.members =  []
      this.done = false
  }

  componentWillMount() {
    //need to reset later to this.props.currentQuest.id;
    questID = 24
    var that = this
    //timer for later
    var myTimer = setInterval(() => {
      if (that.members.length < that.props.numberOnQuest) {
        $.ajax({
            url: `/quests/${questID}/quest_members`,
            method: 'get'
          }).done((response) => {
              that.members = response
          }.bind(this))
        } else {
            that.done = true
          clearInterval(myTimer);
        }
      }, 1000);
  }
  toDo(){
    if (this.done === true) {
      return (<p>votetime</p>)
      // (<QuestVote/>)
    } else
    return (<p>waiting...</p>)
  }


  render () {
    return (
      <div>
        {this.toDo()}
      </div>
      )
  }
}

