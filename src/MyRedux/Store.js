import {configureStore} from '@reduxjs/toolkit'
import Handler from '../MyRedux/Handler';

export default configureStore({
  reducer: {
    theme: Handler
  },
})