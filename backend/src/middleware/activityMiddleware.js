const AdminActivity = require('../models/AdminActivity');

module.exports = async (req, res, next) => {
  // We only want to log after the request succeeds, so we hook into res.send / res.json
  const originalJson = res.json;
  res.json = function (body) {
    res.locals.body = body;
    originalJson.call(this, body);
  };

  res.on('finish', async () => {
    if (['POST', 'PUT', 'DELETE'].includes(req.method) && res.statusCode >= 200 && res.statusCode < 300) {
      let module = req.path.split('/')[1] || 'General';
      if (req.path.includes('/projects/')) {
        module = 'Project: ' + req.path.split('/projects/')[1].split('/')[0];
      }
      
      let action = 'Updated';
      if (req.method === 'POST') action = 'Added';
      if (req.method === 'DELETE') action = 'Deleted';

      try {
        await AdminActivity.create({
          action,
          module: module.charAt(0).toUpperCase() + module.slice(1),
          details: `${action} record in ${module} module`
        });
      } catch (err) {
        console.error('Activity Logging Error:', err);
      }
    }
  });
  next();
};
