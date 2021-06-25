import React, { Component } from 'react';
import { connect } from 'react-redux';

class Category extends Component {

  onSelectedCategory = (category)=>{
    const action = {
      type: 'SELECTE_CATEGORY',
      payload: category,
    }
    this.props.dispatch(action)
  }  
  renderHTML = ()=>{
    return this.props.category.map((item)=>{
      return <button onClick ={()=>this.onSelectedCategory(item.type)} className="btn btn-secondary">{item.showName}</button>
    })
  }
	render() {
		return (
      <div className="btn-group container-fluid mb-4">
        {this.renderHTML()}
      </div>
    );
	}
}
const mapStateToProps =(state)=>{
  return{
    category: state.listCategory.categoryList
  }
}
export default connect(mapStateToProps)(Category);