import Sequelize, { Model } from 'sequelize'

class Post extends Model {
    static init(sequelize) {
        super.init(

            {
                category: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                topic: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                description: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                user_id: {
                    type: Sequelize.UUID,
                    allowNull: false
                },

            }

            , {sequelize})
    }
}

export default Post