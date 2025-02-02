const adminModel = require("../models/adminModel");
const { resposeReturn } = require("../utils/response");
const bcrypt = require("bcrypt");
const { createToken } = require("../utils/tokenCreate");

class authControllers {
  admin_login = async (req, res) => {
    const { email, password } = req.body;

    try {
      const admin = await adminModel.findOne({ email }).select("+password");
      // console.log(admin);

      if (admin) {
        const match = await bcrypt.compare(password, admin.password);
        console.log(match);

        if (match) {
          const token = await createToken({
            id: admin.id,
            role: admin.role,
          });
          res.cookie("accessToken", token, {
            expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
          });
          resposeReturn(res, 200, { token, message: "Login Success" });
        } else {
          resposeReturn(res, 404, { error: "Password Wrong" });
        }
      } else {
        resposeReturn(res, 404, { error: "Email not found" });
      }
    } catch (error) {
      resposeReturn(res, 500, { error: error.message });
    }
  };
}

module.exports = new authControllers();
