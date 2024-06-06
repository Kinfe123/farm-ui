"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/index.ts
var _postgresjs = require('drizzle-orm/postgres-js');
var _postgres = require('postgres'); var _postgres2 = _interopRequireDefault(_postgres);
var connectionString = process.env.DATABASE_URL;
var client = _postgres2.default.call(void 0, connectionString);
var db = _postgresjs.drizzle.call(void 0, client);


exports.db = db;
//# sourceMappingURL=index.js.map