export default {
  layers: [
    { id: 'y1989-01-01', label: '1989' },
    { id: 'y1991-06-25', label: 'July 25, 1991' },
    { id: 'y1991-09-25', label: 'Sept. 25, 1991' },
    { id: 'y1992-03-03', label: 'March 3, 1992' },
    { id: 'y1992-04-07', label: 'April 7, 1992' },
    { id: 'y1992-04-28', label: 'April 28, 1992' },
    { id: 'y1993-06-13', label: 'June 13, 1993' },
    { id: 'y1995-09-15', label: 'Sept. 15, 1995' },
    { id: 'y1995-12-14', label: 'Dec. 14, 1995' },
    { id: 'y1998-01-15', label: 'Jan. 15, 1998' },
    { id: 'y2006-06-05', label: 'June 5, 2006' },
    { id: 'y2008-02-17', label: 'Feb. 17, 2008' }
  ],
  currentLayerIdx: 0
};

export const incrementLayerIdx = ({ layers, currentLayerIdx }) => (currentLayerIdx + 1) % layers.length;
export const decrementLayerIdx = ({ layers, currentLayerIdx }) => (((currentLayerIdx - 1) % layers.length) + layers.length) % layers.length;
