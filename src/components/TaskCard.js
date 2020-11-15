import React from "react";
import { Draggable } from "react-beautiful-dnd";

class TaskCard extends React.Component {
	render() {
		const { taskDetail, index } = this.props;
		return (
			<Draggable draggableId={taskDetail.id} index={index}>
				{(provided) => (
					<div
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						ref={provided.innerRef}
					>
						<div className="card-block">
							{taskDetail.attachments && (
								<img
									className="attachment"
									src={taskDetail.attachments[0]}
									alt="card-attachment"
								/>
							)}
							<div className="card-desc">
								<div className="card-label">
									{taskDetail.labels &&
										taskDetail.labels.map((label) => (
											<div
												className={`label ${label}`}
												key={label}
											></div>
										))}
								</div>
								<div className="card-heading">
									{taskDetail.heading}
								</div>
								<div className="card-details">
									{taskDetail.dueDate && (
										<div className={`badge ${taskDetail.dueDate.status}`}>
											<i
												className="fa fa-clock-o"
												aria-hidden="true"
											/>
											<span>{taskDetail.dueDate.date}</span>
										</div>
									)}
									{taskDetail.description && (
										<div className="badge">
											<i
												className="fa fa-bars"
												aria-hidden="true"
											/>
										</div>
									)}
									{taskDetail.attachments && (
										<div className="badge">
											<i
												className="fa fa-paperclip"
												aria-hidden="true"
											/>
											<span>
												{taskDetail.attachments.length}
											</span>
										</div>
									)}
									{taskDetail.checklist && (
										<div className={`badge ${taskDetail.checklist.completed === taskDetail.checklist.total ? 'green' : ''}`}>
											<i
												className="fa fa-check-square-o"
												aria-hidden="true"
											></i>
											<span>
												{taskDetail.checklist.completed}
												/{taskDetail.checklist.total}
											</span>
										</div>
									)}
								</div>
								{taskDetail.members &&
									taskDetail.members.map((member) => (
										<img
											key={member}
											className="member"
											src={member}
											alt="member"
										/>
									))}
							</div>
						</div>
					</div>
				)}
			</Draggable>
		);
	}
};

export default TaskCard;