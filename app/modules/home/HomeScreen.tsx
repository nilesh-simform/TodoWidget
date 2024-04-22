import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ListRenderItem,
  Text,
  View,
  NativeModules,
} from 'react-native';
import {Button, Row} from '../../components';
import {Strings} from '../../constants';
import {AddModal} from './AddModal/AddModal';
import {styles} from './HomeStyles';
import {TodoType, taskSlice} from '../../redux/Task';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
const {RNSharedWidget} = NativeModules;

const Header = () => {
  return (
    <View style={styles.header}>
      <Text numberOfLines={1} style={styles.headerText}>
        {Strings.HeaderText}
      </Text>
    </View>
  );
};

const HomeScreen = () => {
  const myData = useSelector<RootState, TodoType[]>(state => state.todo.list);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [editTitle, setEditTitle] = useState('');
  const [editId, setEditId] = useState(-1);
  const dispatch = useDispatch();

  const editTask = (id: number, title: string) => {
    setEditId(id);
    setEditTitle(title);
    setOpenModal(true);
  };

  const deleteTask = (id: number) => {
    dispatch(taskSlice.actions.deleteTask(id));
  };

  const setData = () => {
    let latestTaskName = 'No Task Yet';

    if (myData && myData.length > 0) {
      latestTaskName = myData[myData.length - 1].title;
    }

    RNSharedWidget.setData(
      'todoWidgetKey',
      JSON.stringify({
        title: 'Your Latest Task',
        task: latestTaskName,
      }),
      (status: any) => {
        console.log('status', status);
      },
    );
  };

  useEffect(() => {
    setData();
  }, [myData]);


  const renderList: ListRenderItem<TodoType> = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={[styles.itemTitle]} numberOfLines={1}>
          {item?.title}
        </Text>
        <Row style={styles.centeredRow}>
          <Button
            onPress={() => editTask(item?.id, item?.title)}
            style={styles.deleteBtn}>
            <Text>{Strings.Edit}</Text>
          </Button>
          <Button onPress={() => deleteTask(item?.id)} style={styles.deleteBtn}>
            <Text>{Strings.Delete}</Text>
          </Button>
        </Row>
      </View>
    );
  };

  return (
    <>
      <Header />
      <FlatList data={myData || []} renderItem={renderList} />
      <Button
        onPress={() => {
          setOpenModal(true);
          // setData();
        }}
        style={styles.floaterBtn}>
        <Text style={styles.plusIcon}>{Strings.PlucIcon}</Text>
      </Button>
      <AddModal
        editTitle={editTitle}
        editId={editId}
        setEditTitle={setEditTitle}
        setEditId={setEditId}
        visible={openModal}
        setVisible={setOpenModal}
      />
    </>
  );
};

export default HomeScreen;
