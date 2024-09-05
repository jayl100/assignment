const express = require('express')
const app = express()
app.listen(9000)

// ++++ 메인페이지 +++++++++++++++++++++++++++++++++++++++

app.get("/", (req, res) => {
    res.json({
        message: 'welcome to the camping site!'
    })
})

// ++++ MAP +++++++++++++++++++++++++++++++++++++++

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
let id = 1

db.set(id++, noeul)
db.set(id++, gyegok)
db.set(id++, apbada)

// ++++ GET +++++++++++++++++++++++++++++++++++++++

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

// ++++ GET.전체조회 +++++++++++++++++++++++++++++++++++++++

app.get('/campsites', (req, res) => {

    let campSites = {}
    db.forEach(function(value, key) {
        campSites[key] = value
    })

    res.json(campSites)
})

// ++++ POST +++++++++++++++++++++++++++++++++++++++

app.use(express.json())

app.post('/campsites', (req, res) => {
    console.log(req.body)

    db.set(id++, req.body)

    res.json({
        message : `${db.get(id-1).name}에 오신 것을 환영합니다.`
    })
})

// ++++ DELETE +++++++++++++++++++++++++++++++++++++++

app.delete('/campsites/:id', (req, res) => {
    let id = req.params.id
    id = parseInt(id)

    let campSites = db.get(id)

    if (campSites == undefined) {
        res.json({
            message : `해당 캠핑장은 존재하지 않습니다.`
        })
    } else {
        const name = campSites.name
        db.delete(id)

        res.json({
            message : `${name} 캠핑장은 삭제되었습니다.`
        })
    }
})

// ++++ DELETE.전체삭제 +++++++++++++++++++++++++++++++++++++++

app.delete('/campsites/', (req, res) => {

    if (db.size >= 1) {
        db.clear()
        res.json({
            message : "모든 캠핑장이 삭제되었습니다."
        })
    } else {
        res.json({
            message : "삭제할 캠핑장이 없습니다."
        })
    }
})

// ++++ PUT +++++++++++++++++++++++++++++++++++++++

app.put('/campsites/:id', (req, res) => {
    let {id} = req.params
    id = parseInt(id)

    let campSites = db.get(id)
    let oldName = campSites.name

    if (campSites == undefined) {
        res.json({
            message : "해당 캠핑장은 존재하지 않습니다."
        })
    } else {
        let newName = req.body.name
        campSites.name = newName
        db.set(id, campSites)
        res.json({
            message : `${oldName}의 명칭이 ${newName}으로 변경되었습니다.`
        })
    }
})







