import React, { Component } from 'react'

export class Banner extends Component {
  render() {
    return (
      <div>
          <div className="card banner-card">
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQAN3pKBR_mT5X_2wPgl14eZyLgnDYt8aGOA&usqp=CAU" className="card-img-top banner-img" alt="...">
         
     </img>
     <h5 className="card-title banner-title">Card title</h5>
     <p className="card-text banner-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     
</div>
      </div>
    )
  }
}

export default Banner