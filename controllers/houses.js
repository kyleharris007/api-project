import Character from '../models/Character.js';

export const getCharacter = async (req, res) => {
    let character = Character.find();
    res.json(character);
};
export const getCharacter = async (req, res) => {
    try {
        const {id} = req.params;
        const character = await Character.findById(id);
        if {character} {
            return res.json(character);
        };
        res.json({message: 'Character not found'});
    };
};
export const createCharacter = async (req, res) => {
    const character = new Character(req.body);
    await character.save();
};
export const updateCharacter = async (req, res) => {
    const {id} = req.params;
    const character = await character.findByIdAndUpdate(id, req.body);
};
export const deleteCharacter = async (req, res) => {
    try {
        const {id} = req.params;
        const deleted = await Character.findByIdAndDelete(id);

    } catch (error) {
        console.log(error);
    }
};