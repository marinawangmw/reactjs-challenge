export const characters = {
    
    results:[
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
          },
          {
            id: 3,
            name: "Summer Smith",
            species: "Human",
            type: "",
            gender: "Female",
            image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
          },
          {
            id: 4,
            name: "Beth Smith",
            species: "Human",
            type: "",
            gender: "Female",
            image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
          },
          {
            id: 5,
            name: "Jerry Smith",
            species: "Human",
            type: "",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
          }
    ]
    
}

export const locations = {
    results:[
        {
            id: 1,
            name: "Earth (C-137)",
            type: "Planet",
            dimension: "Dimension C-137",
            residents: [
              {
                id: 38,
                name: "Beth Smith"
              },
              {
                id: 45,
                name: "Bill"
              },
              {
                id: 71,
                name: "Conroy"
              },
              {
                id: 82,
                name: "Cronenberg Rick"
              }
            ]
        },{
            id: 2,
            name: "Abadango",
            type: "Cluster",
            dimension: "unknown",
            residents: [
                {
                id: 6,
                name: "Abadango Cluster Princess"
                }
            ]
        },
        {
            id: 3,
            name: "Citadel of Ricks",
            type: "Space station",
            dimension: "unknown",
            residents: [
                {
                id: 8,
                name: "Adjudicator Rick"
                }
            ]
        }
    ]
}

export const episodes = {
    results: [
        {
          id: 1,
          name: "Pilot",
          created: "2017-11-10T12:56:33.798Z",
          episode: "S01E01",
          characters: [
            {
              "name": "Rick Sanchez"
            }
          ]
        },
        {
            id: 2,
            name: "Lawnmower Dog",
            created: "2017-11-10T12:56:33.916Z",
            episode: "S01E02",
            characters: [
              {
                name: "Rick Sanchez"
              },
              {
                name: "Morty Smith"
              },
              {
                name: "Beth Smith"
              }
            ]
        }
    ]
}