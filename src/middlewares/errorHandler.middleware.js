

export const errorHandling = (err, req, res, next) => {
    console.log(err.stack);
    res.send(500).json({
        status: 500,
        message: "Something went wrong",
        error: err.message
    })

}