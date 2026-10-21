import { Schema, model } from 'mongoose';
export const TASK_STATUSES = ['pending', 'completed'];
const taskSchema = new Schema({
    title: {
        type: String,
        required: [true, 'El título es obligatorio.'],
        trim: true,
        maxlength: [120, 'El título no debe superar 120 caracteres.']
    },
    status: {
        type: String,
        enum: TASK_STATUSES,
        default: 'pending'
    }
}, {
    timestamps: true,
    versionKey: false
});
export const TaskModel = model('Task', taskSchema);
