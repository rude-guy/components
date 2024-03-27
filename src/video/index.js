import template from './template.html';
import './style.scss';
import { componentProxy } from '../proxy';
import videojs from 'video.js';
import '../../lib/video-js.scss';

componentProxy('ui-video', {
  template,
  props: {
    id: {
      type: String,
      default: '',
    },
    src: {
      type: String,
      default: '',
    },
    autoplay: {
      type: Boolean,
      default: false,
    },
    loop: {
      type: Boolean,
      default: false,
    },
    controls: {
      type: Boolean,
      default: true,
    },
    muted: {
      type: Boolean,
      default: false,
    },
    poster: {
      type: String,
      default: '',
    },
  },
  methods: {
    init() {
      this.createVideo();
      this.msgHandlder();
    },
    createVideo() {
      this.$nextTick(() => {
        const options = {
          autoplay: this.autoplay,
          controls: this.controls,
          muted: this.muted,
          loop: this.loop,
          poster: this.poster,
        };
        const video = this.$el.querySelector('video');

        this.video = videojs(video, options);
      });
    },
    msgHandlder() {
      window.webkit.message.receive('playVideo', (msg) => {
        if (msg.videoId !== this.id) {
          return;
        }

        this.video.play();
      });
      window.webkit.message.receive('pauseVideo', (msg) => {
        if (msg.videoId !== this.id) {
          return;
        }

        this.video.pause();
      });
    },
  },
  mounted() {
    this.init();
  },
});
