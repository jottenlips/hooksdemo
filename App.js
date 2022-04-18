import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import React, { useContext, useEffect, useState, useReducer } from 'react';
// Use context 
const CounterContext = React.createContext([0, () => {}]);

const CountProvider = props => {
  // just a set state you can use in any component
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={[count, setCount]}>
      {props.children}
    </CounterContext.Provider>
  );
}

const useCounterContext = () => {
  const [count, setCount] = useContext(CounterContext);
  const resetCount = () => setCount(0);

  // could also put effects here or any other hooks here

  return [count, setCount, resetCount];
}

export default function App() {

  // run on component mount
  // Use Effect
  useEffect(() => {
    console.log("I was just rendered once!")
  }, []);

  return (
    <CountProvider>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <SomethingElse />
        <Counter />
        <ReducerComponent/>
      </View>
    </CountProvider>
  );
}

const Counter = (props) => {
  const [count, setCount] = useCounterContext();
  return (
    <>
      <Text>{count}</Text>{" "}
      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <Text>++</Text>
      </TouchableOpacity>{" "}
    </>
  );
}

const SomethingElse = (props) => {
  const [count, _setCount, resetCount] = useCounterContext();

  // when count changes, run this effect
  useEffect(() => {
    if (count > 0) {
      console.log(`You clicked ${count} times`);
    }
  }, [count]);

  return (
    <>
      <Text>{count}</Text>{" "}
      <TouchableOpacity onPress={() => resetCount()}>
        <Text>Reset</Text>
      </TouchableOpacity>
    </>
  );
};

// Use reducer
const initialState = { message: '' };

function reducer(state, action) {
  switch (action.type) {
    case "sayHello":
      return { message: state.message + " " + "hi" };
    case "sayGoodbye":
      return { message: state.message + " " + "bye" };
    case "reset":
      return { message: '' };
    default:
      throw new Error();
  }
}

// make our own hook because use reducer is messy
const useMessage = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToMessage = (action) => dispatch({ type: action });
  return [state.message, addToMessage];
};

const ReducerComponent = (props) => { 
  const [message, addToMessage] = useMessage(reducer, initialState);
  return (
    <>
      <TouchableOpacity onPress={() => addToMessage("sayHello")}>
        <Text>Hi</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addToMessage("sayGoodbye")}>
        <Text>bye</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addToMessage("reset")}>
        <Text>reset message string</Text>
      </TouchableOpacity>
      <Text>{message}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
