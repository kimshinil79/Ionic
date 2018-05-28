import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PraysubitemProvider {
  private subitem: string= "";

  setSubItem(item : string) {
    this.subitem = item;
  }

  getSubItem() {
    return this.subitem;
  }
}
