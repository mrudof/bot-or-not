class GoodCard extends React.Component {

  render () {
    let showChar
    let showName
    let showPic
    let showText
    showPic = <img src={`/${this.props.currentUser.character}.jpg`} className="img-responsive img-rounded" />

    showName = <p> You are {this.props.currentUser.character}!</p>

    if (this.props.currentUser.character === "Sarah Connor") {

        showText = <h5>The following are secretly robots: </h5>

        showChar =
        this.props.users.map((user ,i) => {
        if (user.good === false && user.character != "Boomer") {
          return (<li key={i}>{user.name}</li>)
        }
      })
    } else if ((this.props.currentUser.character === "Deckard")) {

      showText = <h5>You know one of these players is Sarah Connor and one is Rachael. </h5>

      showChar = this.props.users.map((user ,i) => {
      if (user.character === "Sarah Connor" || user.character === "Rachael") {
        return (<li key={i}>{user.name}</li>)
      }
    })
    }
    return(
      <div>
        {showPic}
        {showName} <h2>a human.</h2>
        <ul>

        {showText}
        {showChar}
        </ul>
      </div>
    )
  }
}
