export const getHealth = (_req, res) => {
    res.status(200).json({ data: { status: "ok" } });
};
export const getDatabaseHealth = async (_req, res) => {
    try {
        // Aquí puedes probar la conexión real a tu base de datos.
        // Ejemplo con Sequelize: await sequelize.authenticate();
        // Ejemplo con Prisma: await prisma.$connect();
        res.status(200).json({
            data: {
                database: { status: "connected" },
            },
        });
    }
    catch (error) {
        res.status(500).json({
            data: {
                database: { status: "error", detail: error.message },
            },
        });
    }
};
