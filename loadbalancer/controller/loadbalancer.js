const forwardToLoadbalancer = async (req, res) => {
  try {
    const { URL, PORT } = req.server;

    const response = await fetch(`${URL}${PORT}`);
    const obj = await response.json();

    res.send(obj.data);
  } catch (error) {}
};

module.exports = {
  forwardToLoadbalancer,
};
