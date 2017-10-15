import yo from 'yo-yo';


const title = date => {
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
      <h1 class="">${date}</h1>

      <div class="legend">
        <ul>
          ${legendItems.map(renderLegendItem)}
        </ul>
      </div>

      <div class="source">
        <h3>Source:</h3> Hoshie [<a href="http://www.gnu.org/copyleft/fdl.html">GFDL</a> or <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA-3.0</a>], <a href="https://commons.wikimedia.org/wiki/File%3ABreakup_of_Yugoslavia.gif">via Wikimedia Commons</a> <a>MPIDR Population History GIS Collection</a>
      </div>
    </div>
    `;
};

const el = title('1989');

export const drawTitle = (state) => {
  const { date } = state.layers[state.currentLayerIdx];

  const newEl = title(date);

  yo.update(el, newEl);
};

document.body.appendChild(el);
