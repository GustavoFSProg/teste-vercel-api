"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);

_dotenv2.default.config()

const { PORT } = process.env

const api = _express2.default.call(void 0, )

api.use(_cors2.default.call(void 0, ))
api.use(_express2.default.json())

api.listen(PORT, () => {
  console.log(` 🔯 Api running: ${PORT}`)
})

api.get('/', (req, res) => {
  return res.json({ msg: " 🔯 API!!" })
})

exports. default = api