import { Component, OnInit, Input, OnChanges,  } from '@angular/core';

@Component({
  selector: 'app-ngx-chart',
  templateUrl: './ngx-chart.component.html',
  styleUrls: ['./ngx-chart.component.css']
})
export class NgxChartComponent implements OnInit, OnChanges {

  constructor() {}
  @Input() newData: { name: string, value: number }[]; // the [] at the end helps it identify as an array holding objects like the one shown

  title = 'Angular Charts';

  view: any[] = [600, 400];

  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Category';
  showYAxisLabel = true;
  yAxisLabel = 'Budget';
  timeline = true;

  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  };

  // pie
  showLabels = true;

  // the name in each object is tethered to each other. If two objects have the name Groceries then they will be
  // stacked bars on top of each other, I want the values to add together
  // data goes here
  public single = [
    {
      name: 'Groceries',
      value: 238.89
    },
    {
      name: 'Rent',
      value: 590.0
    },
    {
      name: 'Car',
      value: 265.0
    },
    {
      name: 'Utilities',
      value: 53.23
    },
    {
      name: 'Dining',
      value: 45.06
    },
    {
      name: 'Credit Card',
      value: 31.0
    },
    {
      name: 'Gas',
      value: 35.0
    },
    {
      name: 'Entertainment',
      value: 31.0
    },
  ];

  onSelect(event) {
    console.log('single: ' + JSON.stringify(this.single));
    console.log('newData: ' + JSON.stringify(this.newData));
    // in the future clicking this button should make the table only list transaction of that category type
  }

  ngOnChanges() {
    if (this.newData.length !== 0) { // makes sure that there is an element in the newData array before running the following code
      const newestData = this.newData[this.newData.length - 1]; // this makes sure we don't have duplicate data inside of the single array
      // create a loop to see if name of any of the single array elements matches the name of newest data
      // if it does match then run code to add the value to the value of the single array element if it doesnt match
      // run the code to add a new element
      this.single = this.single.slice(); // force update by copying the array

      /*
      const matchingDataEntry = this.single.find(function (dataEntry) {
          return dataEntry.name === newestData.name;
      })
      */

      const elementToAddTo = this.single.find(({name}) => name === newestData.name);
      if (elementToAddTo) {
        elementToAddTo.value += newestData.value;
      } else {
        this.single.push(newestData);
      }
      this.newData = null;
      /*let added = false;
      for (let i = 0; i < this.single.length; i++) {
        if (this.single[i].name === newestData.name) {
          console.log('Matching Names');
          this.single[i].value += newestData.value;
          const elementToAddTo = this.single[i];
          elementToAddTo.value += newestData.value;
          //this.single = this.single.splice(i, 1, newestData);
          added = true;
          break;
        }
          // const  b =    [...this.single]; // Make a copy of this.single
          // [...array1, 1, 2, ...array2, ...array3] // merges the arrays together
          // this.single = this.single.slice(); // makes a copy of an array also
          // the OnChange wasn't detecting the change because we were altering the old array and not introducing a new variable
      }
      if (!added) {
        this.single.push(newestData); // this merges this last element of newData array into the single array at the end
      }*/
    }
  }

  ngOnInit() {
  }
}
