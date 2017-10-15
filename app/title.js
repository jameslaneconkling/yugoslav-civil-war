import yo from 'yo-yo';


const title = date => {
  const legendItems = [
    { label: 'Yugoslavia', color: '#DEE4F2' },
    { label: 'Slovenia', color: '#ffdaba' },
    { label: 'Croatia', color: '#CEEBA7' },
    { label: 'Herzeg-Bosnia', color: '#95d28d' },
    { label: 'Macedonia', color: '#EFD1D6' },
    { label: 'Montenegro', color: '#faffae' },
    { label: 'Kosovo', color: '#D6FAE8' },
    { label: 'Republic of Bosnia and Herzegovina', color: '#fff3bf' },
    { label: 'Western Bosnia', color: '#fbdf84' },
    { label: 'Bosnia and Herzegovina', color: '#eaca78' },
    { label: 'Serbia Krajina', color: '#EAE5F9' },
    { label: 'Republika Srpska', color: '#ddd2e4' },
    { label: 'Serbia and Montenegro', color: '#caaed0' },
    { label: 'Serbia', color: '#b184b9' },
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
