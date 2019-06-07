import React from "react";
import { Button, Text, View, NativeSyntheticEvent } from "react-native";
import gql from "graphql-tag";
import { useMutation, useQuery } from "react-apollo-hooks";

// const GET_RESERVATIONS = gql`
//   query {
//     reservations {
//       id
//       name
//     }
//   }
// `;

const GET_NOTES = gql`
  {
    users {
      profile {
        email
        firstName
        lastName
      }
    }
  }
`;

const ADD_NOTES = gql`
  mutation addUser($firstName: String!) {
    addUser(firstName: $firstName) {
      firstName
      lastName
    }
  }
`;

type listItem = {
  profile: {
    firstName: String;
    lastName: String;
    email: String;
  };
};

const NotesWithAddButton = (props: { refetch: () => {} }) => {
  const toggleLike = useMutation(ADD_NOTES, {
    variables: { firstName: "123" }
  });
  return (
    <View>
      <Button
        onPress={async () => {
          await toggleLike();
          props.refetch();
        }}
        title="Add"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

const NotesDashboard = () => {
  const { data, error, loading, refetch } = useQuery(GET_NOTES);
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
    <View>
      <NotesWithAddButton refetch={refetch} />
      {data.users.map((user: listItem, index: number) => (
        <Text key={index}>
          {user.profile.email} - {user.profile.lastName},
          {user.profile.firstName}
        </Text>
      ))}
    </View>
  );
};

export default NotesDashboard;
