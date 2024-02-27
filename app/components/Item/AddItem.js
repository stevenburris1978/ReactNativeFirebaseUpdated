import { useState, useContext } from "react";
import {
  SafeAreaView,
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity, Image
} from "react-native";
import { Divider } from "react-native-elements";
import DropDownPicker from "react-native-dropdown-picker";
import DateTimePicker from "react-native-modal-datetime-picker";
import { categories } from "./ItemData";
import TaskContext from "../../context/TaskContext";

export default function AddItem() {
  const {addItem} = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  // add item card
  const handelSubmit = () => {

    if (title && description && price && category && selectedDate) {

      const item = {
        
        title,
        description,
        price,
        category,
        date: selectedDate,
      };
      addItem(item);
      console.log(item);

      setTitle("");
      setDescription("");
      setCategory(null);
      setSelectedDate(null);
      setPrice ("");
     

    } else {
      alert("Please enter all new info.");
    }
  };

    //useSate for DropDown
    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState(null);
  
    const categoryItems = categories.map((item) => ({
      value: item.value,
      label: item.label,
    }));
  
    //DateTimePicker
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
  
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
      // Format date to only show month, day, and year
      const formattedDate = date.toLocaleDateString("en-US", {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
      setSelectedDate(formattedDate);
      console.log("A date has been picked: ", formattedDate);
      hideDatePicker();
    };
    
  return (
    <>
      
      <SafeAreaView style={styles.screen}>
      
      <View style={styles.containerTwo}>
                <Image
                style={styles.image}
                source={require("../../../assets/shoe.png")}
               /> 
               <Text style={{ marginTop: 20, fontSize: 35, paddingLeft:5, color: "midnightblue"}}>Shopping App</Text>

               </View>

        <View style={styles.viewContainer}>
          <Text style={styles.title}>Add Items</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Enter Item title"
            onChangeText={(title) => setTitle(title)}
            value={title}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Item Description"
            onChangeText={(description) => setDescription(description)}
            value={description}
          />
          <TextInput
            style={styles.input}
            placeholder="Please use only numbers and decimals"
            onChangeText={(price) => setPrice(price)}
            value={price}
          />

          <DropDownPicker
            open={open}
            value={category}
            items={categoryItems}
            setOpen={setOpen}
            setValue={setCategory}
            placeholder="Item Category"
            placeholderStyle={styles.dropdownText}
            containerStyle={styles.dropdown}
            dropDownContainerStyle={styles.dropdownContainer}
          />

          <View style={styles.date}>
            <Button title="Item Date Picker" onPress={showDatePicker} />
            <DateTimePicker
              isVisible={isDatePickerVisible}
              mode="datetime"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>

          <TouchableOpacity 
          style={styles.button} 
          onPress={handelSubmit}>
          <Text style={styles.buttonText}>Add Item</Text>
          </TouchableOpacity>

        </View>

      </SafeAreaView>
    </>
    
  );        

}
  <Divider orientation="vertical" />
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "aqua",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  image: {
    height: 70,
    width: 70,
    marginTop: 5,

    borderRadius: 35,
    padding: 30,
},
containerTwo: {


  flex: 1,
  backgroundColor: "aquamarine",
  flexDirection: "row",
  padding: 40,
  alignItems: "stretch",
  justifyContent: "flex-start",
  width: "100%"


},
  button: {
    backgroundColor: "aqua",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 250,
    width: "100%"
  },
  buttonText: {
    color: "teal",
    fontSize: 20,
    textAlign: "center",
  },
  viewContainer: {
    flex: 4,
    padding: 45,
    backgroundColor: "#F8F993",
    width: "100%"
  },
  title: {
    color: "black",
    fontSize: 45,
    textAlign: "center",
  },
  input: {
    height: 75,
    margin: 10,
    borderWidth: 2,
    padding: 25,
    borderColor: "green",
    borderBottomColor: "black",
  },
  dropdownText: {
    color: "black",
    fontWeight: "bold",
  },
  dropdown: { height: 100, borderRadius: 30, paddingTop: 30 },
  dropdownContainer: {
    backgroundColor: "#dfdfdf",
    borderRadius: 30,
  },
  date: {
    paddingTop: 30,
  },
  dateText: {
    fontSize: 10,
  },
});