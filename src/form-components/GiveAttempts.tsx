import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requests, setRequests] = useState<string>("");

    function updateRequests(event: React.ChangeEvent<HTMLInputElement>): void {
        setRequests(event.target.value);
    }

    function gainAttempts(): void {
        const num = parseInt(requests);
        if (!isNaN(num)) {
            setAttempts(attempts + num);
        }
    }
    return (
        <div>
            <Form.Group controlId="attempts">
                <Form.Label>Number of Attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={requests}
                    onChange={updateRequests}
                />
            </Form.Group>
            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                disabled={attempts === 0}
            >
                use
            </Button>
            <Button onClick={gainAttempts}>gain</Button>
            Number of Attempts: {attempts}
        </div>
    );
}
