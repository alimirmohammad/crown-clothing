import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/shop-selectors';
import './collection-overview.scss';

const CollectionOverview = ({ collections }) => {
    return (
        <div className='collection-overview'>
            {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);