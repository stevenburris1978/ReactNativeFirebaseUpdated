const ItemData = [
    {
        id: 1,
        category: 3,
        title: "Shoes",
        description: "size 10 lowtops ",
        price: 50,
        image: require("../../../assets/shoe.png"),
    },


    {
        id: 2,
        category: 1,
        title: "Food",
        description: "need milk",
        price: 3.50,
        image: require("../../../assets/milk.png"),
    },


    {
        id: 3,
        title: "Car part",
        description: "get asap",
        price: 100,
        image: require("../../../assets/rim.png"),
    },
];

export const categories = [
    { label: "Mall", value: 1 },
    { label: "Grocery Store", value: 2 },
    { label: "Auto Store", value: 3 },
  ];

export default ItemData;