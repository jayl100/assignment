const express = require('express')
const app = express()

app.listen(9000)

app.get("/", (req, res) => {
    res.json({
        message: 'welcome to the camping site!'
    })
})

app.get('/campsites/:id', (req, res) => {
    let {id} = req.params
    id = parseInt(id)
    console.log(id)

    if (db.get(id) == undefined) {
        res.json({
            message: '존재하지 않는 캠핑장 입니다.'
        })
    } else {
        campSites = db.get(id)
        res.json(campSites)
    }
})

// 캠퍼들 정보
let noeul = {
    name : '서울 노을 캠핑장',
    price : 13000,
    siteNum : 429
}
let gyegok = {
    name : '영월 숲속 캠핑장',
    price : 49000,
    siteNum : 34
}
let apbada = {
    name : '연곡 앞바다 캠핑장',
    price : 60000,
    siteNum : 98
}


let db = new Map()
var id = 1

db.set(id++, noeul)
db.set(id++, gyegok)
db.set(id++, apbada)

app.use(express.json())

app.post('/campsites', (req, res) => {
    console.log(req.body)

    db.set(id++, req.body)

    res.json({
        message : `${db.get(id-1).name}에 오신 것을 환영합니다.`
    })
})