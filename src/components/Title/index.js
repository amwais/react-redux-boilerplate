import { connect } from 'react-redux';
import Title from './Title';

const mapStateToProps = ({ title }) => title;

export default connect(mapStateToProps)(Title);