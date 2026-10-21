import mongoose from 'mongoose';
export const connectDatabase = async (config) => {
    await mongoose.connect(config.uri, {
        dbName: config.dbName,
        serverSelectionTimeoutMS: 5000
    });
    console.log('Conexión con MongoDB establecida.');
};
