import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { compose } from "redux";
import withSpinner from "../../components/with-spinner/with-spinner";
import CollectionPage from "./collection";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop-selectors";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionPage);

export default CollectionPageContainer;
