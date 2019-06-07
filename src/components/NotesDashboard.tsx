import React from "react";
import { Alert, Text, View } from "react-native";
import { useMutation, useQuery } from "react-apollo-hooks";
import styled from "styled-components";
import NotesList from "../components/NotesList";
import { GET_NOTES, REMOVE_NOTE } from "../client/NotesQuery";
import { listItem } from "../components/customTypes";

const StyledList = styled(NotesList)``;

const NotesDashboard = () => {
  const { data, error, loading, refetch } = useQuery(GET_NOTES);
  const removeNoteMutation = useMutation(REMOVE_NOTE);
  const notesList: listItem[] = data.notes;

  const onDeleteAlert: (id: String) => void = (id: String) => {
    Alert.alert(
      "Are you sure?",
      "",
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel"
        },
        {
          text: "OK",
          onPress: async () => {
            try {
              await removeNoteMutation({
                variables: { id }
              });

              refetch();
            } catch (e) {
              // TODO: handle "something went wrong".
            }
          }
        }
      ],
      { cancelable: false }
    );
  };

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  if (error) {
    return (
      <View>
        <Text>Error! {error.message}</Text>
      </View>
    );
  }

  return (
    <StyledList
      list={notesList}
      onDelete={onDeleteAlert}
      refreshing={loading}
      refetch={refetch}
    />
  );
};

export default NotesDashboard;
