import Navbar from './Navbar';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/authActions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ auth }) => ({
	auth
});

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));
