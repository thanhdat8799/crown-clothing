import React from 'react';

import {connect} from 'react-redux';

import './collection.styles.scss';

import {selectCollection} from '../../redux/shop/shop.selector';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({collection}) => {
    const {title} = collection;
    return (
    <div className='collection-page'>
        <h2 className="title">{title}</h2>
        <div className="items">
            {collection.items.map(item => 
            <CollectionItem key={item.id} item={item}/>)}
        </div>
    </div>
)} 

const mapStateToProps = (state, { match: { params: { collectionId } }}) => ({
    collection: selectCollection(collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);