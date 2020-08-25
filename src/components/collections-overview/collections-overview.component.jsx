import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForOverview } from '../../redux/shop/shop.selector';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const CollectionsOverview = ({ collections }) => {
    // console.log(collections);
    return (
    <div className='collections-overview'>
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
);}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForOverview
})

export default connect(mapStateToProps)(CollectionsOverview);