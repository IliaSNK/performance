const db = require('../db');

const tableName = 'Спектакли';

class PerformanceController {
    async getPerformance(req, res) {
        const data = req.query;
        const performance = await db.query(`SELECT * FROM ${tableName}`);
        res.json(performance.rows);
    }
    async createPerformance(req, res) {
        const { name, director, actor, duration, pause } = req.body;
        const values = `('${name}', '${director}', '${actor}', ${duration}, ${pause})`;
        await db.query(`INSERT INTO ${tableName} VALUES ${values}`);
        const performance = await db.query(`SELECT * FROM ${tableName}`);
        res.json(performance.rows);
    } 
    async updatePerformance(req, res) {
        const { name, director, actor, duration, pause } = req.body;
        await db.query(
            `UPDATE ${tableName} ` + 
            `SET "Название_спект."='${name}', Режиссер='${director}', "Гл. актер"='${actor}', Продолжительность_ч=${duration}, Антракт_мин=${pause} ` +
            `WHERE "Название_спект."='${name}'`
        );

        const performance = await db.query(`SELECT * FROM ${tableName}`);
        res.json(performance.rows);
    } 
    async deletePerformance(req, res) {
        const  { name }  = req.body;
        await db.query(`DELETE FROM ${tableName} WHERE "Название_спект."='${name}'`);
        const performance = await db.query(`SELECT * FROM ${tableName}`);
        res.json(performance.rows);
    } 
}

module.exports = new PerformanceController();