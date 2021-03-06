const { generate } = require('cjp')

module.exports = (req, res) => {
    let reqData
    if (req.body) {
        reqData = req.body.t
    } else if (req.query.t) {
        reqData = req.query.t
    } else {
        reqData = decodeURI(req.url.slice(9))
    }
    try {
        res.status(200).send(generate(reqData))
    } catch {
        res.status(500).send('Server Error')
    }
}
