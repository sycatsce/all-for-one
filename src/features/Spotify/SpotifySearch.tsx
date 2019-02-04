import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Button from 'apsl-react-native-button';
import Spotify from 'rn-spotify-sdk';
import { SearchBar } from 'react-native-elements';

type state = { searchInput: string, dataSource: any };

export default class SpotifySearch extends React.Component<any, state> {

    constructor(props: any) {
        super(props);
		this.state = {
            searchInput: '',
            dataSource: [
                
            ]
        };
	}

    searchSong(searchInput: any){
        if (searchInput){
            this.setState({searchInput});
            Spotify.search(searchInput, ['track', 'artist']).then( (result: any) => {
                var songs: Array<Object> = [];
                result.tracks.items.forEach((element:any) => {
                    console.log(element.name + ' - ' + element.artists[0].name);
                    songs.push( { key: element.id, song: element.name, artist: element.artists[0].name } )
                });
                this.setState({ dataSource: songs });
        
            }).catch( (err: any) => {
                console.log(err);
            });
        } else {
            this.setState({ dataSource: [], searchInput: '' });
        }
    }

    render() {
        return(
            <View>
                <SearchBar
                    lightTheme={true}
                    containerStyle={{ backgroundColor: 'white' }}
                    inputContainerStyle={{ backgroundColor: 'black' }}
                    onChangeText={ (searchInput: string) => { this.searchSong(searchInput); }}
                    value={this.state.searchInput}
                />
                <View>
                    <FlatList
                        contentContainerStyle={{ flexGrow: 1 }}
                        data={this.state.dataSource}
                        renderItem={ ({item}:any) => <Text style={{ fontSize: 20 }}>{item.song + ' - ' + item.artist}</Text>}
                    />
                </View>
            </View>
        )
    }
}