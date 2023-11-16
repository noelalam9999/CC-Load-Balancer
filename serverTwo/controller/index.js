const generateResponse = async (req, res) => {
  try {
    res.send({ data: "Hello From Backend Server Two" });
  } catch (error) {}
};

module.exports = {
  generateResponse,
};
