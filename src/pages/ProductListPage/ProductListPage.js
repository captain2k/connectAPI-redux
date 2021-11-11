import React, { Component } from 'react';
import ProductItems from '../../components/ProductItems/ProductItems';
import ProductList from "./../../components/ProductList/ProductList";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProductRequest, deleteProductRequest } from "./../../actions/index"


class ProductListPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        this.props.fetchAllProducts()
    }

    onDelete = (id) => {
        if (window.confirm("Bạn có chắc muốn xóa sản phẩm không?")) {
            this.props.deleteProduct(id)
        }
    }

    showProduct = (products) => {
        var result = null;
        result = products.map((product, index) => {
            return (
                <ProductItems
                    key={index}
                    product={product}
                    index={index}
                    onDelete={this.onDelete}
                />
            )
        })
        return result;
    }

    render() {
        var { products } = this.props
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Link
                            to="/product/add"
                            className="btn btn-info mbb-10 no-border"
                        >
                            Thêm sản phẩm
                        </Link>
                        <ProductList>
                            {this.showProduct(products)}
                        </ProductList>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.productsReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(fetchProductRequest())
        },

        deleteProduct: (id) => {
            dispatch(deleteProductRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);