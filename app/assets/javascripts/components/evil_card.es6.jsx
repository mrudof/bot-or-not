class EvilCard extends React.Component {

  render () {
    showPic = <img src={`/${this.props.currentUser.character}.jpg`} className="img-responsive img-rounded centered" />
    showName = <p className="white_text start_game_text">You are {this.props.currentUser.character}... ROBOT</p>
    return(
      <div>
        {showPic}
        {showName}
        <p className="welcome">Other robots:</p>
        {
          this.props.users.map((user ,i) => {
            if (user.good === false && this.props.currentUser.id != user.id) {
              return (<p className="white_text intro-text" key={i}>{user.name}</p>)
            }
          })
        }
      </div>
    )
  }
}
