import gql from "graphql-tag";

const GET_NOTES = gql`
  {
    notes {
      _id
      note
      createdAt
    }
  }
`;

const ADD_NOTE = gql`
  mutation addNote($note: String!) {
    addNote(note: $note) {
      _id
      note
      createdAt
    }
  }
`;

const REMOVE_NOTE = gql`
  mutation removeNote($id: String) {
    removeNote(id: $id) {
      success
    }
  }
`;

export { ADD_NOTE, GET_NOTES, REMOVE_NOTE };
