import React, {FC, useEffect, useState} from 'react';
import {Alert, Modal, Text, TextInput, View} from 'react-native';
import {Button, Row} from '../../../components';
import {Strings} from '../../../constants';
import {ComponentProp} from './AddModalTypes';
import {styles} from './AddModalStyles';
import {useDispatch} from 'react-redux';
import {taskSlice} from '../../../redux/Task';

export const AddModal: FC<ComponentProp> = ({
  visible = false,
  setVisible = () => {},
  editTitle,
  editId,
  setEditTitle,
  setEditId,
}) => {
  const [taskName, setTaskName] = useState<string>(editTitle);
  const dispatch = useDispatch();

  useEffect(() => {
    if (editTitle) {
      setTaskName(editTitle);
    }
  }, [editTitle]);

  const addTask = () => {
    if (!taskName) {
      Alert.alert('Enter Task Name');
      return;
    }

    dispatch(
      taskSlice.actions.addTask({
        id: Math.random() * Math.random(),
        title: taskName,
      }),
    );

    setTaskName('');
    setVisible(false);
  };

  const editTask = () => {
    dispatch(
      taskSlice.actions.editTask({
        id: editId,
        title: taskName,
      }),
    );
    setEditId('');
    setEditTitle('');

    setTaskName('');
    setVisible(false);
  };

  return (
    <Modal transparent={true} visible={visible} animationType="slide">
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <TextInput
            value={taskName}
            onChangeText={val => setTaskName(val)}
            placeholder={Strings.TaskName}
            style={styles.input}
          />
          <Row>
            <Button
              onPress={() => (editTitle ? editTask() : addTask())}
              style={styles.button}>
              <Text>{editTitle ? Strings.Update : Strings.AddTask}</Text>
            </Button>
            <Button
              onPress={() => setVisible(false)}
              style={[styles.button, styles.closeBtn]}>
              <Text>{Strings.Close}</Text>
            </Button>
          </Row>
        </View>
      </View>
    </Modal>
  );
};
