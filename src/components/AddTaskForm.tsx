import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Button } from "react-native-elements";
import { useMutation } from "react-apollo-hooks";
import { useNavigationEvents } from "react-navigation-hooks";
import { ADD_NOTE } from "../client/NotesQuery";

const { useEffect, useRef, useState } = React;

const AddTaskForm = (props: {
  refetch: () => void;
  goToTaskScreen: () => void;
}) => {
  const inputRef = useRef(null);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const addNoteMutation = useMutation(ADD_NOTE, {
    variables: { note: name }
  });
  useNavigationEvents(() => {
    const el: { focus: () => {} } = inputRef && inputRef.current!;
    setName("");
    el.focus();
  });
  useEffect(() => {
    const el: { focus: () => {} } = inputRef && inputRef.current!;
    setName("");
    el.focus();
  }, []);

  return (
    <View>
      <TextInput
        ref={inputRef}
        style={styles.input}
        onChangeText={text => setName(text)}
        value={name}
        placeholder="Enter Notes here"
      />

      <Button
        style={styles.btnStyle}
        loading={loading}
        onPress={async () => {
          setLoading(true);
          try {
            await addNoteMutation();
            await props.refetch();
            props.goToTaskScreen();
          } catch (e) {
            // TODO: alert "something went wrong"
          }
          setLoading(false);
        }}
        title="Submit"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  btnStyle: {
    margin: 10
  },
  input: {
    fontSize: 20,
    height: 30,
    borderColor: "transparent",
    borderWidth: 1,
    padding: 5,
    margin: 10
  }
});

export default AddTaskForm;
