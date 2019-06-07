import gql from "graphql-tag";

const GET_NOTES = gql`
  {
    notes {
      id
      note
      createdAt
    }
  }
`;

const ADD_NOTE = gql`
  mutation addNote($note: String!) {
    addNote(note: $note) {
      id
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
