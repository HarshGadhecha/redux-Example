import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import foodReducer from './Reducers/FoodReducers';
import { addFood } from './Actions/food';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        food:'',
    };
  }

  render() {
    return (
        <View style={styles.container}>
        <Text style={{fontSize:25}}>Redux</Text>
        
        <TextInput 
        placeholder='Enter food' 
        style={styles.input} 
        onChangeText={(food)=>this.setState({food})}
        value={this.state.food}/>

        <Button title='Submit food' onPress={()=>this.props.add(this.state.food)}/>
        <Button title='Go to list food' onPress={()=>{this.props.navigation.navigate('foodForm')}}/>
      </View>
    );
  }
}



const mapStateToProps=(state)=>{
    return{
        foods:state.foodReducer.foodList
    }
    }
    const mapDispatchToProps=(dispatch)=>{
        return{
            add:(food)=>dispatch(addFood(food))
        }
    }
    
export default connect(mapStateToProps,mapDispatchToProps)(Home);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input:{
      width:200,marginVertical:20,padding:10,
      fontSize:22,
      alignItems:"center",borderBottomWidth:1
    }
  });