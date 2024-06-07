import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String, 
        lowercase: true, 
        unique: true, 
        required: [true, "can't be blank"], 
        match: [/^[a-zA-Z0-9]+$/, 'is invalid']
    },
    email:{
        type: String, 
        lowercase: true, 
        unique: true, 
        required: [true, "can't be blank"], 
        match: [/\S+@\S+\.\S+/, 'is invalid']
    },
    password:{
        type: String, 
        required: true, 
    },
    name: String, 
    bio: String, 
    image: String, 
    streak: Number,
    currDate: String, 
    activity:  Number,
    highstreak: Number

})

const User = mongoose.models.users || mongoose.model('users', userSchema)

export default User;