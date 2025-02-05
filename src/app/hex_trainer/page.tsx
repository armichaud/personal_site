"use client";

import { useState } from "react"

enum Training {
    HEX_TO_DEC = "Convert Hexadecimal to Decimal",
    DEC_TO_HEX = "Convert Decimal to Hexadecimal",
    SOLVE_EQ = "Solve an Equation with Hexadecimal Operands",
}



const HexTrainer = (): JSX.Element => {
    const [selectedTraining, setSelectedTraining] = useState<Training | null>(null);

    return <>
        {Object.values(Training).map(training => <button>{training}</button>)}
    </>
}

export default HexTrainer;