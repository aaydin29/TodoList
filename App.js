import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

function App() {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState('');
  const [task, setTask] = useState([]);
  const addTaskPress = () => {
    setTask([...task, text]);
    setText('');
  };
  const removeTaskPress = index => {
    const newTask = [...task];
    newTask.splice(index, 1);
    setTask(newTask);
  };
  function updateCounter() {
    setCounter(counter + 1);
  }
  function downCounter() {
    setCounter(counter - 1);
  }
  function upCombined() {
    updateCounter();
    addTaskPress();
  }
  function downCombined() {
    downCounter();
    removeTaskPress();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>TO-DO LIST</Text>
        <Text style={styles.counter}>{counter}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder=" Enter your task here.."
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity style={styles.button} onPress={() => upCombined()}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={task}
          renderItem={({item, index}) => (
            <View style={styles.taskBackground}>
              <Text style={styles.taskList}>{item}</Text>
              <TouchableOpacity
                style={styles.taskDelete}
                onPress={() => downCombined(index)}>
                <Text style={styles.taskDeleteText}>X</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item + Math.random()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    backgroundColor: '#383e42',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'orange',
    margin: 10,
    marginBottom: 3,
    marginTop: 20,
    marginLeft: 20,
  },
  counter: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'orange',
    marginRight: 20,
    marginTop: 20,
  },
  inputContainer: {
    backgroundColor: '#EDE7F6',
    margin: 13,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: '#EDE7F6',
    borderRadius: 14,
    margin: 10,
    fontSize: 14,
    fontWeight: 'bold',
    flex: 1,
    marginRight: 5,
  },
  button: {
    backgroundColor: '#2e3438',
    margin: 10,
    borderRadius: 14,
    alignSelf: 'flex-end',
    flex: 1,
    marginRight: 10,
    marginLeft: 50,
    marginBottom: 15,
  },
  buttonText: {
    margin: 10,
    textAlign: 'center',
    color: 'white',
  },
  taskBackground: {
    flex: 1,
    margin: 11,
    marginBottom: 1,
    backgroundColor: '#EDE7F6',
    borderRadius: 10,
    marginLeft: 14,
    marginRight: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskList: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'array',
    color: '#2e3438',
    textAlign: 'left',
    marginLeft: 5,
    padding: 8,
  },
  taskDelete: {
    width: 25,
    height: 25,
    borderRadius: 15,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 9,
  },
  taskDeleteText: {
    fontSize: 10,
    color: 'white',
  },
});

export default App;
