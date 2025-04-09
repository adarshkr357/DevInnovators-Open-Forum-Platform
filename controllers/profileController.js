const { User } = require('../models');

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findOne({ 
      where: { id: req.params.id },
      attributes: ['id', 'username', 'avatar', 'bio', 'createdAt'] // Exclude password
    });
    
    if (!user) return res.status(404).json({ error: 'User not found' });
    
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};