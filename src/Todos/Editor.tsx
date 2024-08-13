import { ChangeEventHandler, FC, useState } from "react";
import { Priority, Props as TodoItemProps } from "./TodoItem";
import teamMembers from './team-members.json';

interface Props extends TodoItemProps{
    onCancel: () => void;
}

export const Editor: FC<Props> = props => {
    const [title, setTitle] = useState<string>(props.title);
    const [priority, setPriority] = useState<Priority>(props.priority);
    const [assignee, setAssignee] = useState<string>(props.assignee ?? '');
    const [content, setContent] = useState<string>(props.content);
    const [resolved, setResolved] = useState<boolean>(props.resolved);

    const handleTitleChange: ChangeEventHandler<HTMLInputElement> = e => setTitle(e.target.value);
    const handlePriorityChange: ChangeEventHandler<HTMLInputElement> = e => setPriority(parseInt(e.target.value));
    const handleAssigneeChange: ChangeEventHandler<HTMLSelectElement> = e => setAssignee(e.target.value);
    const handleContentChange: ChangeEventHandler<HTMLTextAreaElement> = e => setContent(e.target.value);
    const handleResolvedChange: ChangeEventHandler<HTMLInputElement> = e => setResolved(!resolved);

    return (
        <div className="box">
            <div className="field">
                <div className="control">
                    <input type="text" className="input" placeholder="title" value={title} onChange={handleTitleChange} />
                </div>
            </div>
            <div className="columns is-vcentered">
                <div className="column">
                    <div className="field">
                        <div className="control">
                            {
                                Object.entries(Priority)
                                    .filter(([k, v]) => isNaN(Number(k)))
                                    .map(([k, v]) => (
                                        <label className="radio" key={k}>
                                            <input type="radio" checked={priority === v} value={v} onChange={handlePriorityChange} />
                                            {k}
                                        </label>
                                    ))
                            }
                        </div>
                    </div>
                </div>
                <div className="column has-text-right">
                    <div className="field">
                        <div className="control">
                            <div className="select">
                                <select value={assignee} onChange={handleAssigneeChange}>
                                    <option value="">assigned to</option>
                                    {teamMembers.map(m =>
                                        <option value={m} key={m}>{m}</option>
                                    )}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <textarea className="textarea" placeholder="content" value={content} onChange={handleContentChange} />
                </div>
            </div>

            <div className="columns">
                <div className="column">
                    <div className="field">
                        <div className="control">
                            <label className="checkbox">
                                <input type="checkbox" checked={resolved} onChange={handleResolvedChange} />Resolved
                            </label>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="field is-grouped is-grouped-right">
                        <div className="control">
                            <div className="buttons has-addons">
                                <button className="button is-link">Save</button>
                                <button className="button is-link is-light" onClick={props.onCancel}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}