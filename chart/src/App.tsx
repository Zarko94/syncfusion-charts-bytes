import * as React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, ColumnSeries,Selection } from '@syncfusion/ej2-react-charts'

import { IStackTokens, Stack } from '@fluentui/react/lib/Stack';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from '@fluentui/react/lib/Dropdown';
import { DropdownBasicExample } from './dropdownMenu';
import { useState, useEffect } from 'react';




import { allData } from './allData';
import {columnData} from './datasource';



function App() {
  const [chartData,setChartData]=useState<any>([]);
  const [pickedYear,setPickedYear]=useState(0);
  



  useEffect(()=>{
   

   const year= allData.d.filter(item=>item.Year==pickedYear);

   console.log(year);


    setChartData(year);

  },[pickedYear])
  

  let  primaryxAxis:any = { valueType: 'Category' };
  
  



const changeYearHandler=(event:any)=>{
setPickedYear(event.target.value)




}

  return (
    <>
<ChartComponent id='charts'
  primaryXAxis={primaryxAxis}
  title='Data years/months' isMultiSelect={true}  selectionMode='Point'>
  <Inject services={[ColumnSeries, Selection, Category, Legend]} />
  <SeriesCollectionDirective>
    <SeriesDirective
    
    
    dataSource={chartData} xName='Month' yName='Bytes' name='year' type='Column'>
    </SeriesDirective>
   
 
  </SeriesCollectionDirective>
</ChartComponent>

<DropdownBasicExample/>

<form onChange={changeYearHandler}>
        <label>
          Pick the year:
          <select >
            <option value={0}>year</option>
            <option value={2018}>2018</option>
            <option value={2019}>2019</option>
            <option value={2020}>2020</option>
            <option value={2021}>2021</option>
            <option value={2022}>2022</option>
          </select>
        </label>
        
      </form>



</>)
}

export default App;

