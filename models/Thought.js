const { Schema, model, Types } = require('mongoose'); // do we need types?
// date format needed

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: "Please enter a reaction!",
            max: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {

        } // need date format, getters, etc.
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: "Please enter a thought!",
            min: 1,
            max: 280
        },
        createdAt: {

        }, // need date formatting
        username: {
            type: String,
            required: true
        },
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            // getters?
        },
        id: false // check this one
    }
);

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;