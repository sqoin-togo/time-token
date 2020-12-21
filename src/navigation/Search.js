// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'
import FilmItem from './FilmItem'
//import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'


const API_TOKEN = "VOTRE_TOKEN_ICI";


class Search extends React.Component {


    constructor(props) {
        super(props)
        this.searchedText = "" // Initialisation de notre donnée searchedText en dehors du state
        this.state = {
            films: []
        }
    }
    // API/TMDBApi.js



    getFilmsFromApiWithSearchedText(text) {
        const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
        return fetch(url)
            .then((response) => response.json())
            .catch((error) => console.error(error))
    }
    _loadFilms() {
        if (this.searchedText.length > 0) { // Seulement si le texte recherché n'est pas vide
            getFilmsFromApiWithSearchedText(this.searchedText).then(data => {
                this.setState({ films: data.results })
            })
        }
    }

    _searchTextInputChanged(text) {
        this.searchedText = text // Modification du texte recherché à chaque saisie de texte, sans passer par le setState comme avant
    }

    render() {
        console.log("RENDER")
        return (
            <View style={styles.main_container}>
                <TextInput
                    style={styles.textinput}
                    placeholder='Titre du film'
                    onChangeText={(text) => this._searchTextInputChanged(text)}
                />
                <Button title='Rechercher' onPress={() => this._loadFilms()} />
                <FlatList
                    data={this.state.films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <FilmItem film={item} />}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
})

export default Search