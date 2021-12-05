const { Schema, model }= require('mongoose');
// date formater?

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: "A username is required!",
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: "An email address is required!",
            // need email validation
        },
        thought: [
            {
            type: Schema.Types.ObjectId,
            ref: "Thought"
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "User" // is this self-referencing?
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
            // getters?
        },
        id: false
    }
);

UserSchema.virtual('friendCount').get(function() {
    return this.friends.reduce((total, friend) => total + friend.length +1, 0); // friend vs friends?
});

const User = model('User', UserSchema);

module.exports = User;