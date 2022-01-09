import mongoose from 'mongoose';

export const connectMongo = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECT);
        console.log('Connection to Mongo DB successul');
    } catch (error) {
        console.log('Error');
    }
};
