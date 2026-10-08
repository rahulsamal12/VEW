const EngineeringInAction = require('../models/EngineeringInAction');
const EngineeringInActionSettings = require('../models/EngineeringInActionSettings');

// Get all items and settings
exports.getEngineeringInAction = async (req, res) => {
  try {
    const items = await EngineeringInAction.find().sort({ order: 1, createdAt: -1 });
    let settings = await EngineeringInActionSettings.findOne();
    if (!settings) {
      settings = await EngineeringInActionSettings.create({});
    }
    res.json({ data: { items, settings } });
  } catch (error) {
    console.error('Error fetching EngineeringInAction:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new item
exports.createItem = async (req, res) => {
  try {
    const newItem = await EngineeringInAction.create(req.body);
    res.status(201).json({ success: true, data: newItem });
  } catch (error) {
    console.error('Error creating item:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update an item
exports.updateItem = async (req, res) => {
  try {
    const updatedItem = await EngineeringInAction.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedItem) return res.status(404).json({ success: false, message: 'Item not found' });
    res.json({ success: true, data: updatedItem });
  } catch (error) {
    console.error('Error updating item:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete an item
exports.deleteItem = async (req, res) => {
  try {
    const deletedItem = await EngineeringInAction.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).json({ success: false, message: 'Item not found' });
    res.json({ success: true, message: 'Item deleted successfully' });
  } catch (error) {
    console.error('Error deleting item:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update settings
exports.updateSettings = async (req, res) => {
  try {
    let settings = await EngineeringInActionSettings.findOne();
    if (!settings) {
      settings = new EngineeringInActionSettings(req.body);
      await settings.save();
    } else {
      settings = await EngineeringInActionSettings.findOneAndUpdate({}, req.body, { new: true, runValidators: true });
    }
    res.json({ success: true, data: settings });
  } catch (error) {
    console.error('Error updating settings:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
