//详情
const dbserver = require("../dao/dbserver");

//用户详情
exports.userDetial = function (req, res) {
  let id = req.body.id;
  //   console.log(id);
  dbserver.userDetial(id, res);
};

//信息修改
exports.userUpdate = function (req, res) {
  let data = req.body;
  dbserver.userUpdate(data, res);
};

//忘记密码信息修改
exports.userPasswordUpdate = function (req, res) {
  let data = req.body;
  dbserver.userPasswordUpdate(data, res);
};

//获取好友昵称
exports.getMarkName = function (req, res) {
  let data = req.body;
  dbserver.getMarkName(data, res);
};

// 修改好友昵称
exports.friendMarkName = function (req, res) {
  let data = req.body;
  dbserver.friendMarkName(data, res);
};
