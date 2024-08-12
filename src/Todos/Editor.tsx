import { ChangeEventHandler, FC, useState } from "react";
import { Priority } from "./TodoItem";

export const Editor: FC = () => {
    const [title, setTitle] = useState<string>('');
    const [priority, setPriority] = useState<Priority>(Priority.LOW);
    const handleTitleChange: ChangeEventHandler<HTMLInputElement> = e => setTitle(e.target.value);
    const handlePriorityChange: ChangeEventHandler<HTMLInputElement> = e => setPriority(parseInt(e.target.value));

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
                                <select>
                                    <option>assigned to</option>
                                    <option>alex</option>
                                    <option>bob</option>
                                    <option>chris</option>
                                    <option>david</option>
                                    <option>ed</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <textarea className="textarea" placeholder="content" />
                </div>
            </div>

            <div className="columns">
                <div className="column">
                    <div className="field">
                        <div className="control">
                            <label className="checkbox">
                                <input type="checkbox" />Resolved
                            </label>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="field is-grouped is-grouped-right">
                        <div className="control">
                            <div className="buttons has-addons">
                                <button className="button is-link">Save</button>
                                <button className="button is-link is-light">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}