const { Schema, model }= require('mongoose');

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
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/] // need email validation
        },
        thoughts: [
            {
            type: Schema.Types.ObjectId,
            ref: "Thought"
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "Users"
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
            // getters? I don't think so?
        },
        id: false
    }
);

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length; // friend vs friends?
});

const User = model('User', UserSchema);

module.exports = User;