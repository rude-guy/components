function toCameCase(str) {
  return str.replace(/(-.)/g, ($1) => $1.substring(1).toUpperCase());
}

function makeAttrParams(attrs) {
  const result = {};
  for (let attr in attrs) {
    if (!/^data-/.test(attr)) {
      continue;
    }
    const theAfter = attr.replace(/^data-/, '');
    const transAfter = toCameCase(theAfter);
    result[transAfter] = attrs[attr];
  }
  return result;
}

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
          const dataset = makeAttrParams(this.$attrs);

          const bridgeInfo = this.$vnode.context._bridgeInfo;
          this.$on(eventName, (params) => {
            window.JSBridge.onReceiveUIMessage({
              type: 'triggerEvent',
              body: {
                methodName,
                id: bridgeInfo.id,
                event: {
                  detail: {
                    ...params,
                  },
                  currentTarget: {
                    dataset,
                  },
                },
              },
            });
          });
        }
      },
    },
  ];

  Vue.component(name, opts);
}
