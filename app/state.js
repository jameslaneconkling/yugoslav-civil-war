export default {
  layers: [
    { id: 'y1989-01-01', date: '1989' },
    { id: 'y1991-06-25', date: 'July 25, 1991' },
    { id: 'y1991-09-25', date: 'Sept. 25, 1991' },
    { id: 'y1992-03-03', date: 'March 3, 1992' },
    { id: 'y1992-04-07', date: 'April 7, 1992' },
    { id: 'y1992-04-28', date: 'April 28, 1992' },
    { id: 'y1993-06-13', date: 'June 13, 1993' },
    { id: 'y1995-09-15', date: 'Sept. 15, 1995' },
    { id: 'y1995-12-14', date: 'Dec. 14, 1995' },
    { id: 'y1998-01-15', date: 'Jan. 15, 1998' },
    { id: 'y2006-06-05', date: 'June 5, 2006' },
    { id: 'y2008-02-17', date: 'Feb. 17, 2008' }
  ],
  currentLayerIdx: 0
};

export const incrementLayerIdx = ({ layers, currentLayerIdx }) => (currentLayerIdx + 1) % layers.length;
export const decrementLayerIdx = ({ layers, currentLayerIdx }) => (((currentLayerIdx - 1) % layers.length) + layers.length) % layers.length;
