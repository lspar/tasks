import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<string>("🎄");

    function alphabetic(): string {
        if (holiday === "❤️") {
            return "🎄";
        } else if (holiday === "🎄") {
            return "🐰";
        } else if (holiday === "🐰") {
            return "🎆";
        } else if (holiday === "🎆") {
            return "🦃";
        } else {
            return "❤️";
        }
    }

    function time(): string {
        if (holiday === "❤️") {
            return "🐰";
        } else if (holiday === "🐰") {
            return "🦃";
        } else if (holiday === "🦃") {
            return "🎄";
        } else if (holiday === "🎄") {
            return "🎆";
        } else {
            return "❤️";
        }
    }
    return (
        <div>
            <Button
                onClick={() => {
                    setHoliday(alphabetic);
                }}
            >
                Advance By Alphabet
            </Button>
            <Button
                onClick={() => {
                    setHoliday(time);
                }}
            >
                Advance By Time of Year
            </Button>
            Holiday: {holiday}
        </div>
    );
}
