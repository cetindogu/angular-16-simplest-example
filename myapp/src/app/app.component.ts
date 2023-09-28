import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked{
  @logFunctionName
  ngAfterViewChecked(): void {
  }
  @logFunctionName
  ngAfterViewInit(): void {
  }
  @logFunctionName
  ngAfterContentChecked(): void {
  }
  @logFunctionName
  ngAfterContentInit(): void {
  }
  @logFunctionName
  ngDoCheck(): void {
  }
  @logFunctionName
  ngOnChanges(changes: SimpleChanges): void {
  }
  @logFunctionName
  ngOnDestroy(): void {
  }
  @logFunctionName
  ngOnInit(): void {
  }
  title = 'My App';

}
function logFunctionName(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const functionName = propertyKey;
    console.log(`Currently executing function: ${functionName}`);
    return originalMethod.apply(this, args);
  };

  return descriptor;
}