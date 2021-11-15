'use strict'

const controller = {
    getSchedule: function (req, res) {
        try {
            return res.status(200).send({
                message: "get schedule route OK"
            })
        } catch (error) {
            
        }
    },
    saveSchedule: function (req, res) {
        return res.status(200).send({
            message: "save schedule route OK"
        })
    }
}

module.exports = controller;