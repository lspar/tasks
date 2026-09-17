import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>): void {
        setEditMode(event.target.checked);
    }

    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>): void {
        setIsStudent(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>): void {
        setName(event.target.value);
    }

    return (
        <div>
            <Form.Check
                inline
                type="switch"
                id="is-in-edit-mode"
                label="Edit Mode"
                checked={editMode}
                onChange={updateEditMode}
            />
            {editMode ?
                <div>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={updateName}
                        />
                    </Form.Group>

                    <Form.Check
                        inline
                        type="checkbox"
                        id="is-student"
                        label="Student"
                        checked={isStudent}
                        onChange={updateIsStudent}
                    />
                </div>
            :   <div>
                    {" "}
                    {name} is {isStudent ? "a student" : "not a student"}{" "}
                </div>
            }
        </div>
    );
}
