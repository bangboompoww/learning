import React, { Component } from 'react';
import Layer from './Images/ImgWithTxt';
class App extends Component {
	state = {
		image: [
			{
				id: 'firstimg',
				img: 'https://thenationroar.com/wp-content/uploads/2020/04/5986912410_682fed19e2_b.0.jpg'
			},
			{ id: 'secondimg', img: 'https://thepopinsider.com/wp-content/uploads/2020/01/OnePiece.jpeg' },
			{ id: 'thirdimg', img: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg' }
		]
	};

	toggleImages = () => {
		const doesShow = this.state.showImages 
		this.setState({ showImages: !doesShow });
	};

	render() {
		let animeimg = null;
		if (this.state.showImages) {
			animeimg = (
				<div>
					{this.state.image.map((animeimgg, index) => {
						return (
							<React.Fragment>
								<Layer onClick={this.toggleImages} />
								<img src={this.state.image.img} alt={this.state.image.img} />
							</React.Fragment>
						);
					})}
				</div>
			);
		}
		return (
			<div className="App">
				<h1>hi</h1>
				{animeimg}
			</div>
		);
	}
}

export default App;
