const express = require('express')
const app = express()

app.listen(9001)

app.use(express.json())
let db = new Map()
let id = 1

// db_ex.
// let capmingCafeName = {
//     userId : 'seoul_noeul',
//     pwd : 'camping1004',
//     username : '캠핑천사'
// }

app.get("/", function (req, res) {
    res.json({
        message: "Welcome to the camping cafe!"
    })
})

// 회원가입
app.post('/join', function (req, res) {
    const { userId, pwd, username } = req.body;

    if (!userId || !pwd || !username) {
        return res.status(400).json({
            message: `회원가입에 실패했습니다. 내용을 다시 확인해주세요.`
        });
    }

    const userName = req.body.username;
    db.set(id++, req.body);
    res.status(201).json({
        message: `${userName} 님 회원가입을 환영합니다.`
    });
});


// 로그인
app.post('/login', function (req, res) {
})

app
    .route('/users/:id')

    // 회원 개별 조회
    .get(function (req, res) {
        let {id} = req.params
        id = parseInt(id)

        const user = db.get(id)
        if (user === undefined) {
            res.status(404).json({
                message : "없는 회원입니다. 다시 한번 확인해주세요."
            })
        } else {
            res.status(200).json({
                userId : user.userId,
                username: user.username
            })
        }
    })

    // 회원 개별 탈퇴
    .delete(function (req, res) {
        let {id} = req.params
        id = parseInt(id)

        const user = db.get(id)
        if (user === undefined) {
            res.status(404).json({
                message : "회원 정보가 없습니다. 다시 한번 확인해주세요."
            })
        } else {
            db.delete(id)
            res.status(200).json({
                message : `${user.username}님 다음에 또 뵙겠습니다.`
            })
        }
    })
