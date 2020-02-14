module.exports = {
    getInventoryList: (req, res) => {
        const dbInstance = req.app.get('db')
        
        dbInstance.get_inventory()
        .then(() => res.sendStatus(200).send(products))
        .catch(err => {
            res.status(500).send({errorMessage: "You botched it big time"})
        })
    }
}