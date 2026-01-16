export default {
    dialect: 'postgres',
    host: '0.0.0.0',
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