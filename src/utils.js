export function calculateClassStatistics(data, property) {
    const classStatistics = {};

    for (const entry of data) {
        const alcoholClass = entry.Alcohol;
console.log('alcoholClass',alcoholClass)
        if (!classStatistics[alcoholClass]) {
            classStatistics[alcoholClass] = {
                [property]: [],
            };
        }

        classStatistics[alcoholClass][property].push(entry[property]);
    }

    for (const alcoholClass in classStatistics) {
        const values = classStatistics[alcoholClass][property];

        // Calculate mean
        const mean = values.reduce((sum, value) => sum + value, 0) / values.length;
        classStatistics[alcoholClass].mean = mean;

        // Calculate median
        const sortedValues = [...values].sort((a, b) => a - b);
        const median = sortedValues[Math.floor(sortedValues.length / 2)];
        classStatistics[alcoholClass].median = median;

        // Calculate mode
        const frequencyMap = {};
        let mode = null;
        let maxFrequency = 0;
        for (const value of values) {
            frequencyMap[value] = (frequencyMap[value] || 0) + 1;
            if (frequencyMap[value] > maxFrequency) {
                maxFrequency = frequencyMap[value];
                mode = value;
            }
        }
        classStatistics[alcoholClass].mode = mode;
    }

    return classStatistics;
}



export function calculateGamma(data) {
    const classStatistics = {};

    for (const entry of data) {
        const { Ash, Hue, Magnesium, Alcohol } = entry;

        const gamma = (Ash * Hue) / Magnesium;

        if (!classStatistics[Alcohol]) {
            classStatistics[Alcohol] = {
                Gamma: [],
            };
        }

        classStatistics[Alcohol].Gamma.push(gamma);
    }

    for (const alcoholClass in classStatistics) {
        const gammaValues = classStatistics[alcoholClass].Gamma;

        // Calculate mean
        const mean = gammaValues.reduce((sum, value) => sum + value, 0) / gammaValues.length;
        classStatistics[alcoholClass].mean = mean;

        // Calculate median
        const sortedGammaValues = [...gammaValues].sort((a, b) => a - b);
        const median = sortedGammaValues[Math.floor(sortedGammaValues.length / 2)];
        classStatistics[alcoholClass].median = median;

        // Calculate mode
        const frequencyMap = {};
        let mode = null;
        let maxFrequency = 0;
        for (const value of gammaValues) {
            frequencyMap[value] = (frequencyMap[value] || 0) + 1;
            if (frequencyMap[value] > maxFrequency) {
                maxFrequency = frequencyMap[value];
                mode = value;
            }
        }
        classStatistics[alcoholClass].mode = mode;
    }

    return classStatistics;
}