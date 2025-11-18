import {Table, Column, Model, DataType} from 'sequelize-typescript'

@Table({
    tableName: 'products'
})

class Product extends Model {
    @Column({
        type: DataType.STRING(100)
    })
    name: string

    @Column({
        type: DataType.FLOAT(6,2)
    })
    price: number

    @Column({
        type: DataType.BOOLEAN
    })
    availability: boolean
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
