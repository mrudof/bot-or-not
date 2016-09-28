class GoodCard extends React.Component {

  render () {
    let showChar
    let showName
    if (this.props.currentUser.character === "Merlin") {
        showName =
        <h3> You are Merlin. The Evil people are: </h3>
        showChar =
        this.props.users.map((user ,i) => {
        if (user.good === false && user.character != "Mordred") {
          return (<li key={i}>{user.name}</li>)
        }
      })
    } else if ((this.props.currentUser.character === "Percival")) {
      showName =  <h3> You are Percival. </h3>
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
