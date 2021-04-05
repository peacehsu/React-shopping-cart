import React,{Component} from "react";
import { connect } from "react-redux";
import { filterProducts, sortProducts ,fetchProducts} from "../actions/productActions";
class Filter extends Component{
    render(){
        return (
        <div className="filter">
            <div className="filter-result">
                {!this.props.filteredProducts? (<div>Loading...</div>):
                this.props.filteredProducts.length} 項產品
            </div>
            <div className="filter-sort">
                排序{" "}
                <select
                    value={this.props.sort}
                    onChange={(e) =>
                        this.props.sortProducts(
                            this.props.filteredProducts,
                            e.target.value
                        )}
                >
                    <option value="latest">時間(由新到舊)</option>
                    <option value="lowest">價錢(由低到高)</option>
                </select>
            </div>
            <div className="filter-size">
                尺寸{" "}
                <select
                    value={this.props.size}
                    onChange={(e) =>
                        this.props.filterProducts(this.props.products, e.target.value)
                    }
                >
                    <option value="">ALL</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>
        </div>
        )
    }
}
export default connect(
    (state) => ({
      size: state.products.size,
      sort: state.products.sort,
      products: state.products.items,
      filteredProducts: state.products.filteredItems,
    }),
    {
      filterProducts,
      sortProducts,
    }
  )(Filter);