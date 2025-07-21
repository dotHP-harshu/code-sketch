const aiResponse = require("../services/getResponse.service");
module.exports = async function getResponse(req, res) {
  const prompt = req.body.prompt;
  if (!prompt) {
    return res.status(400).json({ error: "No prompt provided." });
  }

  // call the api
  const data = await aiResponse(prompt);
  res.status(200).json(data);
};
