import React from "react";
import { 
    StyleSheet, 
    View, 
    Text, 
    ScrollView, 
    TextInput, 
    TouchableOpacity, 
    KeyboardAvoidingView, 
    Platform
} from 'react-native';

import Note from './note';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noteArray: [],
            noteText: '',
            editingKey: null
        };
    }

    render() {
        let notes = this.state.noteArray.map((val, key) => {
            return (
                <Note 
                    key={key} 
                    keyval={key} 
                    val={val}
                    deleteMethod={() => this.deleteNote(key)}
                    editMethod={() => this.editNote(key)}
                />
            );
        });

        return (
            <KeyboardAvoidingView 
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
            >  
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}> - Nota -</Text>
                    </View>

                    <ScrollView style={styles.scrollContainer}>
                        {notes}
                    </ScrollView>
                     <View style={styles.footerContainer}>
                    <View style={styles.footer}>
                        <TextInput 
                            style={styles.textInput}
                            onChangeText={(noteText) => this.setState({ noteText })}
                            value={this.state.noteText}
                            placeholder='> nota'
                            placeholderTextColor='white'
                            underlineColorAndroid='transparent'
                        />
                        </View>

                        <TouchableOpacity style={styles.addButton} onPress={this.addNote.bind(this)}>
                            <Text style={styles.addButtonText}> + </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }

    addNote() {
        if (!this.state.noteText.trim()) {
            return;
        }

        let notes = [...this.state.noteArray];

        if (this.state.editingKey !== null) {
            notes[this.state.editingKey].note = this.state.noteText;
        } else {
            let d = new Date();
            notes.push({
                date: d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(),
                note: this.state.noteText
            });
        }

        this.setState({
            noteArray: notes,
            noteText: '',
            editingKey: null
        });
    }

    deleteNote(key) {
        let notes = [...this.state.noteArray];
        notes.splice(key, 1);
        this.setState({ noteArray: notes });
    }

    editNote(key) {
        this.setState({
            noteText: this.state.noteArray[key].note,
            editingKey: key
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#E91E63',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#dddddd'
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26
    },
    scrollContainer: {
        flex: 1,
    },
    footerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#252525',
    },
    footer: { 
        flex: 1
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 30,
        backgroundColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#ededed',
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#E01E63',
        width: 90,
        height: 90,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    addButtonText: {
        color: '#ffffff',
        fontSize: 24
    },
});