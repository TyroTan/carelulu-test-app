import React from "react";
import { Text, View } from "react-native";

// const { FC } = React;

type listItem = {
    name: String,
    age: number
}

interface INotesDashboard {
    list: Array<listItem>
}

const NotesDashboard = (props: INotesDashboard) => {
    return <View>{
      props.list.map(l => <Text key={l.age}>Hello Notes Dashboard {l.name} - {l.age}</Text>)
    }</View>
}

export default NotesDashboard;