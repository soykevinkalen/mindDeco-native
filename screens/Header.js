// import React from 'react'
// import { View, StyleSheet, ImageBackground, Text, Image, TouchableWithoutFeedback } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { connect } from 'react-redux';

// import authActions from '../redux/actions/authActions'

// const Header = (props) => {
//     return (
//         <View style={styles.navbar}>
//             <View style={styles.innerNavbar}>
//                 <View>
//                     <Ionicons name="menu-outline" size={35} color="white" onPress={ () => props.props.navigation.openDrawer() } />
//                 </View>
//                 <View style={{flexDirection: 'row', alignItems: 'center'}}>
//                     {
//                         props.userLogged
//                         ? 
//                         <>
//                         <TouchableWithoutFeedback onPress={() => props.logOut()}>
//                             <Text style={{color: 'white', marginRight: 8}}>Logout</Text>
//                         </TouchableWithoutFeedback>
                        
//                         <Image style={styles.userImage} source={{
//                             uri: props.userLogged.urlPic
//                         }} />

//                         </>
//                         : <Ionicons name="person-circle-outline" size={35} color="white" />
//                     }
//                 </View>
//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     userImage: {
//         width: 30,
//         height: 30,
//         borderRadius: 30,
//         overflow: 'hidden'
//     },
//     innerNavbar: {
//         width: '95%',
//         marginLeft: 'auto',
//         marginRight: 'auto',
//         flexDirection: 'row',
//         justifyContent: 'space-between'
//     },
//     navbar: {
//         width: '100%',
//         height: 45,
//         backgroundColor: "#000115",
//         justifyContent: 'flex-end',
//         paddingBottom: 2
//     }
// })

// const mapStateToProps = state => {
//     return {
//         userLogged: state.authReducer.userLogged
//     }
// }

// const mapDispatchToProps = {
//     logOut: authActions.logOut
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Header);