import { connect, } from 'react-redux'
import { bindActionCreators, } from 'redux'
import { setLoadedItems, } from '../../../modules/item/actions/creators'

import Component from '../components/MainView/MainView'

const mapStateToProps = reduxState => ({
  loadedItems: reduxState.item.loadedItems,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setLoadedItems,
}, dispatch)

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Component)

export default ConnectedComponent
