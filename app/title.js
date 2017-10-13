import yo from 'yo-yo';


const title = label => {
  const legendItems = [
    { label: 'Yugoslavia', color: 'hsl(227, 100%, 89%)' },
    { label: 'Slovenia', color: 'hsl(33, 100%, 85%)' },
    { label: 'Croatia', color: '#AEE673' },
    { label: 'Macedonia', color: 'hsl(335, 100%, 89%)' },
    { label: 'Montenegro', color: '#F9FF7E' },
    { label: 'Kosovo', color: 'rgba(165, 165, 165, 0.6)' },
  ];

  const renderLegendItem = ({ label, color }) => yo`
    <li>
      <span class="symbol" style="background-color: ${color}"></span>
      <h3>${label}</h3>
    </li>
  `
  return yo`
    <div class="title">
      <h1>${label}</h1>

      <div class="legend">
        <ul>
          ${legendItems.map(renderLegendItem)}
        </ul>
      </div>
    </div>
    `;
};

const el = title('1989');

export const drawTitle = (state) => {
  const { label } = state.layers[state.currentLayerIdx];

  const newEl = title(label);

  yo.update(el, newEl);
};

document.body.appendChild(el);
