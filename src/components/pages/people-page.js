import React, {useState ,useContext } from 'react';
import ItemList from '../item-list';
import {Consumer} from '../swapi-context';

const PeoplePage = () => {
  const [selectedItemId, setSelectedItemId] = useState(1)
    const swapi = useContext(Consumer);
  return (
    <div className="row mb2">
      <div className="col-md-6">
        <ItemList setSelectedItemId={setSelectedItemId} />
      </div>
      <div className="col-md-6">
        <PersonDetails selectedItemId={selectedItemId} />
      </div>
    </div>
  )
}


export default PeoplePage;
