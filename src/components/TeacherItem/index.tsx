import React from 'react';
import {View, Image, Text} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import styles from './stlyes';

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{uri: 'https://github.com/diego3g.png'}}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Crístian Augusto</Text>
          <Text style={styles.subject}>Química</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Esta é uma biografia de teste que só serve para encher espaço.
        {'\n'}
        {'\n'}
        Mas que coisa não é mesmo?! QUem diria que um texto deste seria capaz de
        prender sua atenção até aqui, então é isso continue lendo até o texto
        acabar ou leia até você cansar pois eu mesmo já estou cansado de digitar
        isso aqui.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}> Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;
