import React from 'react';
import './App.css';
import CardList from './Components/card-list/card-list.component'
import SearchBox from './Components/Searchbox/search-box.component'

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      searchField : '',
      strawhats : [
        {
          id : 1,
          name : 'Monkey D. Luffy',
          post : 'Captain',
          img : 'https://vignette.wikia.nocookie.net/onepiece/images/5/58/Monkey_D._Luffy_Post_Timeskip_Portrait.png/'
        },
        {
          id : 2,
          name : 'Roronoa Zoro',
          post : 'Swordsman',
          img : 'https://vignette.wikia.nocookie.net/onepiece/images/b/bc/Roronoa_Zoro_Post_Timeskip_Portrait.png'
        },
        {
          id : 3,
          name : 'Vinsmoke Sanji',
          post : 'Cook',
          img : 'https://vignette.wikia.nocookie.net/onepiece/images/e/e5/Sanji_Post_Timeskip_Portrait.png'
        },
        {
          id : 4,
          name : 'Ussop',
          post : 'Sniper',
          img : 'https://vignette.wikia.nocookie.net/onepiece/images/3/37/Usopp_Post_Timeskip_Portrait.png/'
        },
        {
          id : 5,
          name : 'Nami',
          post : 'Navigator',
          img : 'https://vignette.wikia.nocookie.net/onepiece/images/2/2f/Nami_Post_Timeskip_Portrait.png/'
        },
        {
          id : 6,
          name : 'Tony Tony Chopper',
          post : 'Doctor',
          img : 'https://vignette.wikia.nocookie.net/onepiece/images/e/e2/Tony_Tony_Chopper_Post_Timeskip_Portrait.png'
        },
        {
          id : 7,
          name : 'Nico Robin',
          post : 'Archaeologist',
          img : 'https://vignette.wikia.nocookie.net/onepiece/images/9/90/Nico_Robin_Post_Timeskip_Portrait.png'
        },
        {
          id : 8,
          name : 'Franky',
          post : 'Shipwright',
          img : 'https://vignette.wikia.nocookie.net/onepiece/images/8/83/Franky_Post_Timeskip_Portrait.png/'
        },
        {
          id : 9,
          name : 'Brook',
          post : 'Musician',
          img : 'https://vignette.wikia.nocookie.net/onepiece/images/0/03/Brook_Post_Timeskip_Portrait.png'
        },
        {
          id : 10,
          name : 'Jimbei',
          post : 'Helmsman',
          img : 'https://vignette.wikia.nocookie.net/onepiece/images/f/f7/Jinbe_Portrait.png/'
        }
      ]
    };
  }

  render(){
    const { strawhats, searchField } = this.state;
    const filteredStrawhats = strawhats.filter(strawhat =>
        strawhat.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className="App">
        <h1>StrawHat Pirates</h1>
        <SearchBox 
          placeholder = 'Search'
          changehandler = { e => {
            this.setState({ searchField : e.target.value }, () => {
                return console.log(this.setState)} )
                }}
        />
        <CardList strawhats = {filteredStrawhats} />
      </div>
    );
  }
  
}

export default App;
