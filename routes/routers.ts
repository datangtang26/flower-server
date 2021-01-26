
import UserController from '../controller/UserController';
import WeeklyController from '../controller/WeeklyController';
export = function (app) {

    app.use(function (req, res, next) {
      console.log('Time:', Date.now())
      next()
    });

    app.get('/', function (req, res, next) {
      // ..
      res.render('index.njk')
    });

    app.get('/getProduct', function (req, res, next) {
      // ..
      res.send({
        code: 0,
        message: "",
        data:{
          list: [
            {
              img: 'https://pic1.58cdn.com.cn/gongyu/n_v2db498c66763e46aaa19ff0082ce7d7ea_a24c3b9cf8bad669.jpg',
              text: '花花1',
              info: '这是一段介绍。。。！！！！'
            }, {
              img: 'https://pic1.58cdn.com.cn/gongyu/n_v29ef7020556e14515a50a072d8a8d41db_2b92315295339f63.jpg',
              text: '花花123',
              info: '这是一段介绍。。。！'
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
      })
    });

    // 写信
    app.post('/commit', async function (req, res, next) {
      console.log(req.body);
      res.send(await WeeklyController.sendWeekly(req.body));
      
    });

    // 编辑
    app.post('/edit', async function (req, res, next) {
      console.log(req.body);
      res.send(await WeeklyController.editWeekly(req.body));
    });

    // 获取收件箱列表
    app.get('/receive/list', async function (req, res, next) {
      let {username} = req.query;
      console.log(username);
      res.send(await WeeklyController.getReceiveList(username));
    });

    // 
    app.get('/receive/delete', async function (req, res, next) {
      let {id} = req.query;
      res.send(await WeeklyController.deleteWeekly(id));
    });

    app.get('/sent/list', async function (req, res, next) {
      let {username} = req.query;
      console.log(username);
      res.send(await WeeklyController.getSendList(username));
    });

    app.get('/delete/list', async function (req, res, next) {
      let {username} = req.query;
      console.log(username);
      res.send(await WeeklyController.getDeleteList(username));
    });

    app.get('/weeklyInfo', async function (req, res, next) {
      let {id} = req.query;
      console.log(id);
      res.send(await WeeklyController.getWeeklyInfo(id));
    });

    
};