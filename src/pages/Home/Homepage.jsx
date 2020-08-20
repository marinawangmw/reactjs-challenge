import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Body from '../../components/body/Body';
import Footer from '../../components/footer/Footer';
import { characters, locations, episodes } from '../../data';
import './Homepage.css';

class Homepage extends React.Component {
    constructor() {
        super();
        this.state = {
            filter:
                {results:[
                    {
                        id: 1,
                        name: "Rick Sanchez",
                        species: "Human",
                        type: "",
                        gender: "Male",
                        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                      },
                      {
                        id: 2,
                        name: "Morty Smith",
                        species: "Human",
                        type: "",
                        gender: "Male",
                        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
                      }
                ]}
        }
    }

    handleSelectCharacter = (event) => {
        this.setState({ filter:characters })
    } 

    handleSelectLocations = (event) => {
        this.setState({ filter:locations })
    }

    handleSelectEpisodes = (event) => {
        this.setState({ filter:episodes })
    }
    
    render(){
        const { filter } = this.state;
        return (
            <div>
                <div className="homepage__body">
                    <Sidebar 
                        handleSelectCharacter={this.handleSelectCharacter}
                        handleSelectLocations={this.handleSelectLocations}
                        handleSelectEpisodes={this.handleSelectEpisodes}/>
                    <Body collection={filter}/>
                </div>
                
                    <Footer />
            </div>
        );
    }
};

export default Homepage;