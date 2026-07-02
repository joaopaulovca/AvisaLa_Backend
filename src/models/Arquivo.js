import Sequelize, { Model } from 'sequelize'

class Arquivo extends Model {
    static init(sequelize) {
        super.init(

            {
                name: {
                    type: Sequelize.STRING,
                    allowNull: false
                },                
                arquivopath: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                post_id: {
                    type: Sequelize.UUID,
                    allowNull: false,
                },
              
            }

            , {sequelize})
    }
}



export default Arquivo