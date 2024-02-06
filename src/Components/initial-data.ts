const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Take out garbage'},
        'task-2': { id: 'task-2', content: 'Charge phone'},
    },
    columns: {
        'column-1' : {
            id: 'column-1',
            title: 'to do',
            taskIds: [ 'task-1', 'task-2'],
        },
    },
    columnOrder: ['column-1'],
};

export default initialData;