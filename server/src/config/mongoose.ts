import mongoose from "mongoose";

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });

export default mongoose;
