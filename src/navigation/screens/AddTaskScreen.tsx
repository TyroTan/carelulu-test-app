import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import AddTaskForm from "../../components/AddTaskForm";
import { GET_NOTES } from "../../client/NotesQuery";

import { useQuery } from "react-apollo-hooks";
import { useNavigation } from "react-navigation-hooks";

const AddTaskScreen = () => {
  const { navigate } = useNavigation();
  const { refetch } = useQuery(GET_NOTES);

  return (
    <View style={styles.container}>
      <StatusBar
        hidden={true}
      />
      <AddTaskForm refetch={refetch} goToTaskScreen={() => navigate("Home")}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default AddTaskScreen;
