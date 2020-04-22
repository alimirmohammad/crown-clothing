import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionsFetching} from '../../redux/shop/shop-selectors';
import {compose} from 'redux';
import withSpinner from '../with-spinner/with-spinner';
import CollectionOverview from './collection-overview';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionsFetching
});

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;