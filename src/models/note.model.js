const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({
    title: { type: String, require: true},
    description: { type: String, require: true},
    is_read: { type: Boolean, default: false}
}, {
    timestamps: true
});

NoteSchema.pre('save', async function (next) {
    const note = this;
    if(note.isModified("title") || note.isModified('description')){
        note.is_read= true;
    }
    next();
})

module.exports = mongoose.model('Note', NoteSchema);