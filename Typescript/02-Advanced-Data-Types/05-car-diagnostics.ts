type DiagnoseParts = {
    partName: string,
    runDiagnostics(): string
}

function carDiagnostics(
    carBody: { material: string, state: string } & DiagnoseParts,
    tires: { airPressure: number, condition: string } & DiagnoseParts,
    engine: { horsepower: number, oilDensity: number } & DiagnoseParts
) {
    //Example code
}