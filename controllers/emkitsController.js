
exports.getEmkits = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "This route will show all Emergency Kits in the database."
    })
}