import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItems extends Component {

    onDelete = (id) => {
        this.props.onDelete(id)
    }

    render() {
        var { product, index } = this.props
        var productStatus = product.status ? 'Còn Hàng' : 'Hết Hàng';
        var classStatus = product.status ? 'info' : 'default';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`label label-${classStatus}`}>
                        {productStatus}
                    </span>
                </td>
                <td>
                    <Link
                        to={`product/${product.id}/edit`}
                        className="btn btn-success no-border mr-10"
                    >
                        Sửa
                    </Link>
                    <button
                        type="button"
                        className="btn btn-danger no-border"
                        onClick={() => this.onDelete(product.id)}
                    >
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

export default ProductItems;