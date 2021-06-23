import { useState, useEffect} from 'react';

function useDebouncedValue(value, wait) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect((wait) => {
    const id = setTimeout(() => setDebouncedValue(value), wait);
    return () => clearTimeout(id);
  }, [value]);

  return debouncedValue;
}

function WxrdListDisplay(props) {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebouncedValue(query, 400);
  
  const onChange = event => setQuery(event.target.value);

  const filteredWxrds = props.wxrds.filter(wxrd => {
    return wxrd.getUuid().toLowerCase().includes(debouncedQuery.toLowerCase());
  });

  return (
    <div>
      <h2>Wxrd List</h2>
      <input 
        type="text" 
        value={query} 
        onChange={onChange}
      />
      <div className="list">
        {filteredWxrds.map(wxrd => <div>{wxrd.getUuid()}</div>)}
      </div>
    </div>
  );
}

export default WxrdListDisplay;