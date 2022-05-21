const jwt = require("jsonwebtoken");
let secret = "jiamizifuchuan"; //密匙
// 生成token
exports.generateToken = function (id, res) {
  let payload = { id, time: new Date() };
  let token = jwt.sign(payload, secret, { expiresIn: 60 * 60 * 24 * 120 }); //120天
  return token;
};

// 解码token
exports.verifyToken = function (e) {
  let payload;
  jwt.verify(e, secret, (err, result) => {
    if (err) {
      payload = 0;
    } else {
      payload = 1;
    }
  });
  return payload;
};
