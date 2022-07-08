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
  const [pickedYear,setPickedYear]=useState(2021);
  



  useEffect(()=>{
   

   const year= allData.d.filter(item=>item.Year==pickedYear);

   


    setChartData(year);

  },[pickedYear])
  

  let  primaryxAxis:any = { valueType: 'Category' };
  
  



const changeYearHandler=(event:any)=>{
setPickedYear(event.target.value)

}
const years=allData.d.map((item:any)=>item.Year);


const distinctYears=new Set(years);





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
            {Array.from(distinctYears).map(x=><option value={x}>{x}</option>)}
          </select>
        </label>
        
      </form>



</>)
}

export default App;

