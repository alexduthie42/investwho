const getPing = async (req, res, next) => {
    res.json({"Ping": "okay"});
}

module.exports = {
    getPing
}