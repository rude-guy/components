import './style.scss';

let toast = {
  dom: null,
  timer: null,
};

export function showToast(params) {
  const { title, icon, duration } = params;

  if (toast.dom) {
    document.body.removeChild(toast.dom);
    clearTimeout(toast.timer);
  }

  toast.dom = document.createElement('div');
  toast.dom.classList.add(`wx-toast`, `wx-toast--${icon}`);
  toast.dom.innerHTML = `
		<p>${title}</p>
	`;
  document.body.appendChild(toast.dom);
  toast.timer = setTimeout(() => {
    document.body.removeChild(toast.dom);
    toast.dom = null;
  }, duration);
}
