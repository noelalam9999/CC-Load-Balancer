const generateResponse = async (req, res) => {
  try {
    res.send({ data: "Hello From Backend Server One" });
  } catch (error) {}
};

module.exports = {
  generateResponse,
};
