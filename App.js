import { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Text } from 'react-native';
import InputArea from './components/InputArea';
import TaskList from './components/TaskList';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks((curTasks) => {
        return [...curTasks, task];
      });
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    setTasks((curTasks) => { 
      return curTasks.filter((item, i) => i !== index);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.title}>To-Do App</Text>

        <InputArea
          task={task}
          setTask={setTask}
          handleAddTask={handleAddTask}
        />

        <TaskList tasks={tasks} handleDeleteTask={handleDeleteTask} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  subContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
});

export default App;
