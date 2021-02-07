import React from 'react';
import unplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

    state = {photoList: []}
    
    onSearchSubmit = async (term) => {
        const result = await unplash.get('/search/photos', {
        params: {
                query: term
        }
        });
        console.log(result)
        this.setState({photoList:result.data.results});
        console.log(this.state.photoList)
    }

    render(){
        return (<div className="ui container" style={{marginTop: '10px'}}>
                    <SearchBar onSubmit={this.onSearchSubmit} images={this.state.photolist} />
                    <ImageList images={this.state.photoList} />
                </div>
        );
    }
}


export default App;