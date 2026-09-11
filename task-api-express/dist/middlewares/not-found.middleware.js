export const notFound = (req, res) => {
    res.status(404).json({
        error: `No existe ${req.method} ${req.originalUrl}.`
    });
};
