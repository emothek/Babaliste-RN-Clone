import React, {Component} from "react";
import { Text, View, Image, Alert, TouchableHighlight } from "react-native";
//import { ButtonGroup } from "react-native-elements";
import Grid from "react-native-infinite-scroll-grid";


export default class BrowseProducts extends Component{
  isLoading = false;

  constructor(props) {
    super(props);
    this.state = {
      loadingMore: false,
      refreshing: false,
      posts: [],
      nextPage: 1,
      numColumns: 2
    };
  }

  componentDidMount() {
    this.loadData(true);
  }

  onRefresh() {
    this.loadData(true);
  }

  onEndReached() {
    this.loadData(false);
  }

  async fetchPosts(page, perPage = 20){
    const posts = await fetch(
      `http://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${perPage}`
    ).then(response => response.json());
    return posts;
  }

  async loadData(refresh) {
    if (this.isLoading) return;

    if (refresh) {
      this.setState({ refreshing: true });
    } else {
      this.setState({ loadingMore: true });
    }

    try {
      this.isLoading = true;
      const posts = await this.fetchPosts(this.state.nextPage);
      this.setState(previousState => {
        return {
          loadingMore: false,
          posts: refresh ? posts : previousState.posts.concat(posts),
          nextPage: previousState.nextPage + 1
        };
      });
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoading = false;
      this.setState({ loadingMore: false, refreshing: false });
    }
  }

  onPress(info) {
    //console.warn('YO!'+index);
    this.props.navigation.navigate('Product', {
      index: info.index,
      itemId: info.item.id,
      imageUrl: info.item.thumbnailUrl
    });
  }


  renderItem(info) {
      return (
        <View
          style={{
            aspectRatio: 0.718,
            padding: 8
          }}
        >
          <TouchableHighlight key={info.index} onPress={this.onPress.bind(this, info)} underlayColor="white">
            <Image
              source={{ uri: info.item.thumbnailUrl }}
              style={{ aspectRatio: 1, borderRadius: 16 }}
            />
          </TouchableHighlight>

            <Text style={{ flex: 1, marginLeft: 4, fontWeight: 'bold' }}>{info.item.title}</Text>
            <Text style={{ flex: 1, marginLeft: 4 }}>{info.item.id}</Text>

        </View>
      );
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 120 }}>
        <Grid
          style={{ flex: 1 }}
          key={this.state.numColumns}
          numColumns={this.state.numColumns}
          data={this.state.posts}
          keyExtractor={item => item.id.toString()}
          renderItem={info => this.renderItem(info)}
          onRefresh={() => this.onRefresh()}
          refreshing={this.state.refreshing}
          onEndReached={() => this.onEndReached()}
          loadingMore={this.state.loadingMore}
          marginExternal={4}
          marginInternal={4}
        />
      </View>
    );
  }
}