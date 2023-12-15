import mongoose from "mongoose";

export const connectDB = async () => {
try {
    mongoose.connect(process.env.MONGOOSE_URI).then(() => {
        console.log('application is connected to database');
    })
} catch (error) {
    console.log({message: error});
}
}