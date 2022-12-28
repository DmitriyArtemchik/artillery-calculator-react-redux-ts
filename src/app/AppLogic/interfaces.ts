export interface MainCoordinates {
    setlatitudeOfPointA: (value: number) => void
    setlongitudeOfPointA: (value: number) => void
    setlatitudeOfPointB: (value: number) => void
    setlongitudeOfPointB: (value: number) => void
    setDistanceSolution: (value: number) => void
}

export interface MainCoordinatesDataFromInput {
    valueA?: number
    valueB?: number
    valueC?: number
    valueD?: number
    valueDistancet?: number
    valueAngledeg?: number
    maximumRangeShot?: number | string
    maximumRangeShotOptics?: number | string
    valueSightMechanicalDivisions?: number  | string
    valueSightMechanicalThousandths?: number | string
    valueOpticalSight?: number | string
    valueAverageDeviationsLateral?: number | string;
}

// export interface DataFromRemoteCalculator {
//     valueDistancet: number 
//     valueAngledeg: number
// }

