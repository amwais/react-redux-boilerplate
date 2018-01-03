import { connect } from 'react-redux';
import Title from './Title';
import { setTitle, resetTitle } from '../../actions/title';


const mapStateToProps = ({ title }) => title;
const mapDispatchToProps = dispatch => ({
	onSubmit: ({ title }) => dispatch(setTitle(title)),
	onReset: () => dispatch(resetTitle())
});

export default connect(mapStateToProps, mapDispatchToProps)(Title);