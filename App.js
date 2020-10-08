import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Button } from "react-native-elements";
import Deck from "./screen/Deck";

const DATA = [
  {
    id: 1,
    text: "Card #1",
    uri: "https://dainikazadi.net/wp-content/uploads/2019/04/api-karim-.jpg",
  },
  {
    id: 2,
    text: "Card #2",
    uri: "https://sabnamfaria.com/assets/others/logo.jpg",
  },
  {
    id: 3,
    text: "Card #3",
    uri:
      "https://1.bp.blogspot.com/-_RhWZspCEj4/XeVAPVhkc8I/AAAAAAAAA0k/LIy3JDBLpRQ3M3nrKNarrdM6_4oLp-FbQCLcBGAsYHQ/s400/Sabnam%2BFaria%2B2.png",
  },
  {
    id: 4,
    text: "Card #4",
    uri: "https://i.ytimg.com/vi/NvEO9-5bu0U/maxresdefault.jpg",
  },
  {
    id: 5,
    text: "Card #5",
    uri:
      "https://starsunfolded.com/wp-content/uploads/2017/08/Peya-Bipasha.-1280x720.jpg",
  },
  {
    id: 6,
    text: "Card #6",
    uri:
      "https://1.bp.blogspot.com/-1GI4bXZEl9c/XZHMH9Km9MI/AAAAAAAABJ0/AY_lt_JsEbYu3hC0ndqY_GPODQwtxcU2wCEwYBhgL/w1200-h630-p-k-no-nu/Anika%2BKabir%2BShokh%2B%252814%2529.jpg",
  },
  {
    id: 7,
    text: "Card #7",
    uri:
      "https://3.bp.blogspot.com/-I5NnzYNa784/TvYghI_AO8I/AAAAAAACWKo/RoLwxCgyVEM/s400/Api+karim+Bangladeshi+hot+model+%252828%2529.jpg",
  },
  {
    id: 8,
    text: "Card #8",
    uri:
      "https://www.ekushey-tv.com/media/imgAll/2018July/opi20180818054621.jpg",
  },
];

class App extends React.Component {
  renderCard(item) {
    return (
      <Card key={item.id} title={item.text} image={{ uri: item.uri }}>
        <Text style={{ marginBottom: 10 }}>
          I can customize the Card further.
        </Text>
        <Button
          icon={{ name: "code" }}
          backgroundColor="#03A9F4"
          title="View Now!"
        />
      </Card>
    );
  }

  renderNoMoreCards() {
    return (
      <Card title="All Done!">
        <Text style={{ marginBottom: 10 }}>There's no more content here!</Text>
        <Button backgroundColor="#03A9F4" title="Get more!" />
      </Card>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
