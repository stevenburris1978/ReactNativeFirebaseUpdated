import React, { useState, useContext } from "react";
import { RefreshControl, FlatList, StyleSheet, View, SafeAreaView,TouchableWithoutFeedback, Modal, TextInput, Text, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import Items from "./Items";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AddItem from "./AddItem";
import TaskContext from "../../context/TaskContext";


export default function ItemList() {
  const { itemList, deleteItem, editItem, updateItem } = useContext(TaskContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [itemId, setItemId] = useState(null);

  const handleEditItem = (item) => {
    setItemId(item.id);
    setTitle(item.data.title);
    setDescription(item.data.description);
    setModalVisible(true);
    editItem(item);
  };

  const handleUpdateItem = () => {
    if (itemId) {
      updateItem(itemId, { title, description });
      setModalVisible(false);
    }
  };
  
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    {ItemList};
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);


  return (
   <SafeAreaView style={styles.screen}>
    <View>
      <FlatList
        ListHeaderComponent={AddItem}
        data={itemList}
        keyExtractor={(itemList) => itemList.id}
        renderItem={({ item }) => (
          <Items
            id={item.id}
            category={item.data.category}
            title={item.data.title}
            description={item.data.description}
            image={item.image}
            price={item.data.price}
            date={item.data.date}
            
            renderRightActions={() => (

              <View style = {styles.actionsContainer}>
                <TouchableWithoutFeedback onPress={() => handleEditItem(item)}>                   
                  <View style={styles.pencilContainer}>
                    <MaterialCommunityIcons 
                      name="pencil"
                      size={40}
                      color="midnightblue"
                    />                   
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => deleteItem(item.id)}>                
                  <View style={styles.trashContainer}>
                    <MaterialCommunityIcons 
                      name="trash-can"
                      size={40}
                      color="midnightblue"
                    />
                  </View>
                </TouchableWithoutFeedback>
              </View>
            )}  

          />

        )}

        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
         }  
      
      />

<Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Edit Item's Details</Text>
          <TextInput
            style={styles.input}
            placeholder="Item's Title"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={styles.input}
            placeholder="Item's Description"
            value={description}
            onChangeText={setDescription}
          />
          <TouchableOpacity style={styles.button} onPress={handleUpdateItem}>
            <Text style={styles.buttonText}>Update Item</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      </View>
    </SafeAreaView>
  
  );

}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.StatusBarHeight,
    backgroundColor: "#F7E7F8",
  },
  container: {
    padding: 20,
    paddingTop: 100,
  },
  secondContainer: {
    padding: 20,
    paddingTop: 50,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 7,
  },
  description: {
    color: "#fff",
    fontWeight: "bold",
  },
  actionsContainer: {
    width: 150,
    marginTop: 20,
    flexDirection: "column",
  },

  pencilContainer: {
    flex: 3,
    backgroundColor: "lavenderblush",
    justifyContent: "center",
    alignItems: "center",
  },

  trashContainer: {
    flex: 1,
    backgroundColor: "#F8D7DA",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: "100%",
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});