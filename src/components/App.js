import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import {
	getListingAPI,
	reprioritizeTaskAPI,
	changeTaskStatusAPI,
} from "../api/miniTrelloApis";

import { BoardOrder, Boards, Tasks } from "../constants";

import Board from "./Board";

export const App = () => {
	// Board Orders - RESOURCES, TODO, DOING......
	const [boardOrder, setBoardOrder] = useState(BoardOrder);

	// It will contain board id, name, and its tasks
	const [boards, setBoards] = useState(Boards);

	// It will store all data related to a particular tasks
	const [tasks, setTasks] = useState(Tasks);

	useEffect(() => {
		// listing tasks api call
		getTaskLists();
	}, []);

	const getTaskLists = async () => {
		try {
			const response = await getListingAPI();
			// The expected format of data can be checked under - /Users/aakanksha/Desktop/trello/src/constants/index.js
			const {
				miniTrelloBoardOrder,
				miniTrelloBoards,
				miniTrelloTasks,
			} = response.data;
			setBoardOrder(miniTrelloBoardOrder);
			setBoards(miniTrelloBoards);
			setTasks(miniTrelloTasks);
		} catch (e) {
			console.log(e);
		}
	};

	const handleDrag = (dragResult) => {
		const { draggableId: taskId, source, destination } = dragResult;
		handleDraggedState(taskId, source, destination);
	};

	const handleDraggedState = async (taskId, source, destination) => {
		if (destination) {
			const sourceBoardId = source.droppableId;
			const destinationBoardId = destination.droppableId;
			const sourceTaskIndex = source.index;
			const destinationTaskIndex = destination.index;

			/*
			// Handling API calls
			// =====================================================
			if (destinationBoardId !== sourceBoardId) {
				try {
					await changeTaskStatusAPI({
						taskId,
						sourceBoardId,
						destinationBoardId,
						sourceTaskIndex,
						destinationTaskIndex,
					});
					getTaskLists(); // Once the api is executed succefully, we need to get the latest updated list.
				} catch (e) {
					console.log(e);
				}
			} else if (destination.index !== source.index) {
				try {
					await reprioritizeTaskAPI({
						taskId,
						sourceBoardId,
						sourceTaskIndex,
						destinationTaskIndex,
					});
					getTaskLists(); // Once the api is executed succefully, we need to get the latest updated list.
				} catch (e) {
					console.log(e);
				}
			}
			*/

            // Since I am not using API, I need to change the state as per the UI events
            // Incase of working api, we can remove below section completely

			// TODO - remove from source taskOrder and insert into destination taskOrder

			let updatedSourceTaskOrder = boards[sourceBoardId].taskOrder;
			let updatedDestinationTaskOrder = boards[destinationBoardId].taskOrder;

			updatedSourceTaskOrder.splice(sourceTaskIndex, 1); // removing task index from source index
			updatedDestinationTaskOrder.splice(destinationTaskIndex, 0, taskId); // adding task index from source at its exact postion

			// updating the state
			setBoards({
				...boards,
				[sourceBoardId]: {
					...boards[sourceBoardId],
					taskOrder: [...updatedSourceTaskOrder],
				},
				[destinationBoardId]: {
					...boards[destinationBoardId],
					taskOrder: [...updatedDestinationTaskOrder],
				},
			});
		}
	};

	return (
		<main>
			<DragDropContext onDragEnd={handleDrag}>
				{boardOrder.map((boardId) => {
					const board = boards[boardId];
					const taskList =
						board.taskOrder &&
						board.taskOrder.map((taskId) => tasks[taskId]);
					return (
						<Board key={boardId} board={board} tasks={taskList} />
					);
				})}
			</DragDropContext>
		</main>
	);
};

export default App;
