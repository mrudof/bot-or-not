class Character extends React.Component {


  render () {

    // replace isGood with current_user.good

    const isGood = true

    let characterCard
    if (isGood) {
      characterCard = <GoodCard />
    } else {
      characterCard = <EvilCard />
    }

    return(
      <div>
        <h1>Your Card / infodump</h1>
        {characterCard}
        <p>placeholder</p>

        <div className="btn-group">
          <button type="button" className="btn btn-success">OK</button>
        </div>

      </div>
    )
  }
}
