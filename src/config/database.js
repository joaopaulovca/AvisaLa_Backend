export default {
    dialect: 'postgres',
    host: '172.17.0.2',
    username: 'postgres',
    password: 'postgres',
    database: 'avisaladb',
    port: 5432,
    define: {
        timestamp: true,
        underscored: true,
        underscoredAll: true,
    }
}