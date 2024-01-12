const noteModel = require("../models/note.model");

const getAll = async (req, res) => {
  try {
    const notes = await noteModel.find();
    return res.status(200).json(notes);
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrio un error al obtener las notas",
      error: error.message,
    });
  }
};

const create = async (req, res) => {
    try {
        let note = new noteModel({
            title: req.body.title,
            description: req.body.description
        });

        await note.save();
        return res.status(201).json({
            message: "Nota creada exitosamente"
        });
    } catch (error) {
        return res.status(500).json({
            message: "Ocurrio un error al crear la nota",
            error: error.message
        });
    }
};

module.exports = {
    getAll,
    create
}