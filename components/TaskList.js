import { View, StyleSheet, Text, Pressable } from 'react-native';
import { PropTypes } from 'prop-types';

const TaskList = ({ tasks, handleDeleteTask }) => {
  return (
    <View>
      {tasks.map((item, index) => (
        <View style={styles.taskContainer} key={index}>
          <Text style={styles.task}>{item}</Text>
          <Pressable
            style={styles.deleteButton}
            onPress={() => handleDeleteTask(index)}
          >
            <Text style={styles.deleteButtonText}>Delete</Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  task: {
    fontSize: 18,
    width: '80%',
    color: '#333',
  },
  deleteButton: {
    backgroundColor: '#FF5252',
    padding: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

TaskList.propTypes = {
  tasks: PropTypes.array,
  handleDeleteTask: PropTypes.func,
};

export default TaskList;
