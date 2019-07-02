import React from 'react';
import { View, Text, FlatList, TouchableHighlight } from 'react-native';
import Spotify from 'rn-spotify-sdk';
import { SearchBar } from 'react-native-elements';

type state = { searchInput: string, dataSource: any, isModalVisible: boolean };

export default class SpotifySearch extends React.Component<any, state>{

    constructor(props: any) {
        super(props);
		this.state = {
            searchInput: '',
            dataSource: [],
            isModalVisible: false
        };
	}

    searchSong(searchInput: any){
        if (searchInput){
            this.setState({searchInput});
            Spotify.search(searchInput, ['track']).then( (result: any) => {
                var songs: Array<Object> = [];
                result.tracks.items.forEach((element:any) => {
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
                    containerStyle={{ backgroundColor: 'white', borderRadius: 6 }}
                    inputContainerStyle={{ backgroundColor: 'rgba(236, 201, 212, 0.558011)', borderRadius: 6 }}
                    onChangeText={ (searchInput: string) => { this.searchSong(searchInput); }}
                    value={this.state.searchInput}
                />
                <View>
                    <FlatList
                        contentContainerStyle={{ flexGrow: 1 }}
                        data={this.state.dataSource}
                        renderItem={ ({item}:any) =>
                            <TouchableHighlight
                                onPress={ () => { this.props.func(item.key, item.song + " - " + item.artist); }}
                                style={{ height: 40}}
                            >
                                <View>
                                    <Text>
                                        {item.song + ' - ' + item.artist}
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        }
                    />
                </View>
            </View>
        )
    }
}