import { connect } from 'react-redux';
import Counter from './Counter';

const mapStateToProps = ({ counter }) => counter;

export default connect(mapStateToProps)(Counter);