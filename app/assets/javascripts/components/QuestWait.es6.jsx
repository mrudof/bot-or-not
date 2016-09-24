class QuestWait extends React.Component {
  constructor () {
    super ()
    this.state = {
      members: []
    }
  }
  componentDidMount() {
    questID = this.props.currentQuest.id;
    setInterval(function() {
    $.ajax({
        url: `/quests/${questID}/quest_members`,
        method: 'get'
      }).done((response) => {
        debugger
        this.setState({
          members: response
        })
      })
    }, 10000);
  }
  render () {
    return (
      <div>
        <p>hi</p>
      </div>
      )
  }
}

