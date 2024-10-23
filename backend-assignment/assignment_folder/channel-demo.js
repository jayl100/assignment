const express = require('express')
const app = express()

app.listen(1000)

app.use(express.json())
let db = new Map()
let id = 1

// let userEx = {
//     channelName : "channel-name"
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

app
    .route('/channels')

    // 채널 전체 조회 ++++++++++++++++++++++++++++++++++++++++++++++++
    .get((req, res) => {
        let channels = []

        if (db.size === 0) {
            res.status(404).send('No channels found.')
        } else {
            db.forEach(function (value) {
                channels.push(value)
            })
            res.status(200).json(channels)
        }
    })

    // 채널 개별 생성 ++++++++++++++++++++++++++++++++++++++++++++++++
    .post((req, res) => {
        function isEmpty(obj) {
            return Object.keys(obj).length === 0;
        }

        if (isEmpty(req.body) || !req.body.channelName) {
            res.status(404).send('Please check if the Channel Name is empty.')
        } else {
            db.set(id++, req.body)
            res.status(200).json({
                message: `${req.body.channelName} are successfully created!`
            })
        }
    })

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

app
    .route('/channels/:id')

    // 채널 개별 수정 ++++++++++++++++++++++++++++++++++++++++++++++++
    .put((req, res) => {
        let {id} = req.params
        id = parseInt(id)

        let channelData = db.get(id)
        let oldChannelName = channelData.channelName
        let newChannelName = req.body.channelName

        if (!channelData) {
            res.status(404).send('No channels found.')
        } else {
            if (!newChannelName) {
                res.status(404).send('Please check if the Channel Name is empty.')
            } else {

                channelData.channelName = newChannelName
                db.set(id, channelData)

                res.status(200).json({
                    message: `The channel name has been changed from ${oldChannelName} to ${newChannelName}.`
                })
            }
        }
    })



    // 채널 개별 삭제 ++++++++++++++++++++++++++++++++++++++++++++++++
    .delete((req, res) => {
        let {id} = req.params
        id = parseInt(id)

        let channelData = db.get(id)

        if (!channelData) {
            res.status(404).send('No channels found.')
        } else {
            db.delete(id)
            res.status(200).json({
                message: `${channelData.channelName} are successfully deleted!`
            })
        }
    })

    // 채널 개별 조회 ++++++++++++++++++++++++++++++++++++++++++++++++
    .get((req, res) => {
        let {id} = req.params
        id = parseInt(id)

        let channelData = db.get(id)

        if (!channelData) {
            res.status(404).send('No channels found.')
        } else {
            res.status(200).json({
                message: `${channelData.channelName} are exist`
            })
        }
    })