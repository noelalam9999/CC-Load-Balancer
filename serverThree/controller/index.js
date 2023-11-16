const generateResponse = async (req, res) => {
  try {
    res.send({ data: "Hello From Backend Server Three" });
  } catch (error) {}
};

module.exports = {
  generateResponse,
};
