const { feeCalculationsService } = require('../services/index')

const getFeeCalculations = async (req, res) => {
    try {
        let frequency = req.query.frequency;
        let amount = req.query.amount;    

        let data = feeCalculationsService.calculateFeeData(frequency, amount);
        res.json(data);
    } catch(e) {
        throw new Error(e.message)
    }
}


module.exports = {
    getFeeCalculations
}
