"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react"
import SelectTrainingMode from "./select_training_mode";

const HexTrainer = (): JSX.Element => {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Hexadecimal Math Trainer</CardTitle>
                    <CardDescription>Choose how you&apos;d like to train.</CardDescription>
                </CardHeader>
                <CardContent>
                    <SelectTrainingMode />
                </CardContent>
            </Card>
        </div>
    );
}

export default HexTrainer;