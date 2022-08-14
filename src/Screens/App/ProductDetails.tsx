import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';

const SCREEN_WIDTH = Dimensions.get('window').width;

const data = [
  {id: '1', name: 'A'},
  {id: '2', name: 'B'},
  {id: '3', name: 'C'},
  {id: '4', name: 'D'},
  {id: '5', name: 'E'},
  {id: '6', name: 'F'},
  {id: '7', name: 'G'},
  {id: '8', name: 'H'},
  {id: '9', name: 'I'},
  {id: '10', name: 'J'},
  {id: '11', name: 'K'},
  {id: '12', name: 'L'},
  {id: '13', name: 'M'},
  {id: '14', name: 'N'},
  {id: '15', name: 'O'},
  {id: '16', name: 'P'},
  {id: '17', name: 'Q'},
  {id: '18', name: 'R'},
  {id: '19', name: 'S'},
  {id: '20', name: 'T'},
  {id: '21', name: 'U'},
  {id: '22', name: 'V'},
  {id: '23', name: 'W'},
  {id: '24', name: 'X'},
  {id: '25', name: 'Y'},
  {id: '26', name: 'Z'},
];

const ProductDetails = (props: any) => {
  const rightSwipe = (progress: any, dragX: any) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
    return (
      <TouchableOpacity
        onPress={() => {
          props.handleDelete;
        }}
        activeOpacity={0.6}>
        <View style={styles.deleteBox}>
          <Animated.Text style={{transform: [{scale: scale}]}}>
            Delete
          </Animated.Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={rightSwipe}>
        <View style={styles.container}>
          <Text>{props.data.name}.</Text>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const App = () => {
  const [lists, setLists] = useState(data);

  const deleteItem = (index: any) => {
    const arr = [...lists];
    arr.splice(index, 1);
    setLists(arr);
  };
  return (
    <SafeAreaView style={styles.container1}>
      <FlatList
        data={lists}
        renderItem={({item, index}) => {
          return (
            <ProductDetails
              data={item}
              handleDelete={() => deleteItem(index)}
            />
          );
        }}
        ItemSeparatorComponent={() => {
          return <View style={styles.seperatorLine}></View>;
        }}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: 80,
    width: SCREEN_WIDTH,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 16,
  },
  deleteBox: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 80,
  },
  container1: {
    flex: 1,
  },
  seperatorLine: {
    height: 1,
    backgroundColor: 'black',
  },
});

// import React, {useState} from 'react';
// import {
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   TouchableHighlight,
//   View,
// } from 'react-native';
// import {SwipeListView} from 'react-native-swipe-list-view';

// export default function ProductDetails() {
//   const [listData, setListData] = useState(
//     Array(25)
//       .fill('')
//       .map((_, i) => ({key: `${i}`, text: `Item ${++i}`})),
//   );

//   const closeItem = (rowMap: any, rowKey: any) => {
//     if (rowMap[rowKey]) {
//       rowMap[rowKey].closeRow();
//     }
//   };

//   const deleteItem = (rowMap: any, rowKey: any) => {
//     closeItem(rowMap, rowKey);
//     const newData = [...listData];
//     const prevIndex = listData.findIndex(item => item.key === rowKey);
//     newData.splice(prevIndex, 1);
//     setListData(newData);
//   };

//   const onItemOpen = (rowKey: any) => {
//     console.log('This row opened', rowKey);
//   };

//   const renderItem = (data: any) => (
//     <TouchableHighlight
//       onPress={() => console.log('You touched me')}
//       style={styles.rowFront}
//       underlayColor={'#fff'}>
//       <View>
//         <Text style={styles.list}>
//           This Is {data.item.text} Of Swipe List View
//         </Text>
//       </View>
//     </TouchableHighlight>
//   );

