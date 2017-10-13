import yo from 'yo-yo';


const title = label => yo`
<div class="title">
  <h1>${label}</h1>
</div>
`;

const el = title('1989');

export const drawTitle = (state) => {
  const { label } = state.layers[state.currentLayerIdx];

  const newEl = title(label);

  yo.update(el, newEl);
};

document.body.appendChild(el);
