import template from './template.html';
import './style.scss';
import { componentProxy } from '../proxy';

componentProxy('ui-text', {
  template,
  props: {
    userSelect: {
      type: Boolean,
      default: false,
    },
  },
});
