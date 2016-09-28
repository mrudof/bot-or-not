class GoodCard extends React.Component {

  render () {
    let showChar
    let showName
    showName = <p> You are {this.props.currentUser.character}!</p>
    if (this.props.currentUser.character === "Merlin") {
        showChar =
        this.props.users.map((user ,i) => {
        if (user.good === false && user.character != "Mordred") {
          return (<li key={i}>{user.name} is evil.</li>)
        }
      })
    } else if ((this.props.currentUser.character === "Percival")) {
      showChar = this.props.users.map((user ,i) => {
      if (user.character === "Merlin" || user.character === "Morgana") {
        return (<li key={i}>{user.name}</li>)
      }
    })
    }
    return(
      <div>
        <h2>... is GOOD!!</h2>
        <ul>
        {showName}
        {showChar}
        </ul>
      </div>
    )
  }
}
