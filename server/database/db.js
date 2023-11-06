import mongoose from "mongoose";

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-maotkzg-shard-00-00.2xfx5rm.mongodb.net:27017,ac-maotkzg-shard-00-01.2xfx5rm.mongodb.net:27017,ac-maotkzg-shard-00-02.2xfx5rm.mongodb.net:27017/?ssl=true&replicaSet=atlas-11ikl6-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        
        await mongoose.connect(URL, { useNewUrlParser: true});
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database', error);
    }
}

export default Connection;