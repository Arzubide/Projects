import {Table, Column, Model, DataType, Default} from 'sequelize-typescript'

@Table({
    tableName: 'products'
})

class Product extends Model {
    @Column({
        type: DataType.STRING(100)
    })
    declare name: string

    @Column({
        type: DataType.FLOAT(6,2)
    })
    declare price: number

    @Default(false) // Inicialmente availability sera false si no es declarado explicitamente
    @Column({
        type: DataType.BOOLEAN
    })
    declare availability: boolean
}
// Todo el codigo anterior equivale a:
// 
// CREATE TABLE products (
//     id SERIAL PRIMARY KEY,
//     name VARCHAR(100),
//     price FLOAT(6,2),
//     availability BOOLEAN,
//     createdAt TIMESTAMP,
//     updatedAt TIMESTAMP
// );

export default Product
