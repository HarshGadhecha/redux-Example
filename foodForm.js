import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Button, ListView } from 'react-native';
import { connect } from 'react-redux';
import { deleteFood } from './Actions/food';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

class foodForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> foodForm </Text>
                <Button title='Go Back' onPress={() => { this.props.navigation.navigate('Home') }} />
                <FlatList
                    data={this.props.foods}
                    keyExtractor={(item, index) => item.key.toString()}
                    renderItem={
                        (data) => <View>
                            <Text>{data.item.name}</Text></View>
                    } />
                <Table >
                    <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text} />
                </Table>
                <ScrollView style={styles.dataWrapper} showsVerticalScrollIndicator={false}>
                    <Table borderStyle={{}}>
                        {
                            this.state.tableData.map((PlayerPoints, index) => (
                                <Row
                                    key={index}
                                    data={PlayerPoints}
                                    widthArr={state.widthArr}
                                    style={[styles.row,
                                    index % 2 && { borderRadius: 10, borderWidth: 0.3 }
                                    ]}
                                    textStyle={styles.text1}
                                />
                            ))
                        }
                    </Table>
                    </ScrollView>
            </View>
        );
    }
}



const mapStateToProps = (state) => {
    return {
                    foods: state.foodReducer.foodList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
                    delete: (key) => dispatch(deleteFood(key))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(foodForm);

const styles = StyleSheet.create({
                    container: {
                    flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

});