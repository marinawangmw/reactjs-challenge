import ApolloClient from "apollo-boost";
import { Filter } from "../redux/searcher/searcher.types";

export const client = new ApolloClient({
	uri: "https://rickandmortyapi.com/graphql",
});

export const queries = {
	[Filter.characters]: `
        query($name:String,$type:String, $page:Int) {
            characters(page:$page,filter:{name:$name, type:$type}){
                info{
                    pages
                }
                results{
                    id
                    name
                    type
                    species
                    gender
                    image
                }
            }
        }`,

	[Filter.locations]: `
        query($name:String,$type:String, $page:Int) {
            locations(page:$page,filter:{name:$name, type:$type}){
                info{
                    pages
                }
                results{
                    id
                    name
                    dimension
                    residents{
                        name
                        image
                    }
                }
            }
        }`,

	[Filter.episodes]: `
        query($name:String, $page:Int) {
            episodes(page:$page,filter:{name:$name}){
                info{
                    pages
                }
                results{
                    id
                    name
                    air_date
                    episode
                    characters{
                    name
                    image
                    }
                }
            }
        }`,
};
