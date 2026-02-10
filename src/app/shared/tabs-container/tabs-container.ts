import { Component, contentChildren, AfterContentInit } from '@angular/core';
import { Tab } from '../tab/tab';

@Component({
  selector: 'app-tabs-container',
  imports: [],
  templateUrl: './tabs-container.html',
  styleUrl: './tabs-container.css',
})
export class TabsContainer implements AfterContentInit {
  tabs = contentChildren(Tab);

  selectTab(tab: Tab) {
    this.tabs().forEach(tab => tab.active.set(false));
    tab.active.set(true);
  }

  ngAfterContentInit(): void {
    this.selectTab(this.tabs()[0]);
  }
}

