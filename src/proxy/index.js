export function componentProxy(name, opts) {
  opts.mixins = [
    {
      created() {
        for (const attr in this.$attrs) {
          if (!/^bind/.test(attr)) {
            continue;
          }
          if (!this.$attrs[attr]) {
            continue;
          }

          const eventName = attr.replace(/^bind(.+)/, '$1');
          const methodName = this.$attrs[attr];

          const bridgeInfo = this.$vnode.context._bridgeInfo;
          this.$on(eventName, () => {
            window.JSBridge.onReceiveUIMessage({
              type: 'triggerEvent',
              body: {
                methodName,
                id: bridgeInfo.id,
              },
            });
          });
        }
      },
    },
  ];

  Vue.component(name, opts);
}
