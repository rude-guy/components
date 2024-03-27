import template from './template.html';
import './style.scss';
import { componentProxy } from '../proxy';
import Swiper from 'swiper';
import '../../lib/swiper.scss';

componentProxy('ui-swiper', {
  template,
  props: {
    vertical: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    updateItems() {
      this.items = this.$children.filter((child) => child.$options.name === 'ui-swiper-item');
    },

    initSwiper() {
      const self = this;
      new Swiper(this.$el, {
        direction: this.vertical ? 'vertical' : 'horizontal',
        longSwipesRatio: 0.2,
        on: {
          slideChangeTransitionEnd: function () {
            self.$emit('change', {
              current: this.activeIndex,
            });
          },
        },
      });
    },
  },
  mounted() {
    this.updateItems();
    this.$nextTick(() => {
      this.initSwiper();
    });
  },
});
