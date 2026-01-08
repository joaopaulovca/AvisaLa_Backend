import Sequelize, { Model } from 'sequelize'

class User extends Model {
    static init(sequelize) {
        super.init(

            {
                name: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                data_nascimento: {
                    type: Sequelize.DATEONLY,
                    allowNull: false
                },
                email: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    unique: true
                },
                username: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    unique: true
                },
                password: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                mobile_phone: {
                    type: Sequelize.STRING,
                    allowNull: true
                },
                external_id: {
                    type: Sequelize.INTEGER,
                    allowNull: true
                },
                last_login: {
                    type: Sequelize.DATE,
                    allowNull: true
                }

            }

            , {sequelize})
    }
}

export default User