import React, { Component } from 'react';

import {
  TextInput,
  View,
  Image,
  Button,
  ScrollView,
  Alert
} from 'react-native';

import {
  Appbar,
  Chip,
} from 'react-native-paper';

import Styles from "./styles";
import api from '../services/api';
import General from '../services/main_general';

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initial_poks: [],
      initial_amount: '2'
    }
  }

  componentDidMount() {
    this.loadPoks();
  }

  loadPoks = async () => {
    const self = this;

    api.get(
      `/pokemon/?limit=${this.state.initial_amount}`
    ).then(function (response) {
      self.setState({ initial_poks: response.data.results })
    });
  }

  showDetails(name) {
    Alert.alert(
      `Ver Mais Informações de ${General.capitalizeString(name)}`,
      '',
      [
        { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false },
    );
  }


  refreshList(input_value) {
    if (!input_value) {
      this.setState({ initial_amount: 1 })
    }
    this.loadPoks();
  }

  render() {
    let optionItems = this.state.initial_poks.map((item) =>
      <Chip
        avatar={<Image source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${General.getID(item)}.png` }} />}
        Type='outlined'
        style={Styles.chip}
        textStyle={fontSize = 30}
        onPress={() => this.showDetails(item.name)} key={item.name}>
        {General.capitalizeString(item.name)}
      </Chip>
    );

    return (
      <View>
        <Appbar style={Styles.bottom}>
          <Appbar.Content
            title="PokeList"
          />
        </Appbar>


        <View style={{ flexDirection: 'row', top: 60, height: 40 }}>
          <View style={{ width: '70%' }} >
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              underlineColorAndroid='transparent'
              keyboardType='numeric'
              onChangeText={text => this.setState({ initial_amount: text })}
            />
          </View>
          <View style={{ width: '30%', height: 55 }} >
            <Button
              title="Listar"
              theme='dark'
              onPress={() => this.refreshList(this.state.initial_amount)}
            />
          </View>
        </View>

        <ScrollView style={{ textAlign: 'center', top: 90 }}>
          {optionItems}
        </ScrollView>
      </View>

    );
  }

}