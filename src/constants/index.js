
import attachment from "../assets/attachment.jpg";
import user from "../assets/user.png";
import logo from "../assets/logo.png";

// This is the sample response format I have created.

export const BoardOrder = ['resources', 'todo', 'doing', 'done'];

export const Boards = {
    'resources': {
        id: 'resources',
        name: 'Resources',
        taskOrder: ['task1', 'task2']
    },
    'todo': {
        id: 'todo',
        name: 'To Do',
        taskOrder:  ['task3', 'task4']
    },
    'doing': {
        id: 'doing',
        name: "Doing",
        taskOrder:  ['task5', 'task6', 'task7', 'task8']
    },
    'done': {
        id: 'done',
        name: 'Done',
        // Board with no task should be coming as an empty array as I am using splice() on it.
        taskOrder: []
    }
}

export const Tasks = {
    'task1': {
        id: 'task1',
        heading: 'Taco drone delivery system',
        attachments: [attachment, logo, user],
        checklist: {
            total: 2,
            completed: 0
        },
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        dueDate: {
            date: 'Dec 9',
            status: 'overdue'
        },
        members: [user, logo],
        labels: ['red', 'blue', 'green', 'yellow', 'purple', 'orange']
    },
    'task2': {
        id: 'task2',
        heading: '2021 Goals and KPIs',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        dueDate: {
            date: 'Oct 9',
            status: 'due'
        },
    },
    'task3': {
        id: 'task3',
        heading: 'Employee Manual',
        attachments: [attachment],
        members: [user]
    },
    'task4': {
        id: 'task4',
        heading: 'Brand Guide',
        labels: ['green'],
        checklist: {
            total: 3,
            completed: 3
        },
    },
    'task5': {
        id: 'task5',
        heading: 'The Taco truck world tour',
        attachments: [user]
    },
    'task6': {
        id: 'task6',
        heading: 'Charge my phone',
        dueDate: {
            date: 'Nov 9',
            status: 'completed'
        },
    },
    'task7': {
        id: 'task7',
        heading: 'Learn New Technology',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    'task8': {
        id: 'task8',
        heading: 'Exercise Daily',
        labels: ['purple', 'orange']
    },
}
