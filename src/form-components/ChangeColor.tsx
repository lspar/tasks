import React, { useState } from "react";
import { Form } from "react-bootstrap";

const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "pink",
    "orange",
    "brown",
];

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>(colors[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>): void {
        setColor(event.target.value);
    }

    return (
        <div>
            {colors.map((colorOption: string) => (
                <Form.Check
                    inline
                    type="radio"
                    name="color"
                    onChange={updateColor}
                    id={"color-" + colorOption}
                    label={colorOption}
                    value={colorOption}
                    checked={color === colorOption}
                    key={colorOption}
                />
            ))}

            <div data-testid="colored-box" style={{ backgroundColor: color }}>
                {color}
            </div>
        </div>
    );
}
