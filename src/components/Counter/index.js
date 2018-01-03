import { connect } from 'react-redux';
import { increment, decrement, reset } from '../../actions/counter';
import Counter from './Counter';

const mapStateToProps = ({ counter }) => counter;
const mapDispatchToProps = dispatch => ({
  increment: () => { dispatch(increment()) },
  decrement: () => { dispatch(decrement()) },
  reset: () => { dispatch(reset()) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);