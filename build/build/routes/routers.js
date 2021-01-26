"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const WeeklyController_1 = require("../controller/WeeklyController");
module.exports = function (app) {
    app.use(function (req, res, next) {
        console.log('Time:', Date.now());
        next();
    });
    app.get('/', function (req, res, next) {
        res.render('index.njk');
    });
    app.get('/getProduct', function (req, res, next) {
        res.send({
            code: 0,
            message: "",
            data: {
                list: [
                    {
                        img: 'https://pic1.58cdn.com.cn/gongyu/n_v2db498c66763e46aaa19ff0082ce7d7ea_a24c3b9cf8bad669.jpg',
                        text: '花花1',
                        info: '这是一段介绍。。。！！！！'
                    }, {
                        img: 'https://pic1.58cdn.com.cn/gongyu/n_v29ef7020556e14515a50a072d8a8d41db_2b92315295339f63.jpg',
                        text: '花花2',
                        info: '这是一段介绍。。。！！！！'
                    },
                    {
                        img: 'https://pic1.58cdn.com.cn/gongyu/n_v20c47657a4e274bafab561513d28bc684_517fdc991eafbfff.jpg',
                        text: '护花2',
                        info: '花花2.。这是一段介绍。。。！！！！'
                    },
                    {
                        img: 'https://pic1.58cdn.com.cn/gongyu/n_v214d80d1ad1c94060b72a3ee2e0de4aa5_e1b954c19c6e0b65.jpg',
                        text: '花花4',
                        info: '花花4。。这是一段介绍。。。！！！！'
                    },
                    {
                        img: 'https://pic1.58cdn.com.cn/gongyu/n_v2a2918c5b3a954d5e92f7048d2c70f14e_4031c7367bdd54ef.png',
                        text: '花花5',
                        info: '花花5。。这是一段介绍。。。！！！！'
                    }
                ]
            }
        });
    });
    app.post('/commit', function (req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            res.send(yield WeeklyController_1.default.sendWeekly(req.body));
        });
    });
    app.post('/edit', function (req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            res.send(yield WeeklyController_1.default.editWeekly(req.body));
        });
    });
    app.get('/receive/list', function (req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let { username } = req.query;
            console.log(username);
            res.send(yield WeeklyController_1.default.getReceiveList(username));
        });
    });
    app.get('/receive/delete', function (req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let { id } = req.query;
            res.send(yield WeeklyController_1.default.deleteWeekly(id));
        });
    });
    app.get('/sent/list', function (req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let { username } = req.query;
            console.log(username);
            res.send(yield WeeklyController_1.default.getSendList(username));
        });
    });
    app.get('/delete/list', function (req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let { username } = req.query;
            console.log(username);
            res.send(yield WeeklyController_1.default.getDeleteList(username));
        });
    });
    app.get('/weeklyInfo', function (req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let { id } = req.query;
            console.log(id);
            res.send(yield WeeklyController_1.default.getWeeklyInfo(id));
        });
    });
};
