// controllers/health.controller.ts
import type { Request, Response } from "express";

export const getHealth = (_req: Request, res: Response) => {
  res.status(200).json({ data: { status: "ok" } });
};

export const getDatabaseHealth = async (_req: Request, res: Response) => {
  try {
    // Aquí puedes probar la conexión real a tu base de datos.
    // Ejemplo con Sequelize: await sequelize.authenticate();
    // Ejemplo con Prisma: await prisma.$connect();

    res.status(200).json({
      data: {
        database: { status: "connected" },
      },
    });
  } catch (error: any) {
    res.status(500).json({
      data: {
        database: { status: "error", detail: error.message },
      },
    });
  }
};
