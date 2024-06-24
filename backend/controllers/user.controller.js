export const getUserForSidebar = (req, res) => {
  try {
  } catch (err) {
    console.log("Error in getUserForSidebar controller", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