//   const renderHiddenItem = (data: any, rowMap: any) => (
//     <View style={styles.rowBack}>
//       <TouchableOpacity
//         style={[styles.actionButton, styles.closeBtn]}
//         onPress={() => closeItem(rowMap, data.item.key)}>
//         <Text style={styles.btnText}>Close</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[styles.actionButton, styles.deleteBtn]}
//         onPress={() => deleteItem(rowMap, data.item.key)}>
//         <Text style={styles.btnText}>Delete</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <SwipeListView
//         data={listData}
//         renderItem={renderItem}
//         renderHiddenItem={renderHiddenItem}
//         leftOpenValue={75}
//         rightOpenValue={-150}
//         previewRowKey={'0'}
//         previewOpenValue={-40}
//         previewOpenDelay={3000}
//         onRowDidOpen={onItemOpen}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//     flex: 1,
//   },
//   list: {
//     color: '#FFF',
//   },
//   btnText: {
//     color: '#FFF',
//   },
//   rowFront: {
//     alignItems: 'center',
//     backgroundColor: 'lightcoral',
//     borderBottomColor: 'black',
//     borderBottomWidth: 0.5,
//     justifyContent: 'center',
//     height: 50,
//   },
//   rowBack: {
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingLeft: 5,
//   },
//   actionButton: {
//     alignItems: 'center',
//     bottom: 0,
//     justifyContent: 'center',
//     position: 'absolute',
//     top: 0,
//     width: 75,
//   },
//   closeBtn: {
//     backgroundColor: 'blue',
//     right: 75,
//   },
//   deleteBtn: {
//     backgroundColor: 'red',
//     right: 0,
//   },
// });

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   Text,
//   StatusBar,
//   FlatList,
//   Alert,
// } from 'react-native';
// import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';
// const todoList = [
//   {id: '1', text: 'Learn JavaScript'},
//   {id: '2', text: 'Learn React'},
//   {id: '3', text: 'Learn TypeScript'},
// ];
// const Separator = () => <View style={styles.itemSeparator} />;
// const LeftSwipeActions = () => {
//   return (
//     <View
//       style={{flex: 1, backgroundColor: '#ccffbd', justifyContent: 'center'}}>
//       <Text
//         style={{
//           color: '#40394a',
//           paddingHorizontal: 10,
//           fontWeight: '600',
//           //   paddingHorizontal: 30,
//           paddingVertical: 20,
//         }}>
//         Bookmark
//       </Text>
//     </View>
//   );
// };
// const rightSwipeActions = () => {
//   return (
//     <View
//       style={{
//         backgroundColor: '#ff8303',
//         justifyContent: 'center',
//         alignItems: 'flex-end',
//       }}>
//       <Text
//         style={{
//           color: '#1b1a17',
//           paddingHorizontal: 10,
//           fontWeight: '600',
//           //   paddingHorizontal: 30,
//           paddingVertical: 20,
//         }}>
//         Delete
//       </Text>
//     </View>
//   );
// };
// const swipeFromLeftOpen = () => {
//   Alert.alert('Swipe from left');
// };
// const swipeFromRightOpen = () => {
//   Alert.alert('Swipe from right');
// };
// const ListItem = ({text}: any) => (
//   <GestureHandlerRootView>
//     <Swipeable
//       renderLeftActions={LeftSwipeActions}
//       renderRightActions={rightSwipeActions}
//       onSwipeableRightOpen={swipeFromRightOpen}
//       onSwipeableLeftOpen={swipeFromLeftOpen}>
//       <View
//         style={{
//           paddingHorizontal: 30,
//           paddingVertical: 20,
//           backgroundColor: 'white',
//         }}>
//         <Text style={{fontSize: 24}}>{text}</Text>
//       </View>
//     </Swipeable>
//   </GestureHandlerRootView>
// );
// const ProductDetails = () => {
//   return (
//     <>
//       <StatusBar />
//       <SafeAreaView style={styles.container}>
//         <Text style={{textAlign: 'center', marginVertical: 20}}>
//           Swipe right or left
//         </Text>
//         <FlatList
//           data={todoList}
//           keyExtractor={item => item.id}
//           renderItem={({item}) => <ListItem {...item} />}
//           ItemSeparatorComponent={() => <Separator />}
//         />
//       </SafeAreaView>
//     </>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   itemSeparator: {
//     flex: 1,
//     height: 1,
//     backgroundColor: '#444',
//   },
// });
// export default ProductDetails;
