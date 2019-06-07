import React from "react";
import {
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Icon, ListItem } from "react-native-elements";
import styled from "styled-components";
import { listItem } from "../components/customTypes";
import moment from "moment";

const DimensionsWidth = Dimensions.get("window").width;

const StyledListItem = styled(ListItem)`
  width: ${DimensionsWidth};
`;

const StyledTrashIcon = styled(Icon).attrs({
  type: "ionicon",
  name: "ios-trash",
  iconStyle: {
    padding: 10
  }
})`
  color: ${props => props.color};
`;

const NotesList = ({
  list,
  onDelete,
  refetch,
  refreshing,
}: {
  list: listItem[];
  onDelete: (id: String) => void;
  refetch: () => void;
  refreshing: boolean;
}) => {
  const keyExtractor = (item: listItem, index: number) => index.toString();
  if (!list || !list.length) {
    return (
      <View>
        <Text>no item found</Text>
      </View>
    );
  }

  const renderItem = ({ item }: { item: listItem }) => {
    const dateObj = moment(item.createdAt + "");

    return (
      <StyledListItem
        title={item.note + ""}
        subtitle={`${dateObj.format("YYYY-MM-DD HH:mm")}\n${dateObj.fromNow()}`}
        rightElement={
          <TouchableOpacity onPress={() => onDelete(item.id)}>
            <StyledTrashIcon color="red" />
          </TouchableOpacity>
        }
      />
    );
  };

  return (
    <FlatList
      onRefresh={refetch}
      refreshing={refreshing}
      keyExtractor={keyExtractor}
      data={list ? list : []}
      renderItem={renderItem}
    />
  );
};

export default NotesList;
