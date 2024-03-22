import template from './template.html';
import './style.scss';
import { componentProxy } from '../proxy';

componentProxy('ui-image', {
  template,
  props: {
    src: {
      type: String,
      default: '',
    },
  },
});
