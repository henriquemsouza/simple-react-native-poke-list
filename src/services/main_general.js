
import { ToastAndroid } from 'react-native';

class General {
  static simpleMessage(message) {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  }

  static capitalizeString(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  static getID(item) {
    let splited = item.url.toString().split('/')

    return splited[splited.length - 2]
  }
}

export default General;