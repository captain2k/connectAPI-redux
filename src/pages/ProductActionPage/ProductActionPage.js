import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { addProductRequest, editProductRequest, updateProductRequest } from '../../actions';
import { connect } from 'react-redux';

class ProductActionPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            price: '',
            status: ''
        }
    }

    componentDidMount() {
        var { match } = this.props
        if (match) {
            var id = match.params.id
            this.props.editProduct(id)
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.productEdit) {
            var { productEdit } = nextProps
            this.setState({
                id: productEdit.id,
                name: productEdit.name,
                price: productEdit.price,
                status: productEdit.status
            })
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    onSave = (e) => {
        const { history } = this.props
        e.preventDefault();
        var { name, price, status, id } = this.state
        var product = {
            id,
            name,
            price,
            status
        }
        if ((name && price) || status) {
            if (id) {
                this.props.updateProduct(product)
                history.goBack()

            } else {
                this.props.addProduct(product)
                history.goBack()
            }
        }
    }


    render() {
        var { name, price, status } = this.state

        return (
            <div className="row" style={{ paddingLeft: 273 }}>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <form onSubmit={this.onSave}>
                        <legend>Thêm sản phẩm</legend>
                        <div className="form-group">
                            <label>Tên Sản Phẩm:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={name}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Giá:</label>
                            <input
                                type="number"
                                className="form-control"
                                name="price"
                                value={price}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Trạng Thái</label>
                            <div className="checkbox">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="status"
                                        value={status}
                                        onChange={this.onChange}
                                        checked={status}
                                    />
                                    Còn Hàng
                                </label>
                            </div>
                        </div>
                        <Link to="/product-list" className="btn btn-danger mr-10">
                            Quay lại
                        </Link>
                        <button type="submit" className="btn btn-primary">Lưu Lại</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        productEdit: state.editProductReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        addProduct: (product) => {
            dispatch(addProductRequest(product))
        },

        editProduct: (id) => {
            dispatch(editProductRequest(id))
        },

        updateProduct: (product) => {
            dispatch(updateProductRequest(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);