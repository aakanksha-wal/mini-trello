import React from "react";
import { Droppable } from "react-beautiful-dnd";
import TaskCard from "./TaskCard";

class Board extends React.Component {
	render() {
		const { board, tasks } = this.props;
		return (
			<div className="board">
				<div className="board-heading">{board.name}</div>
				<Droppable droppableId={board.id}>
					{(provided) => (
						<div
							className="block"
							{...provided.droppableProps}
							ref={provided.innerRef}
						>
							{tasks &&
								tasks.map((task, index) => (
									<TaskCard
										key={task.id}
										taskDetail={task}
										index={index}
									></TaskCard>
								))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
				<div className="add-a-card" onClick={() => {alert('New card Modal')}}>Add a card...</div>
			</div>
		);
	}
}

export default Board;