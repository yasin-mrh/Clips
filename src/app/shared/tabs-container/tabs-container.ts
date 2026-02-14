import { Component, contentChildren, AfterContentInit } from '@angular/core';
import { Tab } from '../tab/tab';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-tabs-container',
  imports: [NgClass],
  templateUrl: './tabs-container.html',
  styleUrl: './tabs-container.css',
})
export class TabsContainer implements AfterContentInit {
  tabs = contentChildren(Tab);
  
  ngAfterContentInit(): void {
    this.selectTab(this.tabs()[0]);
  }
  
  selectTab(tab: Tab, e?: Event) {
    this.tabs().forEach(tab => tab.active.set(false));
    tab.active.set(true);

    e?.preventDefault();
  }


  styleTab(tab: Tab) {
    const activeTabStyle = 'bg-indigo-800';
    const passiveTabStyle = 'bg-indigo-400 hover:transition hover:bg-white hover:text-indigo-400';
    
    return {
      [activeTabStyle]: tab.active(),
      [passiveTabStyle]: !tab.active()
    };
  };
}