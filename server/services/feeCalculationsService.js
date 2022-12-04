const calculateFeeData = (frequency, amount) => {
    const periodsForFrequencies = {
      "weekly": 52,
      "fortnightly": 26,
      "monthly": 12,
      "yearly": 1
    };

    if (frequency == null || amount == null)
    {
      return [];
    }

    return [
      {
        name: 'Sharesies',
        brokerageFees: amount < 3000 ? 
          Number(periodsForFrequencies[frequency] * amount * 0.005).toFixed(2) :
          Number((periodsForFrequencies[frequency] * 3000 * 0.005) + (periodsForFrequencies[frequency] * (3000 - amount) * 0.001)).toFixed(2),
        fxFees: Number(periodsForFrequencies[frequency] * amount * 0.004).toFixed(2),
        managementFees: Number(periodsForFrequencies[frequency] * amount * 0.0003).toFixed(2),
      },
      {
        name: 'Hatch',
        brokerageFees: 3 * periodsForFrequencies[frequency],
        fxFees: Number(periodsForFrequencies[frequency] * amount * 0.005).toFixed(2),
        managementFees: Number(periodsForFrequencies[frequency] * amount * 0.0003).toFixed(2),
      },
      {
        name: 'InvestNow',
        brokerageFees: Number(periodsForFrequencies[frequency] * amount * 0.005).toFixed(2),
        fxFees: 0,
        managementFees: Number(periodsForFrequencies[frequency] * amount * 0.0003).toFixed(2)
      }
    ];
}

module.exports = {
    calculateFeeData
}
