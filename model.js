import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title"],
    maxlength: [40, "Title cannot be more than 40 characters"],
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
