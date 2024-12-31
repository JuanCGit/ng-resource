import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  template: `<div class="loader"></div>`,
  styles: [`
    .loader {
      width: 60px;
      height: 30px;
      display: grid;
    }
    .loader:before,
    .loader:after {
      content: "";
      grid-area: 1/1;
      --c: no-repeat linear-gradient(var(--p-select-focus-border-color) 0 0);
      background: var(--c), var(--c), var(--c);
      animation: l14-1 1s infinite linear, l14-2 1s infinite linear;
    }
    .loader:after {
      transform: scale(-1);
    }
    @keyframes l14-1 {
      0%,
      3%    {background-size: 0               4px,4px 0   ,0               4px;}
      16.67%{background-size: calc(50% - 6px) 4px,4px 0   ,0               4px;}
      33.33%{background-size: calc(50% - 6px) 4px,4px 14px,0               4px;}
      46%,
      54%   {background-size: calc(50% - 6px) 4px,4px 14px,calc(50% + 6px) 4px;}
      66.67%{background-size: 0               4px,4px 14px,calc(50% + 6px) 4px;}
      83.33%{background-size: 0               4px,4px 0   ,calc(50% + 6px) 4px;}
      96%,
      100%  {background-size: 0               4px,4px 0   ,0               4px;}
    }
    @keyframes l14-2 {
      0%,49.9%{background-position: 0               50%,left calc(50% - 6px) bottom 13px,left  24px top 3px;}
      50%,100%{background-position: right 36px top 50%,left calc(50% - 6px) top     3px,right 0    top 3px;}
    }
  `]
})
export class LoaderComponent {}